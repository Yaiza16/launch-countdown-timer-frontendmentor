const dayElement = document.getElementById('days')
const hourElement = document.getElementById('hours')
const minuteElement = document.getElementById('minutes')
const secondElement = document.getElementById('seconds')


document.addEventListener('DOMContentLoaded', ()=>{
    countdown(1209600)
})

const countdown = totalSeconds =>{
    let actualTime = totalSeconds;
    let nextTime = actualTime-1;

    let actualDays;
    let actualHours;
    let actualMinutes;
    let actualSeconds;

    let nextDays;
    let nextHours;
    let nextMinutes;
    let nextSeconds;

    calculateTime()
    setInitialValues(actualDays, actualHours, actualMinutes, actualSeconds)
    startCountdown()


    function startCountdown(){
        setInterval(() =>{
            if (actualTime == 0){
                return;
            }else{
                calculateTime()
                actualTime--
                nextTime--
            }
        },1000)
    }

    if (actualTime == 0){
        clearInterval(startCountdown)
        console.log('clean')
    }
        

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

        
        selectedFipCards()
    }


    function selectedFipCards(){
        if (actualDays!==nextDays){
            flipCards(nextDays, dayElement)
        }

        if (actualHours!==nextHours){
            flipCards(nextHours, hourElement)
        }

        if (actualMinutes!==nextMinutes){
            flipCards(nextMinutes, minuteElement)
        }

        if (actualSeconds!==nextSeconds){
            flipCards(nextSeconds, secondElement)
        }
    }


    function flipCards(next, element){
        element.classList.add('animated')
        let secondsCardParts = element.querySelectorAll('.part-card')

        secondsCardParts.forEach(part =>{
            part.dataset.after = next
        })

        //Dataset changes when transition is over
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


function setInitialValues(daysValue, hoursValue, minutesValue, secondsValue){
    dayElement.querySelectorAll('.part-card').forEach(el =>{
        el.dataset.before = daysValue
        el.dataset.after = daysValue
    })

    hourElement.querySelectorAll('.part-card').forEach(el =>{
        el.dataset.before = hoursValue
        el.dataset.after = hoursValue
    })

    minuteElement.querySelectorAll('.part-card').forEach(el =>{
        el.dataset.before = minutesValue
        el.dataset.after = minutesValue
    })

    secondElement.querySelectorAll('.part-card').forEach(el =>{
        el.dataset.before = secondsValue
        el.dataset.after = secondsValue
    })
}