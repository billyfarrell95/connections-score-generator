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

function processUserInput(value) {
    const inputValue = input.value;
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

function generateScore(row, rowNum) {
    switch (row) {
        case template.purple.emoji:
            switch(rowNum) {
                case 0:
                    score += (template.purple.points * lineMultipliers.line1)
                    break
                case 1:
                    score += (template.purple.points * lineMultipliers.line2)
                    break
                case 2:
                    score += (template.purple.points * lineMultipliers.line3)
                    break
                case 3:
                    score += (template.purple.points * lineMultipliers.line4)
                    break
            }
            break;
        case template.blue.emoji:
            switch(rowNum) {
                case 0:
                    score += (template.blue.points * lineMultipliers.line1)
                    break
                case 1:
                    score += (template.blue.points * lineMultipliers.line2)
                    break
                case 2:
                    score += (template.blue.points * lineMultipliers.line3)
                    break
                case 3:
                    score += (template.blue.points * lineMultipliers.line4)
                    break
            }
            break;
        case template.green.emoji:
            switch(rowNum) {
                case 0:
                    score += (template.green.points * lineMultipliers.line1)
                    break
                case 1:
                    score += (template.green.points * lineMultipliers.line2)
                    break
                case 2:
                    score += (template.green.points * lineMultipliers.line3)
                    break
                case 3:
                    score += (template.green.points * lineMultipliers.line4)
                    break
            }
            break;
        case template.orange.emoji:
            switch(rowNum) {
                case 0:
                    score += (template.orange.points * lineMultipliers.line1)
                    break
                case 1:
                    score += (template.orange.points * lineMultipliers.line2)
                    break
                case 2:
                    score += (template.orange.points * lineMultipliers.line3)
                    break
                case 3:
                    score += (template.orange.points * lineMultipliers.line4)
                    break
            }
            break;
        default:
            console.log('none')
    }
}