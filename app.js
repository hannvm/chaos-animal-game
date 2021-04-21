//function generate random rgb colour
function genColor() {
    r = Math.floor(Math.random()* 255);
    g = Math.floor(Math.random()* 255);
    b = Math.floor(Math.random()* 255);
    return `rgb(${r}, ${g}, ${b})`;
}

//function to generate a random number
function genRandNum(num) {
    return Math.floor(Math.random() * num)
}


//list of fonts. Currently (10)
const fontFamilies = ["Arial", "Verdana", "Helvetica", "Times New Roman", "Monospace", "Tahoma", "Lucida", "Helvetica", "Palatino", "Blippo"];
//List of all anumials. Currently (10)
const animals = ['Lion', 'Squirrel', 'Duckling', 'Turtle', 'Parrot', 'Hedgehog', 'Penguin', 'Horse', 'Hedgehog', 'Dolphin']


//Generate Animal Image
document.querySelector('img').setAttribute('src', `assets/${genRandNum(10)}.jpeg` )

//Generate animal text (which animal you will see written on the screen)
document.querySelector('h2').append(animals[genRandNum(10)])

//changing Fonts
document.querySelector('h1').style.fontFamily = fontFamilies[genRandNum(10)]
document.querySelector('h2').style.fontFamily = fontFamilies[genRandNum(10)]
document.querySelector('h3').style.fontFamily = fontFamilies[genRandNum(10)]
document.getElementById('instruction').style.fontFamily = fontFamilies[genRandNum(10)]
document.getElementById('instruction2').style.fontFamily = fontFamilies[genRandNum(10)]
document.getElementById('instruction3').style.fontFamily = fontFamilies[genRandNum(10)]
document.querySelector('button').style.fontFamily = fontFamilies[genRandNum(10)]

//changing Colours
document.body.style.background = genColor()
document.querySelector('h1').style.color = genColor()
document.querySelector('h2').style.color = genColor()
document.querySelector('h3').style.color = genColor()
document.getElementById('instruction').style.color = genColor()
document.getElementById('instruction2').style.color = genColor()
document.getElementById('instruction3').style.color = genColor()
document.querySelector('button').style.color = genColor()
document.querySelector('button').style.backgroundColor = genColor()
