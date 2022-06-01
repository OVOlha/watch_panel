const hourHand = document.getElementById("hours-hand");
const minHand = document.getElementById("minutes-hand");
const secHand = document.getElementById("seconds-hand");
const hourDigit = document.getElementById("digit-hours");
const minsDigit = document.getElementById("digit-minutes");
const secDigit = document.getElementById("digit-seconds");

function currentTime(){
    const now = new Date();

    const sec = now.getUTCSeconds();
    const secDegrees =((sec/60)*360);
    secHand.style.transform = `rotate(${secDegrees}deg)`;

    const mins = now.getUTCMinutes();
    const minsDegrees = ((mins/60)*360)+((sec/60)*6);
    minHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getUTCHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

    hour = hour < 10 ? "0" + hour : hour;
    mins = mins < 10 ? "0" + mins : mins;
    sec = sec < 10 ? "0" + sec : sec;
 
    let digitTime = hour + ":"
            + mins + ":" + sec;
 
    document.getElementById("digital-wrap")
            .innerHTML = digitTime;
    

    
}

setInterval(currentTime, 1000);

currentTime();
