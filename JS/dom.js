
function result(){
let inputValue=document.getElementById('inputData').value;
console.log(inputValue);

let displayHeading=document.getElementById('text');

displayHeading.innerHTML=inputValue;

displayHeading.style.color="green";

document.getElementsByTagName('body')[0].style.backgroundColor="pink";
}