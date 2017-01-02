'use strict';

( function () {

	const timeNodes = [...document.querySelectorAll( '[data-time]' )];

	const seconds = timeNodes
		.map( node => node.dataset.time )
		.map( timeCode => {
			const [ min, sec] = timeCode.split( ':' ).map( parseFloat );
			return ( min * 60 ) + sec;
		} )
		.reduce( ( total, vidSeconds ) => total + vidSeconds);
		// callback ( accumulator, currentValue ) - sth like foreach

	let secondsLeft = seconds;

	const hours = Math.floor( secondsLeft / 3600 );
	secondsLeft %= 3600;

	const minutes = Math.floor( secondsLeft / 60 );
	secondsLeft %= 60;

	console.log( hours, minutes, secondsLeft );

} )();