/**
 * Created by bumpMind on 12/22/2016.
 */

'use strict';

( function () {

    const pressed = [];
    const secretCode = 'wesbos';

    window.addEventListener( 'keyup', ( e ) => {
        pressed.push( e.key );
        pressed.splice( -secretCode.length - 1, pressed.length - secretCode.length );

        if ( pressed.join( '' ).includes( secretCode ) ) {
            cornify_add();
        }

        console.log( pressed );

    } );

} )();