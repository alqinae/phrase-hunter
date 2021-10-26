/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
const startGameButton = document.getElementById('btn__reset');
const onscreenKeyboard = document.getElementById('qwerty');
let game;
startGameButton.addEventListener('click', () => {
    game = new Game();
    game.startGame()
});
startGameButton.addEventListener('mouseenter', () => {
   startGameButton.style.transform = 'scale(2)';
});
startGameButton.addEventListener('mouseleave', () => {
    startGameButton.style.transform = 'scale(1.0)';
});
onscreenKeyboard.addEventListener('click', event => {
    // Only consider the click if it is on a button
    if (event.target.tagName === 'BUTTON') {
        const button = event.target;
        const letter = button.textContent;
        game.handleInteraction(letter, button);
    }
});
document.addEventListener('keyup', event => {
    const letter = event.key;
    const overlay = document.getElementById('overlay');
    // Check if the key pressed is a letter and the overlay is not hidden.
    // This will ignore numbers and special characters. Also, when the game hasn't started, the input will be ignored.
    if (/^[a-zA-z]$/.test(letter) && overlay.style.display === 'none') {
        document.querySelectorAll('.key').forEach(button => {
            if(button.textContent === letter) {
                // If we found the corresponding button of the pressed key, we call the function handleInteraction
                game.handleInteraction(letter, button);
            }
        });
    }
});