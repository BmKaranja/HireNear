document.addEventListener('DOMContentLoaded',()=>{
const btn1= document.getElementById('btn-1')
const input1 = document.getElementById('i-1')
const div1 =document.getElementsByClassName('flex1')
btn1.addEventListener('click', (event)=>{
    event.preventDefault
    let x = input1.value.trim()
    if (x=='') {
        const y=document.createElement('p')
        y.textContent='Fill all spaces!!!'
        div1.appendChild()
    }
})})