const names = require('./constants')
const random = require('./tools')
const axios = require('axios')
const {getRandomIndex, sayHi} = require('./tools')

const index = random.getRandomIndex(names.length);
console.log(names[index])
random.sayHi(names[index]);
sayHi(names[index]);

async function fetchData () {
    try {
        const response = await  axios.get('https://api.kanye.rest')
        console.log(await  response.data.quote)
    } catch (e) {
        console.log(e.message)
    }
}
fetchData();