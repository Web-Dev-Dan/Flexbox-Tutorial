const resetDisplayFlex = document.getElementById('resetDisplayFlex');
const submitDisplayFlex = document.getElementById('submitDisplayFlex');
const inputDisplayFlex = document.getElementById('inputDisplayFlex');
const displayFlexContainer = document.getElementById('displayFlexContainer');

submitDisplayFlex.addEventListener('click', () => {
    if (inputDisplayFlex.value == 'display: flex;' || inputDisplayFlex.value == 'display:flex;') {
        displayFlexContainer.style.display = 'flex';
        inputDisplayFlex.value = '';
        inputDisplayFlex.style.border = '.1rem solid gray';
    }
    else {
        inputDisplayFlex.style.border = '.1rem solid red';
    }
});

resetDisplayFlex.addEventListener('click', () => {
    displayFlexContainer.style.display = 'block';
    inputDisplayFlex.value = '';
    inputD
