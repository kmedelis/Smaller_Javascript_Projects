const container = document.querySelector('#container');

function createGrid(number1, number2) {
    for (let i = 0; i < number1; i++) {
        const linija = document.createElement('line');
        linija.classList.add('linija');
        container.appendChild(linija);
        for (let j = 0; j < number2; j++) {
            const content = document.createElement('content');
            content.classList.add('content');
            linija.appendChild(content)
        }
    }
}
createGrid(16,16);

const buttons = document.querySelectorAll('content');

buttons.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener('mouseover', function(e) {
        e.target.style.background = 'blue';
    });
});


const buttonContainer = document.querySelector('#button-container');
buttonContainer.classList.add('buttonContainer');
container.appendChild(buttonContainer);


const button1 = document.createElement('button');
button1.classList.add('button');
var text = document.createTextNode("Restart");
button1.appendChild(text)
buttonContainer.appendChild(button1);

const button2 = document.createElement('button');
button2.classList.add('button');
var text2 = document.createTextNode("Set size");
button2.appendChild(text2)
buttonContainer.appendChild(button2);

const reset = document.querySelectorAll('.button')[0]
const reset1 = document.querySelectorAll('.button')[1]

reset.addEventListener('click', eraseAllColor);
function eraseAllColor() {
    var gridPixels = container.querySelectorAll('content');
    gridPixels.forEach(gridPixel => gridPixel.style.backgroundColor = '#ffffff');
}




reset1.addEventListener('click', function(e) {
    e.target.style.background = 'blue'
    
})
