const refs = {
    days: document.querySelector("[data-value='days']"),
    hours: document.querySelector("[data-value='hours']"),
    mins: document.querySelector("[data-value='mins']"),
    secs: document.querySelector("[data-value='secs']")
}

class CountdownTimer {
    constructor({selector, targetDate}) {
        this.selector = selector;
        this.targetDate = targetDate;
    }
}

const newDate = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Aug 15, 2021'),
});

let time;

const dateUpdate = setInterval(() => {
    time = (newDate.targetDate - Date.now());
    if (time <= 0) {
        console.log("Expired!")
        clearInterval(dateUpdate)
        return;
    }
    const timeComponents = getTimeComponents(time);
    console.log(timeComponents)
    refs.days.textContent = timeComponents.days;
    refs.hours.textContent = timeComponents.hours;
    refs.mins.textContent = timeComponents.mins;
    refs.secs.textContent = timeComponents.secs;
}, 1000)

function pad(value) {
    return String(value).padStart(2, '0')
}

function getTimeComponents(time) {
    const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

    return {days, hours, mins, secs}
}
