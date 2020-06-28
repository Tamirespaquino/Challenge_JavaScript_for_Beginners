//Choose a random color

const button = document.querySelector('button')
const body = document.querySelector('body')
const colors = ['purple', 'yellow', 'green', 'blue', 'pink', 'red']

body.style.backgroundColor = 'white'
button.addEventListener('click', changeBackground)

function changeBackground(){
const colorIndex = parseInt(Math.random()*colors.length)
body.style.backgroundColor = colors[colorIndex]
}