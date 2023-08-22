// console.log("kain");


let color = ['orange', 'red', 'blue', 'purple','green'];

const createElement = (i) =>{
    let element = document.createElement('h1');
    element.style.backgroundColor = color[i];
    element.innerText = color[i]
    document.body.appendChild(element);

}
for (let i = 0; i < color.length; i++) {
    
    createElement(i);
    
}