

const calculate = document.querySelector('form');
calculate.addEventListener('click', (e)=>{
    e.preventDefault();
    let weight = parseInt(document.querySelector('#weight').value);
    let height = parseInt(document.querySelector('#height').value);
    const result = document.getElementById('results');

    if(weight === '' || weight < 0  || isNaN(weight)){
        result.innerHTML = `Enter a valid value ${weight}`;
    }
    else if(height === '' || height < 0  || isNaN(height)){
        result.innerHTML = `Enter a valid value ${height}`;
    }
    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        result.innerHTML = `<span> ${bmi} </span>`;
    }
})