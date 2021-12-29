const container = document.querySelector('#container');

let state = 0;
let gameboard = []
console.log(state);
createGrid(3,3);



// sukuria grida
function createGrid(number1, number2) {
    for (let i = 0; i < number1; i++) {
        const linija = document.createElement('linija');
        linija.classList.add('linija');
        container.appendChild(linija);
        for (let j = 0; j < number2; j++) {
            const content = document.createElement('content');
            content.classList.add('content');
            linija.appendChild(content)
        }
    }
}
const buttons = document.querySelectorAll('content');



// adds functionality to the button
buttons.forEach((button) => {
    button.addEventListener('click', function(e) {
        if (state == 0) {
            state++;
            console.log(state);
            changeBlue(button);
        }
        else if (state == 1) {
            state--;
            console.log(state);
            changeRed(button);
        }
    })
})
    
        

// changes the color
function changeRed(container) {
    container.classList.add('o')
}

function changeBlue(container) {
    container.classList.add('x')
}

// functionality for reset button
const reset = document.querySelector('#reset')

reset.addEventListener('click', function(e) {
    state = 0;
    const contents = document.querySelectorAll('content')
    contents.forEach(content =>
        content.classList.remove('x')
    )
    contents.forEach(content =>
        content.classList.remove('o')
    )
})