let clock = document.getElementById('clock');

setInterval(() => {
    let dateVar = new Date();
    clock.innerHTML = dateVar.toLocaleTimeString();
}, 1000);
