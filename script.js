// Get the input element and all the buttons
let input = document.getElementById('display');
let buttons = document.querySelectorAll('button');

// Initialize a string to store the input and convert the buttons into an array
let inputString = "";
let buttonArray = Array.from(buttons);

// Add event listeners to each button
buttonArray.forEach(button => {
    button.addEventListener('click', (e) => {
        // If the clicked button is '=', evaluate the input string and display the result
        if (e.target.innerHTML === '=') {
            inputString = eval(inputString);
            input.value = inputString;
        }
        // If the clicked button is 'AC', clear the input string and display an empty value
        else if (e.target.innerHTML === 'AC') {
            inputString = "";
            input.value = inputString;
        }
        // If the clicked button is 'DEL', remove the last character from the input string and update the display
        else if (e.target.innerHTML === 'DEL') {
            inputString = inputString.substring(0, inputString.length - 1);
            input.value = inputString;
        }
        // For other buttons, add their value to the input string and update the display
        else {
            inputString += e.target.innerHTML;
            input.value = inputString;
        }
    })
})
