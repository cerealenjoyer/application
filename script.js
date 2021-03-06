const tabList = Array.from(document.querySelectorAll('section'))
const buttonList = Array.from(document.getElementsByClassName('navlink'))
const linkedList = buttonList.map(a => a.addEventListener('click', function(){displayTab(buttonList.indexOf(this))}));
const windowBar = document.getElementById('window-title');
function displayTab (index){
tabList.map(a =>a.style.display = 'none')
tabList[index].style.display = 'flex';
windowBar.textContent = tabList[index].querySelector('h2').textContent;
}
const closeTabs = () => { tabList.map(a => a.style.display = 'none');
document.getElementById('output').textContent = '';
document.querySelectorAll('input').forEach(a => a.value ='');
windowBar.textContent = 'New Window'}

const elementArray =['body', '#window-bar', '#content'].map(a => document.querySelector(a));
function niteMode() {
const classNite = tabList.map(d => d.classList.toggle("dark"))
const niteTime = elementArray.map(e => e.classList.toggle("dark"))
}

function time() {
    today = new Date();
    var hour = today.getHours();
    var min = today.getMinutes();
    document.getElementById('time').textContent= String(hour).padStart(2,'0')+':'+String(min).padStart(2, '0')
    // Shout out to coaching group Cassowary for teaching me about padStart!
}

function doughCalculator() {
    class Bread {
        constructor(x){
            this.flour = x[0];
            this.starter = x[1];
            this.hydration = x[2]/100;
            this.halfStart = this.starter/2;
            this.startRatio = this.starter/this.flour
            this.water = (this.hydration)*(this.flour+this.halfStart)-this.halfStart;
            this.starterAmt = '';
            if (this.startRatio <0.1){
            this.starterAmt = 'on the small side'}
            else if (this.startRatio >0.3){
            this.starterAmt = 'a little excessive'}
            else this.starterAmt = 'looking absolutely bang on';
              }
            }
    const loafData = Array.from(document.querySelectorAll('input')).map(a =>parseInt(a.value))
    const loaf = new Bread(loafData)
    const breadVerdict = `You should use ${(loaf.water)}ml of water. The amount of starter you are using is ${loaf.starterAmt}`;
    document.getElementById('output').textContent = breadVerdict
}
document.querySelector('#breadCalc').addEventListener('click', doughCalculator);
document.querySelector('#nite').addEventListener('click', niteMode);
document.getElementById('close').addEventListener('click', closeTabs);
setInterval(time, 1000);