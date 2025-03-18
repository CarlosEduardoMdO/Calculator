function add (a , b)
{
    return Number(Number(a) + Number(b)) % 1 === 0 ? Math.trunc(Number(a) + Number(b)) : (Number(a) + Number(b)).toFixed(3);
}

function subtract (a , b)
{
    return Number(Number(a) - Number(b)) % 1 === 0 ? Math.trunc(Number(a) - Number(b)) : (Number(a) - Number(b)).toFixed(3);
}

function multiply (a , b)
{
    return Number(Number(a) * Number(b)) % 1 === 0 ? Math.trunc(Number(a) * Number(b)) : Number(Number(a) * Number(b)).toFixed(3);
}

function divide (a , b)
{
    if (b == 0) throw Error("Division by zero is not allowed");
      
    return Number(Number(a) / Number(b)) % 1 === 0 ? Math.trunc(Number(a) / Number(b)) : (Number(a) / Number(b)).toFixed(3);    
}

function operate()
{
    const currentText   = screen.textContent.split(' ');
    const operation     = currentText[1];
    const num1          = currentText[0];
    const num2          = currentText[2];

    if(num1 === '' || num1 === undefined || num2 === ''|| num2 === undefined) 
    {
        alert('Erro: Insira todos os elementos do cálculo para executa-lo.');

        return 0;
    }       

    switch (operation) 
    {
        case '+':
            screen.textContent = add(num1 , num2) + ' ' + '✓' + ' ';
        break;

        case '-':
            screen.textContent = subtract(num1 , num2) + ' ' + '✓' + ' ';
        break;

        case '*':
            screen.textContent = multiply(num1 , num2) + ' ' + '✓' + ' ';
        break;

        case '÷':
            screen.textContent = divide(num1 , num2) + ' ' + '✓' + ' ';
        break;

        default:
          return alert('Erro: Operação Inválida.');
        break;
    }

    return 1;
}

function addKeyToScreen (target, type)
{
    const newOperation  = target.textContent;
    const currentText   = screen.textContent.split(' ');
    const operation     = currentText[1];
    const num1          = currentText[0];
    const num2          = currentText[2];
    
    if(type == 'num')
    {    
        if(screen.textContent[screen.textContent.length - 2] === '✓')
        {            
            screen.textContent = '';

        } else if(operation === undefined && num1 !== undefined && !num1.split('').every(element => element !== '.') && target.textContent === '.') {
            
            return;

        } else if(operation !== undefined && num2 !== undefined && !num2.split('').every(element => element !== '.') && target.textContent === '.') {
            
            return;
        }

        const num = target.textContent === '.' ? target.textContent : Number(target.textContent);       
        
        screen.textContent += num;

    } else if(type == 'ope') {       
        
        if(operation === undefined)
        {
            screen.textContent += ' ' + newOperation + ' ';

        }   else if(operation !== undefined && (num2 === ''|| num2 === undefined)) {
            
            screen.textContent = screen.textContent.replace(operation, newOperation);            
            
        }   else if(operation !== undefined && operate()) {

            screen.textContent = screen.textContent.replace('✓', newOperation);
            
        }
    }
}

function keyboardSupport(key)
{
    const obj = {textContent: key};

    switch (key) 
    {
        case '0':
            addKeyToScreen(obj, 'num');  
        break;
        
        case '1':
            addKeyToScreen(obj, 'num');
        break;

        case '2':
            addKeyToScreen(obj, 'num');
        break;

        case '3':
            addKeyToScreen(obj, 'num');
        break;

        case '4':
            addKeyToScreen(obj, 'num');
        break;
        
        case '5':
            addKeyToScreen(obj, 'num');
        break;
        
        case '6':
            addKeyToScreen(obj, 'num');
        break;
        
        case '7':
            addKeyToScreen(obj, 'num');
        break;
        
        case '8':
            addKeyToScreen(obj, 'num');
        break;
        
        case '9':
            addKeyToScreen(obj, 'num');
        break;

        case '.':
            addKeyToScreen(obj, 'num');
        break;

        case '+':
            addKeyToScreen(obj, 'ope');
        break;

        case '-':
            addKeyToScreen(obj, 'ope');
        break;

        case '*':
            addKeyToScreen(obj, 'ope');
        break;

        case '/':
            obj.textContent = '÷';
            addKeyToScreen(obj, 'ope');
        break;

        case 'Backspace':
            screen.textContent = screen.textContent[screen.textContent.length - 1] === ' ' ? screen.textContent.slice(0, -3) : screen.textContent.slice(0, -1);
        break;
        
        case '=':
            operate();
        break;
    
        default:
            return;
        break;
    }

    return;
}