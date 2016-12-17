/**
 * Created by bumpMind on 12/17/2016.
 */

'use strict';

(function () {

    const panels = document.querySelectorAll( '.panel' );

    function openToggle() {
        this.classList.toggle( 'open' );
    }

    function openActiveToggle( e ) {
        if ( e.propertyName.includes( 'flex' ) ) {
            this.classList.toggle( 'open-active' );
        }
    }

    for ( let panel of panels ) {
        panel.addEventListener( 'click', openToggle, false );
        panel.addEventListener( 'transitionend', openActiveToggle, false );
    }

})();