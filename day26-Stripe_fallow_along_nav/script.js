'use strict';

( function () {

	const triggers = document.querySelectorAll( '.cool > li' );
	const background = document.querySelector( '.dropdownBackground' );
	const nav = document.querySelector( '.top' );

	function handleEnter() {
		this.classList.add( 'trigger-enter' );
		setTimeout( () => this.classList.contains( 'trigger-enter' ) && this.classList.add( 'trigger-enter-active' ), 150 );

		background.classList.add( 'open' );

		const dropdown = this.querySelector( '.dropdown' );
		const dropdownCoord = dropdown.getBoundingClientRect();
		const navCoords = nav.getBoundingClientRect();

		const coords = {
			height: dropdownCoord.height,
			width: dropdownCoord.width,
			top: dropdownCoord.top - navCoords.top,
			left: dropdownCoord.left - navCoords.left
		};

		background.style.setProperty( 'width', `${coords.width}px` );
		background.style.setProperty( 'height', `${coords.height}px` );
		background.style.setProperty( 'transform', `translate( ${coords.left}px, ${coords.top}px` );
	}


	function handleLeave() {
		this.classList.remove( 'trigger-enter', 'trigger-enter-active' );
		background.classList.remove( 'open' );
	}

	for ( let trigger of triggers ) {
		trigger.addEventListener( 'mouseenter', handleEnter );
		trigger.addEventListener( 'mouseleave', handleLeave )
	}

} )();