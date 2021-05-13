const tabCopy = document.getElementsByClassName('tab-copy');
const tabList = Array.from(tabCopy)
const buttons = document.getElementsByClassName('navlink')
const buttonList = Array.from(buttons)
const linkedList = buttonList.map(a => a.addEventListener('click', function(){displayTab(tabList[buttonList.indexOf(this)])}));
function displayTab (element){
tabList.map(a =>a.style.display = 'none')
element.style.display = 'block'
}
const closeTabs = () =>  tabList.map(a => a.style.display = 'none')


function niteMode() {
    let elementArray =['body', '#window-bar', '#content'].map(a => document.querySelector(a));
    elementArray.map(e => e.classList.toggle("dark"))
}
const doubleDigit = (t) => {return (t<10 ? '0'+t : t)}

function time() {
    today = new Date();
    var hour = today.getHours();
    var min = today.getMinutes();
    document.getElementById('time').innerHTML= doubleDigit(hour)+':'+doubleDigit(min)
}

document.querySelector('#nite').addEventListener('click', niteMode);
document.getElementById('close').addEventListener('click', closeTabs);
setTimeout(time,1000)