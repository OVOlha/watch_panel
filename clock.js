const hourHand1 = document.getElementById("hours-hand1");
const minHand1 = document.getElementById("minutes-hand1");
const secHand1 = document.getElementById("seconds-hand1");



function currentTime1(){
    const now1 = new Date();

    const sec1 = now1.getUTCSeconds();
    const secDegrees1 =((sec1/60)*360);
    secHand1.style.transform = `rotate(${secDegrees1}deg)`;

    const mins1 = now1.getUTCMinutes();
    const minsDegrees1 = ((mins1/60)*360)+((sec1/60)*6);
    minHand1.style.transform = `rotate(${minsDegrees1}deg)`;

    const hour1 = now1.getUTCHours();
    const hourDegrees1 = ((hour1 / 12) * 360) + ((mins1/60)*30) + 90;
    hourHand1.style.transform = `rotate(${hourDegrees1}deg)`;

    setInterval(currentTime1, 1000);
    

    
}



currentTime1();


const hourHand2 = document.getElementById("hours-hand2");
const minHand2 = document.getElementById("minutes-hand2");
const secHand2 = document.getElementById("seconds-hand2");



function currentTime2(){
    const now2 = new Date();

    const sec2 = now2.getUTCSeconds();
    const secDegrees2 =((sec2/60)*360);
    secHand2.style.transform = `rotate(${secDegrees2}deg)`;

    const mins2 = now2.getUTCMinutes();
    const minsDegrees2 = ((mins2/60)*360)+((sec2/60)*6);
    minHand2.style.transform = `rotate(${minsDegrees2}deg)`;

    const hour2 = now2.getUTCHours();
    const hourDegrees2 = ((hour2 / 12) * 360) + ((mins2/60)*30) + 90;
    hourHand2.style.transform = `rotate(${hourDegrees2}deg)`;

    setInterval(currentTime2, 1000);
    

    
}



currentTime2();
