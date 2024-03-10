const form = document.getElementById('form');
const input = document.getElementById('input');

let score = 0

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

const lineMultipliers = {
    line1: 4,
    line2: 3,
    line3: 2,
    line4: 1
}

form.addEventListener('submit', (e)=> {
    e.preventDefault();
    processUserInput(input.value);
})

function processUserInput(inputValue) {
    const emojiRegex = /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/g;
    const emojis = inputValue.match(emojiRegex);
    const chunkSize = 4;
    const emojisArray = []
    for (let i = 0; i < emojis.length; i += chunkSize) {
        const chunk = emojis.slice(i, i + chunkSize)
        emojisArray.push(chunk)
    }

    for (let i = 0; i < 4; i++) {
        generateScore(emojisArray[i].join(''), i)
    }
    console.log('SCORE', score)
}

function generateScore(lineValue, lineNumber) {
    let lineScore;
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