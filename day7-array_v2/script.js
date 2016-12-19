/**
 * Created by bumpMind on 12/19/2016.
 */

"use strict";

( function() {

    const people = [
        { name: 'Wes', year: 1988 },
        { name: 'Kait', year: 1986 },
        { name: 'Irv', year: 1970 },
        { name: 'Lux', year: 2015 }
    ];
    const comments = [
        { text: 'Love this!', id: 523423 },
        { text: 'Super good', id: 823423 },
        { text: 'You are the best', id: 2039842 },
        { text: 'Ramen is my fav food ever', id: 123523 },
        { text: 'Nice Nice Nice!', id: 542328 }
    ];

    // Some and Every Checks
    // Array.prototype.some() // is at least one person 19?
    const some = people.some( person => new Date().getFullYear() - person.year >= 19 );
    // IN {} show whole object with attribute
    console.log( { some } );






    // Array.prototype.every() // is everyone 19?
    const every = people.every( person => new Date().getFullYear() - person.year >= 19);

    console.log( every );





    // Array.prototype.find()
    // Find is like filter, but instead returns just the one you are looking for
    // find the comment with the ID of 823423
    const find = comments.find( comment => comment.id === 823423 );

    console.log( find );





    // Array.prototype.findIndex()
    // Find the comment with this ID
    const findIndex = comments.findIndex( comment => comment.id === 823423 );

    console.log( findIndex );




    // delete the comment with the ID of 823423

    const newComments = [
        ...comments.slice( 0, findIndex ),
        ...comments.slice( findIndex + 1 )
    ];

    console.log( newComments );

})();
