const randomColor = function(){
    const hex = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
}
//console.log(randomColor())
let color;
const changeBackground = () => {
    color = randomColor()
    document.body.style.backgroundColor = color
    console.log('background changed')
}

let intervalId;

function start (){
    intervalId = setInterval(changeBackground, 2000)
}
function stop(){
    clearInterval(intervalId)
    document.body.style.backgroundColor = color
    color = null
}
 document.querySelector('#start').addEventListener('click',start)
 document.querySelector('#stop').addEventListener('click',stop)


