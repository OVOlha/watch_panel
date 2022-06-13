const hourHand = document.getElementById("hours-hand");
const minHand = document.getElementById("minutes-hand");
const secHand = document.getElementById("seconds-hand");



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

    setInterval(currentTime, 1000);
    

    
}



currentTime();
