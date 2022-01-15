const btns = document.querySelectorAll('.btns'),
    output = document.querySelector('#output');

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        if (output.value === 0) {
            output.value === 'ok mamu'
        }
        output.value += btn.value;
    })
})

// equal
const equalTo = document.querySelector('#equalTo');

equalTo.addEventListener('click', () => {
    error()
    output.value = eval(output.value);

    if (output.value === 'undefined') {
        output.value = ''
        alert('Please write something valid !')
    }
})

// document.addEventListener('keyup', (event) => {
//     if(event.keyCode === 13){
//         equalTo.click();
//     }
//     if(output.value === 'undefined'){
//         output.value = ''
//         alert('Please write something valid !')
//     }
//     error()
// })



// Reset
const clearAll = document.querySelector('#clearAll');

clearAll.addEventListener('click', () => {
    output.value = ''
})

// Del
const del = document.querySelector('#del');

del.addEventListener('click', () => {
    const outValue = output.value,
        delValue = outValue.slice(0, -1);
    output.value = delValue;
})

const error = () => {
    const outputArrey = Array.from(output.value);
    const lastCar = outputArrey[outputArrey.length - 1];

    if (lastCar === '+' || lastCar === '-' || lastCar === '*' || lastCar === '/') {
        output.value = 0
    }
}

