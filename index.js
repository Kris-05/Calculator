const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

// console.log(buttons);

buttons.forEach((item)=>{
    item.onclick = ()=>{
        if(item.id === 'clear'){
            display.innerText = '';
        }
        else if(item.id === 'backspace'){
            let string = display.innerText.toString();
            display.innerText = string.substr(0, string.length -1);
        }
        else if(display.innerText !== '' && item.id === 'equal'){
            display.innerText = eval(display.innerText);
        }
        else if(display.innerText === '' && item.id === 'equal'){
            display.innerText = 'Error!404';
            setTimeout(() => {
                display.innerText = '';
            }, 500);
        }
        else{
            display.innerText += item.id;
        }
    }
});

const title = document.querySelector('.title')
const toggleBtn = document.querySelector('.theme-toggler');
// console.log(themeToggle);
const calculator = document.querySelector('.calculator');
const toggleIcon = document.querySelector('.toggler');

let isDark = true;

toggleBtn.onclick = ()=>{
    title.classList.toggle('dark');
    calculator.classList.toggle('dark');
    toggleBtn.classList.toggle('active');
    isDark = !isDark;
}