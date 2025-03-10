function addition (a , b)
{
    return a + b;
}

function subtraction (a , b)
{
    return a - b;
}

function multiplication (a , b)
{
    return a * b;
}

function division (a , b)
{
    return a / b;
}

function NumberKey(keyNumber)
{
    const button = document.createElement('button');
    
    button.textContent              = keyNumber;
    button.className                = 'number-key';
    button.style.backgroundColor    = 'black';
    button.style.color              = 'white';
    button.style.fontSize           = '24px';
    
    return button;
}

function OperationKey(keyOperation)
{
    const button = document.createElement('button');
    
    button.textContent              = keyOperation;
    button.className                = 'operation-key';
    button.style.backgroundColor    = '#870000';
    button.style.color              = 'white';
    button.style.fontSize           = '24px';
    
    return button;
}

const numberKeyContainer    = document.getElementsByClassName('numbers-keyboard');
const operationKeyContainer = document.getElementsByClassName('operations-keyboard');
const operations            = ['-', '+', '÷', 'X'];

for(i = 0; i <= 9; i++)
{
    numberKeyContainer[0].appendChild(NumberKey(i));
}

numberKeyContainer[0].appendChild(NumberKey('.'));
numberKeyContainer[0].appendChild(NumberKey('='));

operations.forEach(element => {
    operationKeyContainer[0].appendChild(OperationKey(element))
});