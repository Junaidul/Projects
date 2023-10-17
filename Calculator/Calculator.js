const numButton = document.querySelectorAll('[data-number]');
const operatorButton = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const allClearButton = document.querySelector('[data-all-clear]');
const deleteButton = document.querySelector('[data-delete]');
const screen = document.querySelector('[data-screen]');

var string = '';


// Added event listener to each of the const

numButton.forEach(button => {
    button.addEventListener('click' , (a) => {
        string += button.innerText;
        screen.value = string;
    })
});

operatorButton.forEach(operatorButton => {
    operatorButton.addEventListener ('click' , (a) =>{
        string += " " + operatorButton.innerText + " ";
        screen.value = string;
    })
})

equalsButton.addEventListener('click' , (a) => {
    string = String(eval(string));
    screen.value = string;
})

allClearButton.addEventListener('click' , (a) => {
    string = '';
    screen.value = string;
})

deleteButton.addEventListener('click' , (a) => {
    string = string.substring(0 , string.length - 1);
    screen.value = string;
})
