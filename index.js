const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const dateEl = document.getElementById('date');
const ampmEl = document.getElementById('ampm');

function updateClock(){
    //get hours from my computer//
    let hours = new Date().getHours().toString().padStart(2, '0');
    let minutes = new Date().getMinutes().toString().padStart(2, '0');
    let seconds = new Date().getSeconds().toString().padStart(2, '0');
    let date = new Date().getDate().toString().padStart(2, '0');
    let month = new Date().getMonth().toString().padStart(2, '0');
    let year = new Date().getFullYear();
    let ampm = "AM";

    //Change am to pm after 12//
    if(hours > 12){
        hours = hours -12;
        ampm = "PM";
    }

    hoursEl.innerText = `${hours}:`;
    minutesEl.innerText = `${minutes}:`;
    secondsEl.innerText = seconds;
    ampmEl.innerText = ampm;
    dateEl.innerText = `${date}/${month}/${year}`;

    setTimeout(()=>{
        updateClock()
    }, 1000)
}

updateClock();

