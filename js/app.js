const form = document.getElementById('form');
const input = document.getElementById('results-input');

/* @todo: reset after form submission */
let score = 0

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

/* @todo: validate user input to handle cases when input doesn't match expected value, e.g. with emojis */
/* On form submit process user input */
form.addEventListener('submit', (e)=> {
    e.preventDefault();
    if (input.value.trim() !== "") {
        processUserInput(input.value);
    }    
})

/* Filter out non-emoji characters and create array based on user input */
function processUserInput(inputValue) {
    const emojiRegex = /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/g;
    const emojis = inputValue.match(emojiRegex);
    const chunkSize = 4;
    const emojisArray = []
    for (let i = 0; i < emojis.length; i += chunkSize) {
        const chunk = emojis.slice(i, i + chunkSize)
        emojisArray.push(chunk)
    }

    /* Call calculateScore 4 times, passing the first 4 items in emojisArray. In this scoring system, lines past 4 have a multiplier of 0, so we don't need to reference that data. */
    for (let i = 0; i < 4; i++) {
        console.log(emojisArray[i].join(''), i)
        calculateScore(emojisArray[i].join(''), i)
    }
    console.log('SCORE', score)
}

/* Generate score by comparing input values against the template values as well as which line the value is on */
/* E.g. If the "purple category was solved on line 2, calculateLineScore() would return: 4 * 3 (points * line three multiplier) */
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
        default:
            console.log('none')
    }
}

/* Return the calculated line score for each line. Returns the points value of the color multiplied by the line multiplier (based on lineNumber from calculateScore) */
function calculateLineScore(lineColor, lineNumber) {
    colorTemplate = template[lineColor]
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