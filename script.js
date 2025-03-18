function addition (a , b)
{
    return Number(a) + Number(b);
}

function subtraction (a , b)
{
    return Number(a) - Number(b);
}

function multiplication (a , b)
{
    return Number(a) * Number(b);
}

function division (a , b)
{
    if(b == 0) return alert('Error: Division by zero');
    
    return Number(a) / Number(b);
}

function operate(operation, num1, num2)
{
    switch (operation) {
        case '+':
            
        break;

        case '-':
            
        break;

        case '/':
            
        break;

        case '*':
            
        break;
    }
}

function addKeyToScreen (target)
{
    const num       = Number(target.textContent);

    if(typeof num !== 'number' || isNaN(num)) return alert('Não é um valor numérico, insira um valor válido.');
    
    const screen    = document.getElementById('screen');
    
    screen.textContent = screen.textContent + num;
}

function NumberKey(keyNumber)
{
    const button = document.createElement('button');
    
    button.textContent              = keyNumber;
    button.className                = 'number-key';
    button.style.backgroundColor    = 'black';
    button.style.color              = 'white';
    button.style.fontSize           = '24px';
    button.addEventListener(
        'click', event => addKeyToScreen(event.target)
    );
    
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
const history               = [];

for(i = 0; i <= 9; i++)
{
    numberKeyContainer[0].appendChild(NumberKey(i));
}

numberKeyContainer[0].appendChild(NumberKey('.'));
numberKeyContainer[0].appendChild(NumberKey('='));

operations.forEach(element => {
    operationKeyContainer[0].appendChild(OperationKey(element))
});