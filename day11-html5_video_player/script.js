/**
 * Created by bumpMind on 12/20/2016.
 */

'use strict';

( function () {

    const player = document.querySelector( '.player' );
    const video = player.querySelector( '.viewer' );
    const progress = player.querySelector( '.progress' );
    const progressBar = player.querySelector( '.progress__filled' );
    const toggle = player.querySelector( '.toggle' );
    const skipButtons = player.querySelectorAll( '[data-skip]' );
    const ranges = player.querySelectorAll( '.player__slider' );


    function togglePlay() {
        const method = video.paused ? 'play' : 'pause';
        video[method]();
    }

    function updateButton() {
        toggle.textContent = this.paused ? '►' : '❚ ❚';

    }

    function skip() {
        console.dir( video );
        video.currentTime += parseFloat( this.dataset.skip );
    }
    
    function handleRangeUpdate() {
        video[this.name] = this.value;
    }
    
    function handleProgress() {
        const percent = ( video.currentTime / video.duration ) * 100;
        progressBar.style.flexBasis = `${ percent }%`;
    }

    function scrub( e ) {
        video.currentTime = ( e.offsetY / progress.offsetWidth ) * video.duration;
        console.log( e );
    }


    video.addEventListener( 'click', togglePlay );
    video.addEventListener( 'play', updateButton );
    video.addEventListener( 'pause', updateButton );
    video.addEventListener( 'timeupdate', handleProgress );

    toggle.addEventListener( 'click', togglePlay );

    for ( let button of skipButtons ) {
        button.addEventListener( 'click', skip );
    }

    for ( let range of ranges ) {
        range.addEventListener( 'change', handleRangeUpdate );
        range.addEventListener( 'mousemove', handleRangeUpdate );
    }

    let mouseDown = false;
    progress.addEventListener( 'click', scrub );
    progress.addEventListener( 'mousemove', ( e ) => mouseDown && scrub( e ) );
    progress.addEventListener( 'mousedown', () => mouseDown = true );
    progress.addEventListener( 'mouseup', () => mouseDown = false );
    progress.addEventListener( 'mouseout', () => mouseDown = false );

} )();
