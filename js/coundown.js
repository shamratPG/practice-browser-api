const initalNumber = 0;

const initialValue = () => {
    let value = parseInt(prompt('You want to start coundown from', 0));
    if (!isNaN(value)) {
        setValue(value);
        return value;
    } else {
        initialValue();
    }
}

const setValue = value => {
    document.getElementById('number').innerText = value;
}

const startCoundown = () => {
    let i = parseInt(initialValue());
    const coundown = setInterval(() => {
        setValue(--i);
        console.log(i);
        if (i === 0) {
            clearInterval(coundown);
        }
    }, 1000)
}

