/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {
    constructor(phrase) {
        this.phrase = phrase;
    }

    addPhraseToDisplay() {
        // Selecting the phrase section
        const phraseDiv = document.getElementById('phrase');
        // Opening an unordered list tag
        phraseDiv.innerHTML = `<ul>`;
        // Iterating over all letters of the phrase
        this.phrase.split('').forEach(letter => {
            let className;
            if (letter === ' ') {
                // If it is an empty space, set the class name to space
                className = 'space';
            } else {
                // Otherwise, add three class names. Please note that we converted the letter to lower case
                className = `hide letter ${letter.toLowerCase()}`;
            }
            // Adding the list item to our list
            phraseDiv.innerHTML += `<li class="${className}">${letter}</li>`;
        });
        // Closing the ul tag
        phraseDiv.innerHTML += `</ul>`;
    }

    checkLetter(letter) {
        // Check if the phrase includes the letter to be checked. Please note that it is case insensitive
        return this.phrase.includes(letter) || this.phrase.includes(letter.toUpperCase());
    }

    showMatchedLetter(letter) {
        // This for loop will iterate over the items same to the letter we are showing
        document.querySelectorAll(`.${letter}`).forEach(li => {
            li.className = `show letter ${letter}`;
            // Enlarging the letter temporarily.
            li.style.transform = 'scale(1.5)';
            // After 0.1 seconds, resize the letter to its original size
            setTimeout(() => li.style.transform = 'scale(1)', 100);
        });
    }
}