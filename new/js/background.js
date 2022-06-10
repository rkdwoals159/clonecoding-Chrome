const randNum = Math.floor(Math.random()*3)
const images = `${randNum}.jpg`

const bgImage = document.createElement("img")
bgImage.src = `./img/${images}`

document.body.appendChild(bgImage)