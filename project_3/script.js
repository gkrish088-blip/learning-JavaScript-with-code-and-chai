const clock = document.querySelector('.clock')
let d = new Date()
console.log(d.toLocaleTimeString())
setInterval(function(){
    const date = new Date 
    clock.innerHTML = date.toLocaleTimeString()
}, 1000)