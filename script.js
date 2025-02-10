const romanticElements = ['💋', '🤗', '💘','💝','💟','💌','😘'];
const container = document.body;

function createRomanticElement() {
    const element = document.createElement('div');
    element.textContent = romanticElements[Math.floor(Math.random() * romanticElements.length)];
    element.classList.add('hearts');
    element.style.left = Math.random() * 100 + 'vw';
    element.style.top = Math.random() * 100 + 'vh';
    element.style.fontSize = Math.random() * 2 + 1 + 'em';
    container.appendChild(element);

    setTimeout(() => {
        element.remove();
    }, 5000);
}

setInterval(createRomanticElement, 1000);

const Years = document.getElementById('years');
const Months = document.getElementById('months');
const Days = document.getElementById('days');
const Hours = document.getElementById('hours');
const Minutes = document.getElementById('minutes');
const Seconds = document.getElementById('seconds');

const targetDate = new Date("January 11 2025 00:00:00").getTime();

function timer () {
    const currentDate = new Date(new Date().toLocaleString("en-US", {timeZone: "America/Sao_Paulo"})).getTime();
    const diff = currentDate - targetDate;

    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    

    Years.innerHTML = years;
    Months.innerHTML = months;
    Days.innerHTML = days;
    Hours.innerHTML = hours;
    Minutes.innerHTML = minutes;
    Seconds.innerHTML = seconds;
}

setInterval(timer, 1000);

