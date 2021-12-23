// Begin
let userClickedPattern = [];
const buttonColours = ['red', 'blue', 'green', 'yellow'];
let playing = false;

let level = 0;
let gamePattern = [];
// Colour that the program chose
function nextSequence() {
    userClickedPattern = [];
    const randomNumber = Math.floor(Math.random() * 4);
    const randomChosenColour = buttonColours[randomNumber];
    
    // Game pattern
    gamePattern.push(randomChosenColour);

    $(`#${randomChosenColour}`).fadeOut(100).fadeIn(100);
    playAudio(randomChosenColour);

    // Start the game at level 1
    level += 1;
    $('#level-title').text(`Level ${level}`);
}

// Animation click button
function animePress(currentColour) {
    $(`.${currentColour}`).addClass('pressed');
    setTimeout(function() {
        $(`.${currentColour}`).removeClass('pressed');
    }, 100);
}

// Play audio
function playAudio(name) {
    var audio = new Audio(`./sounds/${name}.mp3`);
    
    audio.play();
}

// CLick bubtton
$('.btn').click(function(event) {
    if (playing) {
        // Click button and add id of this button to an array
        const userChosenColour = event.target.id;

        // Click button effect
        animePress(userChosenColour);
        // Play sound when click on button
        playAudio(userChosenColour);

        // User pattern
        userClickedPattern.push(userChosenColour);

        checkAnswer(userClickedPattern.length-1);
    }
});

// Start the game
$(document).keydown(function(event) {
    if (event.key === 'a' || event.key === 'A') {
        if (!playing) {
            playing = true;
            nextSequence();
        }
    }
});

//Check answer
function checkAnswer(currentButtonClicked) {
    if (userClickedPattern[currentButtonClicked] === gamePattern[currentButtonClicked]) {
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function() {
                nextSequence();
            }, 1000);
        }
    } else {
        playAudio('wrong');
        $('body').addClass('game-over');
        $("#level-title").text("Game Over, Press A to Restart");

        setTimeout(function () {
          $("body").removeClass("game-over");
        }, 200);

        startOver();
    }
}

// Game over
function startOver() {
    level = 0;
    gamePattern = [];
    playing = false;
}