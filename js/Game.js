/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            new Phrase('How Are You'),
            new Phrase('Have A Nice Day'),
            new Phrase('Queues And Stacks'),
            new Phrase('Teamtreehouse For The Win'),
            new Phrase('Project Four Phrase Hunter'),
            new Phrase('Congratulations')
        ];
        this.activePhrase = null;
    }

    startGame() {
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
        document.getElementById('overlay').style.display = 'none';
        const onscreenKeyboardButtons = document.querySelectorAll('.key');
        onscreenKeyboardButtons.forEach(button => {
            button.disabled = false;
            button.className = 'key';
        });
        // Getting the first image with a source of a lost heart
        let lostHeart = document.querySelector('img[src="images/lostHeart.png"]');
        while (lostHeart) {
            // Reset it to a live heart
            lostHeart.src = "images/liveHeart.png";
            // Getting the first image with a source of a lost heart
            lostHeart = document.querySelector('img[src="images/lostHeart.png"]');
        }
    }

    getRandomPhrase() {
        const randomIndex = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomIndex];
    }

    handleInteraction(letter, button) {
        // Only if the button contains only "key" class name, handle the interaction. Otherwise, it is already used
        // so that we can ignore the key stroke
        // This if statement is for testing the physical keyboard key strokes. It is useless for on-screen keyboard
        // because the key will be disabled after clicking on it
        if (button.className === 'key') {
            if (this.activePhrase.checkLetter(letter)) {
                this.activePhrase.showMatchedLetter(letter);
                button.className = 'key chosen';
                if (this.checkForWin()) {
                    this.gameOver();
                }
            } else {
                button.className = 'key wrong';
                this.removeLife();
            }
        }
    }

    removeLife() {
        this.missed++;
        // Replace the first occurrence of a live heart
        const liveHeart = document.querySelector('img[src="images/liveHeart.png"]');
        // Change it to a lost heart
        liveHeart.src = "images/lostHeart.png";
        // Check if the user has lost
        if (this.missed === 5) {
            this.gameOver();
        }
    }

    checkForWin() {
        // Check if all of the letters are revealed.
        // If there is at least one hidden letter, then the user didnt' win yet
        return document.querySelector('.hide') === null;
    }

    gameOver() {
        const h1 = document.getElementById('game-over-message');
        const overlay = document.getElementById('overlay');
        if (this.missed < 5) {
            h1.textContent = 'You Won!';
            overlay.className = 'win';
        } else {
            h1.textContent = 'You Lost!';
            overlay.className = 'lose';
        }
        overlay.style.display = 'inherit';
        document.querySelector('#phrase').innerHTML = '';
    }
}