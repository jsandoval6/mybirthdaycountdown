let countDownYear;
if (new Date().getMonth() > 8) {
    countDownYear = new Date().getFullYear() + 1;
}

if (new Date().getMonth() == 8 && new Date().getDate() > 28) {
    countDownYear = new Date().getFullYear() + 1;
}
else {
    countDownYear = new Date().getFullYear();
}
let myBirthday = "aug 28 " + countDownYear;

const countdown = () => {

    let birthday = new Date(myBirthday).getTime();
    let now = new Date().getTime();
    let gap = birthday - now;

    if (gap < 1000) {
        document.querySelector(".title").innerText = "Today is my Birthday!!!!!!!!!";
    }
    else {
        //Time in milisecs
        let secs = 1000;
        let mins = secs * 60;
        let hours = mins * 60;
        let days = hours * 24;

        //logic
        let textDay = Math.floor(gap / days);
        let textHour = Math.floor(gap % days / hours);
        let textMins = Math.floor(gap % hours / mins);
        let textSecs = Math.floor(gap % mins / secs);
        document.querySelector(".title").innerText = "My birthday is coming soon!";
        document.querySelector(".day").innerText = textDay;
        document.querySelector(".hour").innerText = textHour;
        document.querySelector(".minute").innerText = textMins;
        document.querySelector(".second").innerText = textSecs;
    }
}

setInterval(countdown, 1000);