function add (a , b)
{
    return Number(a) + Number(b);
}

function subtract (a , b)
{
    return Number(a) - Number(b);
}

function multiply (a , b)
{
    return Number(a) * Number(b);
}

function divide (a , b)
{
    if (b === 0) 
    {
        throw new Error("Division by zero is not allowed");
    }
      
    return a / b;    
}

function operate()
{
    const currentText   = screen.textContent.split(' ');
    const operation     = currentText[1];
    const num1          = currentText[0];
    const num2          = currentText[2];

    switch (operation) 
    {
        case '+':
            screen.textContent = add(num1 , num2);
        break;

        case '-':
            screen.textContent = subtract(num1 , num2);
        break;

        case '*':
            screen.textContent = multiply(num1 , num2);
        break;

        case '÷':
            screen.textContent = divide(num1 , num2);
        break;

        default:
          return alert('Erro: Operação Inválida.');
        break;
    }
}

function addKeyToScreen (target, type)
{
    if(type == 'num')
    {    
        const num = target.textContent == '.' ? target.textContent : Number(target.textContent);       
        
        screen.textContent = screen.textContent + num;

    } else if(type == 'ope') {
        
        const operation    = target.textContent;      

        if(screen.textContent.split(' ')[1] === undefined)
        {
            screen.textContent = screen.textContent + ' ' + operation + ' ';
        } else {

            operate();
            screen.textContent = screen.textContent + ' ' + operation + ' ';
        }
    }
}