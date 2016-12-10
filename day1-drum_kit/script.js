/**
 * Created by bumpMind on 12/10/2016.
 */
'use strict';

(function () {

    function onKeyDownEvent ( e ) {
        const key = document.querySelector( `.key[data-key="${ e.keyCode }"]` );
        const audio = document.querySelector( `audio[data-key="${ e.keyCode }"]` );

        if ( key === null ) {
            return;
        }

        audio.currentTime = 0;
        audio.play();

        key.classList.add( 'playing' );
    }

    function onTransitionEndEvent ( e ) {
        if ( e.propertyName === 'transform' ) {
            setTimeout( function () {
                e.srcElement.classList.remove( 'playing' );
            }, e.elapsedTime );
        }
    }


    const keys = document.querySelectorAll( '.key' );

    for ( let key of keys ) {
        key.addEventListener( 'transitionend', onTransitionEndEvent );
    }

    window.addEventListener( 'keydown', onKeyDownEvent );

})();