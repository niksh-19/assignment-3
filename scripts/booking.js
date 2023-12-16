/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let dailyCost = 35; // Assuming the initial daily cost is $35
let selectedDays = []; // Array to store selected days
const dayButtons = document.querySelectorAll('.day-selector li');
const fullButton = document.getElementById('full');
const halfButton = document.getElementById('half');
const calculatedCost = document.getElementById('calculated-cost');
const clearButton = document.getElementById('clear-button');


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

dayButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (!selectedDays.includes(button.id)) {
            selectedDays.push(button.id);
            button.classList.add('clicked');
        } else {
            selectedDays = selectedDays.filter(day => day !== button.id);
            button.classList.remove('clicked');
        }
        calculatedCost();
    });
});



/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

clearButton.addEventListener('click', () => {
    selectedDays = [];
    dayButtons.forEach(button => button.classList.remove('clicked'));
    calculatedCost.textContent = '0';
});




/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

fullButton.addEventListener('click', () => {
    dailyCost = 35;
    fullButton.classList.add('clicked');
    halfButton.classList.remove('clicked');
    calculateCost();
});

halfButton.addEventListener('click', () => {
    dailyCost = 20;
    halfButton.classList.add('clicked');
    fullButton.classList.remove('clicked');
    calculateCost();
});


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.



/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function calculateCost() {
    const totalCost = dailyCost * selectedDays.length;
    calculatedCost.textContent = totalCost;
}

