function getPin(){
    const pin = generatePin();
    const pinString = pin + '';
    if(pinString.length === 4){
        return pin;
    }
    else{
        return getPin();
    }
}


function generatePin(){
    const random = Math.round(Math.random()*10000);
    return random;
}

document.getElementById('generate-pin').addEventListener('click', function(){
    const pin = getPin();
    const inputField = document.getElementById('input-generate');
    inputField.value = pin;
})

document.getElementById('calculator').addEventListener('click', function(){
    const number = event.target.innerText
    const typeNumberField = document.getElementById
    ('type-number');
    const preTypeNumber = typeNumberField.value;
    if(isNaN(number)){
        if(number === 'C'){
            typeNumberField.value = '';
        }
        else if(number === '<'){
            const digits = preTypeNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typeNumberField.value = remainingDigits;
        }
    }
    else{
        const newTypeNumber = preTypeNumber+number;
        typeNumberField.value = newTypeNumber;
    }
})


document.getElementById('submit-id').addEventListener('click', function(){
    const displayField = document.getElementById('input-generate');
    const currentPin = displayField.value;
    const typeNumberField = document.getElementById
    ('type-number');
    const currentTypeNumberField = typeNumberField.value;
    const pinTrue = document.getElementById('pin-true');
    const pinFalse = document.getElementById('pin-false');
    if(currentPin === currentTypeNumberField){
        pinTrue.style.display = 'block';
        pinFalse.style.display = 'none';
    }
    else{
        pinFalse.style.display = 'block';
        pinTrue.style.display = 'none';
    }
    displayField.value = '';
    typeNumberField.value = '';
    if(currentPin === '' || currentTypeNumberField === ''){
        alert('Type Please !!')
        pinFalse.style.display = 'none';
        pinTrue.style.display = 'none';
        return;
    }
})