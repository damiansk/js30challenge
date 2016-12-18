/**
 * Created by bumpMind on 12/18/2016.
 */
"use strict";

(function () {

    const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
    let cities = [];

    fetch( endpoint )
        .then( blob => blob.json() )
        .then( data => cities.push( ...data ) );

    function findMatches( wordToMatch, cities ) {
        return cities.filter( function ( place ) {
            const regex = new RegExp( wordToMatch, 'gi' );
            return place.city.match( regex ) || place.state.match( regex );
        });
    }

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

/*    // Give fetch time to download data
    setTimeout( function() {
        console.table( findMatches( 'Bos', cities ) );
    }, 1000 );*/

    function displayMatches() {
        const matchArray = findMatches( this.value, cities );
        const html = matchArray.map( place => {
            const regex = new RegExp( this.value, 'gi' );
            const cityName = place.city.replace( regex, `<span class="hl">${ this.value }</span>` );
            const stateName = place.state.replace( regex, `<span class="hl">${ this.value }</span>` );
            return `
                <li>
                    <span class="name">${ cityName }, ${ stateName }</span>
                    <span class="population">${ numberWithCommas( place.population ) }</span>
                </li>
            `;
        }).join( '' );

        suggestions.innerHTML = html;
    }

    const searchInput = document.querySelector( '.search' );
    const suggestions = document.querySelector( '.suggestions' );

    searchInput.addEventListener( 'change', displayMatches );
    searchInput.addEventListener( 'keyup', displayMatches );

})();