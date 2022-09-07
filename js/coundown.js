console.log('cowndown')

// I want to get a number first.

const initalNumber = 0;

const initialValue = () => {
    const value = prompt('You want to start coundown from', 0);
    setValue(value);
    return value;
}

const setValue = value => {
    document.getElementById('number').innerText = value;
}

const startCoundown = () => {
    const number = parseInt(initialValue());
    // console.log(number)
    for (let i = number; i >= 0; i--) {
        console.log(i);
    }
}