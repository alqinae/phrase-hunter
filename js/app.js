/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
const startGameButton = document.getElementById('btn__reset');
const onscreenKeyboard = document.getElementById('qwerty');
const game = new Game();
startGameButton.addEventListener('click', () => game.startGame());
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
    // Check if the key pressed is a letter. This will ignore numbers and special characters
    if (/^[a-zA-z]$/.test(letter)) {
        document.querySelectorAll('.key').forEach(button => {
            if(button.textContent === letter) {
                // If we found the corresponding button of the pressed key, we call the function handleInteraction
                game.handleInteraction(letter, button);
            }
        });
    }
});