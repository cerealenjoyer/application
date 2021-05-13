function displayTab (){

}


function niteMode() {
    let elementArray =['body', '#window-bar', '#content'].map(a => document.querySelector(a));
    elementArray.map(e => e.classList.toggle("dark"))
}

document.querySelector('#nite').addEventListener('click', niteMode);
