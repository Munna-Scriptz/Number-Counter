// All Doms--------------------
let TheBody     = document.querySelector('body')
let AllMighty    = document.querySelector('.main')
let CounterText  = document.querySelector('.Counter1')
let CounterButton = document.querySelector('.Subscribe-btn')
let CounterInput  = document.querySelector('.input')
let ClearInputSvg = document.querySelectorAll('.icon')
let InputError = document.querySelector('.Counter_error')
let InputSpeed = document.querySelector('.SpeedInput')

let i = 0
let i2 = 0
let i3 = 0
let i4 = 0

let HandelButton1 = ()=>{
    if(CounterInput.value == ''){
        AllMighty.style  = 'display:none;'
        InputError.style = 'display:block;'
        TheBody.style    = 'background: url(https://cdn.dribbble.com/userupload/23438801/file/original-524952a81a8523e762c8a8042afaba4e.gif);'
    }

    let MyCounter1 = ()=>{

        i++
        CounterText.innerHTML = i
    
        if(i == CounterInput.value){
            clearInterval(StopInterval1)
        }
    }
    
    let StopInterval1 = setInterval(MyCounter1 , InputSpeed.value)
}
// Counter2--------------------
let CounterText2  = document.querySelector('.Counter2')
let CounterButton2 = document.querySelector('.Subscribe-btn2')
let CounterInput2  = document.querySelector('.input2')


let HandelButton2 = ()=>{
    if(CounterInput2.value == ''){
        AllMighty.style  = 'display:none;'
        InputError.style = 'display:block;'
        TheBody.style    = 'background: url(https://cdn.dribbble.com/userupload/23438801/file/original-524952a81a8523e762c8a8042afaba4e.gif);'
    }

    let MyCounter2 = ()=>{

        i2++
        CounterText2.innerHTML = i2
    
        if( i2 == CounterInput2.value){
            clearInterval(StopInterval2)
        }
    }

    let StopInterval2 = setInterval(MyCounter2 , InputSpeed.value)
}

// Counter3--------------------
let CounterText3  = document.querySelector('.Counter3')
let CounterButton3 = document.querySelector('.Subscribe-btn3')
let CounterInput3  = document.querySelector('.input3')


let HandelButton3 = ()=>{
    if(CounterInput3.value == ''){
        AllMighty.style  = 'display:none;'
        InputError.style = 'display:block;'
        TheBody.style    = 'background: url(https://cdn.dribbble.com/userupload/23438801/file/original-524952a81a8523e762c8a8042afaba4e.gif);'
    }

    let MyCounter3 = ()=>{

        i3++
        CounterText3.innerHTML = i3
    
        if( i3 == CounterInput2.value){
            clearInterval(StopInterval3)
        }
    }

    let StopInterval3 = setInterval(MyCounter3 , InputSpeed.value)
}

// Counter4--------------------
let CounterText4  = document.querySelector('.Counter4')
let CounterButton4 = document.querySelector('.Subscribe-btn4')
let CounterInput4  = document.querySelector('.input4')

let HandelButton4 = ()=>{
    if(CounterInput4.value == ''){
        AllMighty.style  = 'display:none;'
        InputError.style = 'display:block;'
        TheBody.style    = 'background: url(https://cdn.dribbble.com/userupload/23438801/file/original-524952a81a8523e762c8a8042afaba4e.gif);'
    }

    let MyCounter4 = ()=>{

        i4++
        CounterText4.innerHTML = i4
    
        if( i4 == CounterInput4.value){
            clearInterval(StopInterval4)
        }
    }

    let StopInterval4 = setInterval(MyCounter4 , InputSpeed.value)
}


// Counter Clear--------------------

ClearInputSvg.forEach((items)=>{

    items.addEventListener('click', ()=>{
        // ----All i----
        i = 0 
        i2 = 0 
        i3 = 0 
        i4 = 0 

        // ---Counter Number---
        CounterText.innerHTML = 0
        CounterText2.innerHTML = 0
        CounterText3.innerHTML = 0
        CounterText4.innerHTML = 0

        // ---Counter Input---
        CounterInput.value = ''
        CounterInput2.value = ''
        CounterInput3.value = ''
        CounterInput4.value = ''

        // ---Counter Speed---
        InputSpeed.value = ''
    })
})









// Practice 15---------------------