const dayElement = document.getElementById('days')
const hourElement = document.getElementById('hours')
const minuteElement = document.getElementById('minutes')
const secondElement = document.getElementById('seconds')


document.addEventListener('DOMContentLoaded', ()=>{
    countdown(100000)
})

const countdown = totalSeconds =>{
    let actualTime = totalSeconds;
    let nextTime = totalSeconds--;

    let actualDays;
    let actualHours;
    let actualMinutes;
    let actualSeconds;

    let nextDays;
    let nextHours;
    let nextMinutes;
    let nextSeconds

    const startCountdown = setInterval(() =>{
        calculateTime()

        actualTime--
        nextTime--
    },1000)

    function calculateTime(){
        const days = Math.floor(actualTime / 60 / 60 /24);
        const hours = Math.floor((actualTime % (60*60*24) / 60 /60));
        const minutes = Math.floor((actualTime % (60*60) /60))
        const seconds = Math.floor((actualTime % 60));

        actualDays = days<10?`0${days}`:days;
        actualHours = hours<10?`0${hours}`:hours;
        actualMinutes = minutes<10?`0${minutes}`:minutes;
        actualSeconds = seconds<10?`0${seconds}`:seconds;

        const nxdays = Math.floor(nextTime / 60 / 60 /24);
        const nxhours = Math.floor((nextTime % (60*60*24) / 60 /60));
        const nxminutes = Math.floor((nextTime % (60*60) /60))
        const nxseconds = Math.floor((nextTime % 60));
 
        nextDays = nxdays<10?`0${nxdays}`:nxdays;
        nextHours = nxhours<10?`0${nxhours}`:nxhours;
        nextMinutes = nxminutes<10?`0${nxminutes}`:nxminutes;
        nextSeconds = nxseconds<10?`0${nxseconds}`:nxseconds;
    }

    function flipCards(){
        let next = actualSeconds--
        secondElement.classList.add('animated')
        const secondsCardParts = secondElement.querySelectorAll('.part-card')

        secondsCardParts.forEach(part =>{
            part.dataset.after = next
        })

        setTimeout(function(){
            secondsCardParts.forEach(part =>{
                part.dataset.before = next
            })
        }, 700)

        setTimeout(function(){
            secondElement.classList.remove('animated')
        },900)
    }
}