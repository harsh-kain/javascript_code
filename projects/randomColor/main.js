const randomColor = () =>{
    let hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];        
    }
    console.log(color);
    return color;
}
// console.log(color);

    
const start = document.getElementById('start');
const stop = document.getElementById('stop');
let intervalId;
start.addEventListener('click', ()=>{
    randomColor()
    intervalId =setInterval(() => {
        document.body.style.backgroundColor = randomColor();
    }, 1000);
    
})
stop.addEventListener('click', ()=>{
    clearInterval(intervalId);
    intervalId = null;
})

 

