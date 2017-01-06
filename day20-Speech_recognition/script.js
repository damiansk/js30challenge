'use strict';

( function () {

	window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

	const recognition = new SpeechRecognition();
	recognition.interimResults = true;
	recognition.lang = 'pl-PL';

	let p = document.createElement( 'p' );
	const classWords = document.querySelector( '.words' );

	classWords.appendChild( p );

	recognition.addEventListener( 'result', e => {
		const transcript = [...e.results]
			.map( result => result[0] )
			.map( result => result.transcript )
			.join( '' );


		p.textContent = transcript;

		if ( e.results[0].isFinal ) {

			if ( transcript.includes('jednorożec') || transcript.includes('jednorożca') ) {
				const unicorn = document.createElement( 'p' );
				unicorn.innerHTML = '<img src="https://s-media-cache-ak0.pinimg.com/originals/62/7d/24/627d24ddcca0074306c8098cd509beeb.png" alt="unicorns">';
				classWords.appendChild( unicorn );
			}

			p = document.createElement( 'p' );
			classWords.appendChild( p );
		}

	} );

	recognition.addEventListener( 'end', recognition.start );

	recognition.start();

} )();
