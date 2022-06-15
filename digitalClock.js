
const digiClockDiv1 =document.getElementById("digital-clock1");
const digiClockDiv2 =document.getElementById("digital-clock2");
 
function digitalClock1(){

    const now = new Date();

    const digitSec = now.getUTCSeconds();
    const digitMins = now.getUTCMinutes();
    const digitHour = now.getUTCHours()+3;



const digitHour1 = digitHour < 10 ? "0" + digitHour : digitHour;
const digitMins1 = digitMins < 10 ? "0" + digitMins : digitMins;
const digitSec1 = digitSec < 10 ? "0" + digitSec : digitSec;

const digitTime = digitHour1 + ":" + digitMins1 + ":" + digitSec1;

//digiClockDiv.innerHTML = digitTime;
digiClockDiv1.innerText = digitTime;
digiClockDiv1.textContent = digitTime;
setTimeout(digitalClock1, 1000);       

}

digitalClock1();


function digitalClock2(){

    const now = new Date();

    const digitSec = now.getUTCSeconds();
    const digitMins = now.getUTCMinutes();
    const digitHour = now.getUTCHours()+3;



const digitHour1 = digitHour < 10 ? "0" + digitHour : digitHour;
const digitMins1 = digitMins < 10 ? "0" + digitMins : digitMins;
const digitSec1 = digitSec < 10 ? "0" + digitSec : digitSec;

const digitTime = digitHour1 + ":" + digitMins1 + ":" + digitSec1;

//digiClockDiv.innerHTML = digitTime;
digiClockDiv2.innerText = digitTime;
digiClockDiv2.textContent = digitTime;
setTimeout(digitalClock2, 1000);       

}

digitalClock2();