const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const drums = $$('button');

function playAudio(path) {
    const audio = new Audio(path);
    audio.play();
}

function makeSound(buttonHTML) {
    switch (buttonHTML) {
        case 'w':
            playAudio('./sounds/tom-1.mp3');
            break;
        case 'a':
            playAudio('./sounds/tom-2.mp3');
            break;
        case 's':
            playAudio('./sounds/tom-3.mp3');
            break;
        case 'd':
            playAudio('./sounds/tom-4.mp3');
            break;
        case 'j':
            playAudio('./sounds/snare.mp3');
            break;
        case 'k':
            playAudio('./sounds/crash.mp3');
            break;
        case 'l':
            playAudio('./sounds/kick-bass.mp3');
            break;  
        default:
            console.log('Coming soon!');
    }
}

function pressedButtonEffect(buttonHTML) {
    const rightClick = ['w','a','s','d','j','k','l'];

    if (rightClick.includes(buttonHTML)) {
        const pressedButton = document.querySelector(`.${buttonHTML}`);
        if (pressedButton) {
            pressedButton.classList.add('pressed');
    
            setTimeout(function() {
                pressedButton.classList.remove('pressed');
            }, 100);
        }
    }
}

function gotClicked(param) {
    makeSound(param.innerHTML);
    pressedButtonEffect(param.innerHTML);
}

document.onkeydown = function(event) {
    makeSound(event.key);
    pressedButtonEffect(event.key);
}

for (const drum of drums) {
    drum.onclick = function(event) {
        gotClicked(event.target);
    }
}