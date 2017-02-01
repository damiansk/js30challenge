'use strict';

( function () {

	let countdown;
	const timerDisplay = document.querySelector( '.display__time-left' );
	const endTimeDisplay = document.querySelector( '.display__end-time' );
	const buttons = document.querySelectorAll( '[data-time' );

	function timer ( seconds ) {
		clearInterval( countdown );

		const now = Date.now();
		const then = now + seconds * 1000;

		displayTimeLeft( seconds );
		displayEndTime( then );

		countdown = setInterval( () => {
			const secondsLeft = Math.round( ( then - Date.now() ) / 1000 );

			if ( secondsLeft < 0 ) {
				clearInterval( countdown );
				return;
			}

			displayTimeLeft( secondsLeft );
		}, 1000 );
	}

	function displayTimeLeft ( time ) {
		const minutes = Math.floor( time / 60 );
		const seconds = time % 60;

		const display = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
		timerDisplay.textContent = display;

		document.title = display;
	}

	function displayEndTime ( timestamp ) {
		const end = new Date( timestamp );

		const hours = end.getHours();
		const minutes = end.getMinutes();

		endTimeDisplay.textContent = `Be Back At ${hours > 12 ? hours - 12 : hours}:${minutes < 10 ? '0' : ''}${minutes}`;
	}

	function startTimer () {
		const seconds = parseInt( this.dataset.time );

		timer( seconds );
	}

	for ( let button of buttons ) {
		button.addEventListener( 'click', startTimer );
	}

	document.customForm.addEventListener( 'submit', function ( e ) {
		e.preventDefault();

		const minutes = this.minutes.value;

		timer( minutes * 60 );

		this.reset();
	} );

} )();