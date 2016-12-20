/**
 * Created by bumpMind on 12/20/2016.
 */

'use strict';

( function () {

    const checkboxes = document.querySelectorAll( '.inbox [type=checkbox]' );
    let lastCheck;

    function chandleCheck( e ) {

        if ( e.shiftKey && this.checked ) {
            let inBetween = false;

            for ( let checkbox of checkboxes ) {

                if ( checkbox === this || checkbox === lastCheck ) {
                    inBetween = !inBetween;
                }

                if ( inBetween ) {
                    checkbox.checked = true;
                }
            }
        }

        lastCheck = this;
    }

    for ( let checkbox of checkboxes ) {
        checkbox.addEventListener( 'click', chandleCheck )
    }



} )();
