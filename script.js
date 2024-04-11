

const buttons = document.querySelectorAll('button') 
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log('clicked')
    })
    
})




const basic = 19.99
const professional = 24.99
const master = 39.99

document.querySelector('#input-label').addEventListener('click', ()=>{
    if(!document.querySelector('#toggle').checked) {
        document.querySelector('#basic span').textContent = basic
        document.querySelector('#professional span').textContent = professional
        document.querySelector('#master span').textContent = master
        
    } else {
        document.querySelector('#basic span').textContent = Math.round(basic * 11)
        document.querySelector('#professional span').textContent = Math.round(professional * 11)
        document.querySelector('#master span').textContent = Math.round(master * 11)
    }
})

