const addLanguage = (langName) =>{

    const li = document.createElement('li');
    li.innerHTML = `${langName}`;
    document.getElementById('language').appendChild(li);

}
addLanguage('swift')

const addLanguageOpti = (langName) =>{

    const li = document.createElement('li');
    li.appendChild(document.createTextNode(langName));
    document.getElementById('language').appendChild(li);

}
addLanguageOpti('Ruby')

const editElement = () => {

    const secondLang = document.querySelector('li:nth-child(2)');
    console.log(secondLang);
    // secondLang.innerHTML' = "kain";
    secondLang.replaceWith('harsh kain')
    // another way to edit 


    const firstElement = document.querySelector('li:first-child');
    firstElement.outerHTML = '<li> python and js </li>';
}
// editElement()

const deleteElement = () => {
    const firstElement = document.querySelector('li:first-child');
    firstElement.remove()

}
deleteElement();