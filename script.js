'use strict';

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.targetDate = new Date(targetDate);
    this.days = document.querySelector(`${selector} .value[data-value="days"]`);
    this.hours = document.querySelector(`${selector} .value[data-value="hours"]`);
    this.mins = document.querySelector(`${selector} .value[data-value="mins"]`);
    this.secs = document.querySelector(`${selector} .value[data-value="secs"]`);
  }

  setInt = setInterval(() => {
    const nowDate = Date.now();
    const time = this.targetDate - nowDate;
    this.updateClockface(time);
this.timeFinish(time);
  }, 1000);

  updateClockface(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    this.days.textContent = `${days}`;
    this.hours.textContent = `${hours}`;
    this.mins.textContent = `${mins}`;
    this.secs.textContent = `${secs}`;
  }

  pad(value) {
    return String(value).padStart(2, "0");
  }
  timeFinish(time) {
    if (time < 0) {
      clearInterval(this.setInt);
      this.timerFace.textContent = "Finish";
    }
  }
};
new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('May 17, 2021'),
});