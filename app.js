const screen = document.querySelector('.screen')
const button = document.querySelectorAll('.btn')
const equalBtn = document.querySelector('.equal-btn')
const clearBtn = document.querySelector('.clear-btn')

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', ()=>{
        let number = button[i].getAttribute('data-num')
        screen.value += number
    } )
    
}

equalBtn.addEventListener('click', ()=>{
    if (screen.value === '') {
        alert("There is nothing to calculate.")
        
    }
    
    
    else{
        screen.value = eval(screen.value)
        screen.style.color='green'
    }
    
    
})

clearBtn.addEventListener('click', ()=>{
    screen.value = ""
    screen.style.color='white'
})