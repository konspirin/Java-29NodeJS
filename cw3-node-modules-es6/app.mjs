import {getRandomIndex} from "./tools.mjs";
import {userNames} from "./consts.mjs";
import os from "os"
import fs from "fs"
const index = getRandomIndex(userNames.length)
console.log(userNames[index])
/*
os - work with oper. system;
fs - work with file system;
path - work with paths;
events - events controlling;
crypto - hash
http - server creation and control
 */
console.log(os.freemem())
console.log(os.totalmem())
console.log(os.homedir())
console.log(os.arch())
//===================FS===================
fs.writeFileSync('readme.txt', 'some text');
console.log("file readme was created")
const text = fs.readFileSync('readme.txt', 'utf-8')
console.log(text)
console.log("end of sync part of code")

fs.writeFile('readme.txt', 'async writing text to file', (err) =>
{
    if(err)
    console.log('Error')
})

fs.readFile('readme.txt','utf-8', (err, data) => {
    if(!err) console.log(data);
    else console.log('Error')
})

console.log('end of callback acync work')

fs.promises.writeFile('readme.txt', 'task with promises').then(() => {
    fs.promises.readFile('readme.txt', 'utf-8')
        .then(data => {
            console.log(data)
        })
})

const fileUpdate = async () => {
    await fs.promises.writeFile('readme.txt', 'async - await mode')
    let data = await fs.promises.readFile('readme.txt','utf-8')
    console.log(data)
}
await fileUpdate();

