const fs = require('fs')

const directory = '/Users/alexishampton/Downloads/'
const fileName = directory + 'OhMyFireItLeftUsCold - Sheet1.json'
const newFileName = directory + 'CharacterDialogue.json'
//read file
fs.readFile(fileName, 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data.length)
    const allLines = data.split('\n')
    allLines.splice(allLines.length - 1, 1)
    allLines.splice(0, 1)
    data = allLines.join('\n')
    const dialogue = JSON.parse(data)
    const newDialogue = []
    for (let i = 0; i < dialogue.length; i++) {
        //delete 
        if (dialogue[i].id == null || dialogue[i].id == undefined)
            continue;
        //fix func
        if (dialogue[i].func == null || dialogue[i].func == undefined)
            dialogue[i].func = []
        else if (!Array.isArray(dialogue[i].func))
            dialogue[i].func = [dialogue[i].func]
        //fix goto
        if (dialogue[i].goto == null || dialogue[i].goto == undefined)
            dialogue[i].goto = []
        else if (!Array.isArray(dialogue[i].goto))
            dialogue[i].goto = [dialogue[i].goto]
        //fix options
        if (dialogue[i].options == null || dialogue[i].options == undefined)
            dialogue[i].options = []
        else if (!Array.isArray(dialogue[i].options))
            dialogue[i].options = [dialogue[i].options]

        newDialogue.push(dialogue[i])
        console.log(dialogue[i].goto)
    }

    newDialogueJSON = JSON.stringify(newDialogue);

    fs.writeFile(newFileName, newDialogueJSON, (err) => {
        if (err) throw err;

    });

})
