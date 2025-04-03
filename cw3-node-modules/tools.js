
const getRandomIndex = (length) => Math.trunc(Math.random()*length);

const sayHi = (name) => {
    console.log(`Hello, ${name}`)
}
module.exports = {getRandomIndex, sayHi}