'use strict';


( function () {

	const holes = document.querySelectorAll( '.hole' );
	const scoreBoard = document.querySelector( '.score' );
	const moles = document.querySelectorAll( '.mole' );

	let lastHole;
	let score;
	let timeUp = false;

	function randomTime ( min, max) {
		return Math.round( Math.random() * ( max - min ) + min );
	}

	function randomHole ( holes ) {
		const index = Math.floor( Math.random() * ( holes.length ) );
		const hole = holes[index];

		if ( lastHole === hole ) {
			return randomHole( holes );
		}

		lastHole = hole;
		return hole;
	}

	function peep () {
		const time = randomTime( 200, 1000 );
		const hole = randomHole( holes );

		hole.classList.add( 'up' );

		setTimeout( () => {
			hole.classList.remove( 'up' );
			if ( !timeUp ) {
				peep();
			}
		}, time );
	}

	function startGame () {
		scoreBoard.textContent = 0;
		score = 0;
		timeUp = false;

		peep();

		setTimeout( () => timeUp = true, 10000 );
	}

	function bonk ( e ) {
		if ( !e.isTrusted ) return;

		score++;
		this.classList.remove( 'up' );
		scoreBoard.textContent = score;
	}


	for ( let mole of moles ) {
		mole.addEventListener( 'click', bonk );
	}

	document.querySelector( '#start-button' ).addEventListener( 'click', startGame );

} )();
