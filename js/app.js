const form = document.getElementById('form');
const resultsInput = document.getElementById('results-input');
const errorMessageWrapper = document.getElementById('error-msg-wrapper');
const errorMessage = "Invalid input. Please enter valid Connections Game results. Here's an example:"
const scoreWrapper = document.getElementById('score-wrapper');
const scoreDisplay = document.getElementById('score-display');

/* Default score */
let score = 0;

const inputExample = `
Connections 
Puzzle #274
🟨🟨🟨🟨
🟩🟩🟩🟩
🟦🟦🟦🟦
🟪🟪🟪🟪
`;

/* Templates to compare against user input and reference score values from */
const template = {
    purple:  {
        emoji: '🟪🟪🟪🟪',
        points: 4
    },
    blue:  {
        emoji: '🟦🟦🟦🟦',
        points: 3
    },
    green:  {
        emoji: '🟩🟩🟩🟩',
        points: 2
    },
    orange:  {
        emoji: '🟨🟨🟨🟨',
        points: 1
    }
}

/* Multipliers used to calculate score of each line */
const lineMultipliers = {
    line1: 4,
    line2: 3,
    line3: 2,
    line4: 1
}

/* On form submit process user input */
form.addEventListener('submit', (e)=> {
    e.preventDefault();
    /* Reset score */
    score = 0;
    if (!resultsInput.value.trim()) {
        displayErrorMessage(errorMessage);
        form.reset();
    } else {
        processUserInput(resultsInput.value);
    }
})

resultsInput.addEventListener('focus', ()=> {
    if (resultsInput.value.trim()) {
        resultsInput.select();
    }
})

/* Create and append error message to DOM */
function displayErrorMessage(message) {
    errorMessageWrapper.textContent = '';
    const messageEl = createDOMElement('p', 'error-message', message);
    const inputExampleEl = createDOMElement('pre', '', inputExample);
    errorMessageWrapper.append(messageEl);
    errorMessageWrapper.append(inputExampleEl)
    scoreWrapper.classList.add('d-none');
}

/* Create and return an HTML element */
function createDOMElement(tagName, classes, textContent) {
    const element = document.createElement(tagName);
    if (textContent !== undefined) {
        element.textContent = textContent;
    }
    if (classes !== undefined) {
        element.className = classes;
    }
    return element;
}

/* Filter out non-emoji characters and create array based on user input */
function processUserInput(inputValue) {
    const emojiRegex = /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/g;
    const emojis = inputValue.match(emojiRegex);
    const chunkSize = 4;
    const emojisArray = []
    if (emojis) {
        for (let i = 0; i < emojis.length; i += chunkSize) {
            const chunk = emojis.slice(i, i + chunkSize)
            emojisArray.push(chunk)
        }
    }

    /* Call calculateScore 4 times, passing the first 4 items in emojisArray. In this scoring system, lines past 4 have a multiplier of 0, so we don't need to reference that data. */
    if (emojisArray.length >= 4) {
        errorMessageWrapper.textContent = '';
        for (let i = 0; i < 4; i++) {
            calculateScore(emojisArray[i].join(''), i)
        }
    } else {
        displayErrorMessage(errorMessage)
        return;
    }

    /* Display the score after Calculating */
    displayScore(score);
}

/* Display the score */
function displayScore(scoreValue) {
    scoreWrapper.classList.remove('d-none');
    scoreDisplay.textContent = scoreValue;
}

/* Generate score by comparing input values against the template values as well as line multiplier */
function calculateScore(lineValue, lineNumber) {
    let lineScore;
    /* Call calculateLineScore and save the returned value based on if the input value matches a case in the template */
    switch (lineValue) {
        case template.purple.emoji: 
            lineScore = calculateLineScore('purple', lineNumber)
            score += lineScore
            break;
        case template.blue.emoji:
            lineScore = calculateLineScore('blue', lineNumber)
            score += lineScore
            break;
        case template.green.emoji:
            lineScore = calculateLineScore('green', lineNumber)
            score += lineScore
            break;
        case template.orange.emoji:
            lineScore = calculateLineScore('orange', lineNumber);
            score += lineScore
            break
    }
}

/* Return the calculated line score for each line. Returns the points value of the color multiplied by the line multiplier (based on lineNumber from calculateScore) */
function calculateLineScore(lineColor, lineNumber) {
    const colorTemplate = template[lineColor]
    switch(lineNumber) {
        case 0:
            return (colorTemplate.points * lineMultipliers.line1)
        case 1:
            return (colorTemplate.points * lineMultipliers.line2)
        case 2:
            return (colorTemplate.points * lineMultipliers.line3)
        case 3:
            return (colorTemplate.points * lineMultipliers.line4)
    }
}