const tabCopy = document.getElementsByClassName('tab-copy');
const tabList = Array.from(tabCopy)
const buttons = document.getElementsByClassName('navlink')
const buttonList = Array.from(buttons)
const linkedList = buttonList.map(a => a.addEventListener('click', function(){displayTab(buttonList.indexOf(this))}));
const windowBar = document.getElementById('window-title');
function displayTab (index){
tabList.map(a =>a.style.display = 'none')
tabList[index].style.display = 'block';
windowBar.textContent = buttonList[index].querySelector('span').innerHTML
}
const closeTabs = () => { tabList.map(a => a.style.display = 'none');
windowBar.textContent = 'New Window'}


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
setTimeout(time, 1000);