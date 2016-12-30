/**
 * Created by bumpMind on 12/29/2016.
 */

'use strict';

( function () {

	const addItems = document.querySelector( '.add-items' );
	const setItems = document.querySelectorAll( '.setItems' );
	const itemsList = document.querySelector( '.plates' );
	const items = JSON.parse( localStorage.getItem( 'items' ) ) || [];


	function populateList( plates = [], platesList ) {
		platesList.innerHTML = plates.map( ( plate, i ) => {
			return `
				<li>
					<input type="checkbox" data-index="${ i }" id="item${ i }" ${ plate.done ? 'checked' : '' } >
					<label for="item${ i }">${ plate.text }</label>
				</li>
			`
		} ).join( '' );
	}

	function addItem( e ) {
		e.preventDefault();
		// Can use this.firstElementChild.value or e.srcElement.firstElementChild.value
		const text = ( this.querySelector( '[name=item]' ) ).value;
		const item = {
			text,
			done: false
		};

		items.push( item );

		populateList( items, itemsList );
		localStorage.setItem( 'items', JSON.stringify( items ) );

		// .reset() on form
		this.reset();
	}

	function toggleDone( e ) {
		if ( !e.target.matches( 'input' ) ) {
			return;
		}

		const element = e.target;
		const index = element.dataset.index;

		items[index].done = !items[index].done;
		localStorage.setItem( 'items', JSON.stringify( items ) );
	}

	function setAllItems() {
		const status = this.dataset.status === 'check';

		for ( let item of items ) {
			item.done = status;
		}

		populateList( items, itemsList );
		localStorage.setItem( 'items', JSON.stringify( items ) );
	}


	addItems.addEventListener( 'submit', addItem );
	setItems.forEach( button => button.addEventListener( 'click', setAllItems ) );
	itemsList.addEventListener( 'click', toggleDone );

	populateList( items, itemsList );

} )();