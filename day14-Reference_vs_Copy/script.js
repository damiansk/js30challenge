/**
 * Created by bumpMind on 12/27/2016.
 */

'use strict';

( function () {

	// start with strings, numbers and booleans
	let age = 100;
	let age2 = age;
	console.log( age, age2 );
	age = 200;
	console.log( age, age2 );

	let name = `Wes`;
	let name2 = name;
	console.log( name, name2 );
	name = `wesley`;
	console.log( name, name2 );

	console.clear();



	// Let's say we have an array
	const players = ['Wes', 'Sarah', 'Ryan', 'Poppy', 'Smith'];
	// and we want to make a copy of it.
	const team = players;
	console.log( players, team );
	team[3] = `Lux`;
	console.log( players, team );

	console.clear();


	const team2 = players.slice();
	const team3 = [].concat( players );
	const team4 = [...players];
	const team5 = Array.from( players );
	players[0] = `Flux`;
	team2[1] = `Flux`;
	team3[2] = `Flux`;
	team4[3] = `Flux`;
	team5[4] = `Flux`;
	console.log( players, team2, team3, team4, team5 );

	console.clear();



	const person = {
		name: `Wes Bos`,
		age: 80
	};
	const capitan = person;
	const capitan2 = Object.assign( {}, person, { number: 99 } );
	console.log( person, capitan, capitan2 );

	console.clear();



	const wes = {
		name: `Wes`,
		age: 100,
		social: {
			twitter: `Wesbos`,
			facebook: `wesbos.developer`
		}
	};
	const dev = Object.assign( {}, wes );
	const dev2 = JSON.parse( JSON.stringify( wes ) );
	wes.name = `Wesley`;
	wes.social.twitter = '@coolman';

	console.log( wes, dev, dev2 );

} )();
