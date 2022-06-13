
const digiClockDiv =document.getElementById("digital-clock");
 
function digitalClock(){

    const now = new Date();

    const digitSec = now.getUTCSeconds();
    const digitMins = now.getUTCMinutes();
    const digitHour = now.getUTCHours()+3;

console.log(digitHour);

const digitHour1 = digitHour < 10 ? "0" + digitHour : digitHour;
const digitMins1 = digitMins < 10 ? "0" + digitMins : digitMins;
const digitSec1 = digitSec < 10 ? "0" + digitSec : digitSec;

const digitTime = digitHour1 + ":" + digitMins1 + ":" + digitSec1;

//digiClockDiv.innerHTML = digitTime;
digiClockDiv.innerText = digitTime;
digiClockDiv.textContent = digitTime;
setTimeout(digitalClock, 1000);       

}

digitalClock();