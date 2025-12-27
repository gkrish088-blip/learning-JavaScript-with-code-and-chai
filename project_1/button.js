const body = document.querySelector("body");
const button = document.querySelectorAll('.buttons');

button.forEach((butt) => {
    butt.addEventListener('click',function (event){
        if(event.target.id){
            body.style.backgroundColor = event.target.id;
        }
    })

})

