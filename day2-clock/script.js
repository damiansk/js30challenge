/**
 * Created by bumpMind on 12/11/2016.
 */
'use strict';
(function () {

    const secondHand = document.querySelector( '.second-hand' );
    const minHand = document.querySelector( '.min-hand' );
    const hourHand = document.querySelector( '.hour-hand' );

    function setDate() {
        const now = new Date();
        const seconds = now.getSeconds();
        const minutes = now.getMinutes();
        const hours = now.getHours();

        const secondDegree = ( ( seconds / 60 ) * 360 ) + 90;
        const minutesDegree = ( ( minutes / 60 ) * 360 ) + 90;
        const hoursDegree = ( ( hours / 60 ) * 360 ) + 90;

        secondHand.style.transform = `rotate(${secondDegree}deg)`;
        minHand.style.transform = `rotate(${minutesDegree}deg)`;
        hourHand.style.transform = `rotate(${hoursDegree}deg)`;

        console.log( seconds );
    }

    setInterval( setDate, 1000 );
    
})();
