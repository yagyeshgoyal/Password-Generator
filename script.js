const inputSlider = document.querySelector("[data-lengthSlider]");
const lengthDisplay = document.querySelector("[data-lengthNumber]");

const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const copyBtn = document.querySelector("[data-copy]");
const copyMsg = document.querySelector("[data-copyMsg]");
const uppercaseCheck = document.querySelector("#uppercase");
const lowercaseCheck = document.querySelector("#lowercase");
const numbersCheck = document.querySelector("#numbers");
const symbolsCheck = document.querySelector("#symbols");
const indicator = document.querySelector("[data-indicator]");
const generateBtn = document.querySelector(".generateButton");
const allCheckBox = document.querySelectorAll("input [type = checkbox]");
const symbols = '~`!@#$%^&*()_-+={[}]|:;"<,>.?/';



let password = "";
let passwordLength = 10;
let checkCount = 1;
handleSlider(); 
// ste strength circle color to grey

//set passwordLength
function handleSlider(){
    inputSlider.value = passwordLength;
    lengthDisplay.innerText = 10;
    //or kuch bhi karna chahiye ?
}

function setIndicator(color){
    indicator.style.backgroundColor = color;
    //shadow
}

function getRanInteger(min,max){
    return Math.floor(Math.random()*(max-min)) + min;
}

function generateRandomNumber(){
    return getRanInteger(0,9);
}

function generateLowerCase(){
     return String.fromCharCode(getRanInteger(97,123));
}

function generateUpperCase(){
    return String.fromCharCode(getRanInteger(65,91));
}

function generateSymbol(){
    const ranNum = getRanInteger(0,symbols.length);
    return symbols.charAt(ranNum);   
}

function calcStrength(){
    let hasUpper = false;
    let hasLower = false;
    let hasNum = false;
    let hasSym = false;

    if(uppercaseCheck.checked) hasUpper = true;
    if(lowercaseCheck.checked) hasLower = true;
    if(numbersCheck.checked) hasNum = true;
    if(symbolsCheck.checked) hasSym = true;

    if(hasUpper && hasLower && (hasNum || hasSym) && passwordLength >= 8){
        setIndicator("#0f0");
    }
    else if((hasLower || hasUpper) && (hasNum || hasSym) & passwordLength >= 6){
        setIndicator("#ff0");
    }
    else{
        setIndicator("#f00");
    }
}

async function copyContent(){
    try{
        await navigator.clipboard.writeText(passwordDisplay.value);
        copyMsg.innerText = "copied";
    }
    catch(e){
        copyMsg.innerText =  "Failed";
    }

   //to make copy walaspan visible
   copyMsg.classList.add("active");

   setTimeout( () => {
    copyMsg.classList.remove("active");
   },2000);
    
}