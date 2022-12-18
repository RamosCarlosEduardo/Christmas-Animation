let buttonPlay = document.querySelector('.button-play')
let buttonPause = document.querySelector('.button-pause')
let audio = new Audio('christmas-song.mp3');


buttonPlay.addEventListener('click', () => {
    console.log('Play song')
    audio.play();
})


buttonPause.addEventListener('click', () => {
    console.log('Pause song')
    audio.pause();
})