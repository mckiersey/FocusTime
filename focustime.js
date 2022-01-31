

var DateTime = luxon.DateTime; //--> Luxon's date object
var localTime=DateTime.local(); // --> To get the current time
console.log("this is the time: ", localTime.toString())
const Interval = luxon.Interval;

$(document).ready(function () {
   
    let src = 'https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_700KB.mp3';
let audio = new Audio(src);
audio.play();

    console.log("JS loading")
    var dt = DateTime.now();

    var todaysdate = dt.toISODate();

    const dt_humanReadable = dt.toLocaleString(DateTime.DATETIME_MED);
    const TimeNow = dt.toLocaleString(DateTime.TIME_SIMPLE)


   
    document.getElementById('TimeNow').innerHTML = `${TimeNow}`;

    
    $(document).on("click", "#GoButton", function () {
    

        
    TimeEndofDay = $("#EndOfDay").val() 
    TimeLunch = $("#LunchBreak").val() 
    TimeFocus = $("#FocusSession").val() 
    TimeNotification = $("#NotificationTime").val() 

    /*
    console.log('End = ', TimeEndofDay)
    console.log('Lunch = ', TimeLunch)
    console.log('Focus = ', TimeFocus)
    console.log('Email = ', TimeEmail)
    console.log('Now = ', TimeNow)
*/

    TimeEndOfDayHH = TimeEndofDay.split(":")[0]
    TimeEndOfDayMM = TimeEndofDay.split(":")[1]

    


    console.log('End = ', TimeEndofDay)


    today = todaysdate + "T"
    FullEndfDay = today + TimeEndofDay
    console.log('full end of day = ', FullEndfDay)
    var testdate = DateTime.fromISO(FullEndfDay);

    const testdate_humanReadable = testdate.toLocaleString(DateTime.DATETIME_MED);


    var availableTime = testdate.diff(dt, "seconds", "minutes").toFormat("hh:mm"); // => 6:01
    document.getElementById('TimeForWork').innerHTML = `${availableTime}`;


    // Available Time (Gross)
    var availableTimeHours = parseInt(availableTime.split(":")[0])
    var availableTimeMinutes = parseInt(availableTime.split(":")[1])
    var totalAvailableMinutesGross = parseInt(availableTimeMinutes) + parseInt(availableTimeHours)*60
    console.log('Gross (excluding lunch break) Total Available Time (Minutes): ', totalAvailableMinutesGross)
        // Lunch
        var lunchHours = parseInt(TimeLunch.split(":")[0])
        var lunchMinutes = parseInt(TimeLunch.split(":")[1])
        var totalLunchMinutes = parseInt(lunchMinutes) + parseInt(lunchHours)*60
    // Available Time (Net)
    var totalAvailableMinutesNet = totalAvailableMinutesGross - totalLunchMinutes
    console.log('Net Total Available Time (Minutes): ', totalAvailableMinutesNet)


    // Focus Time
    var focusTimeHours = TimeFocus.split(":")[0]
    var focusTimeMinutes = TimeFocus.split(":")[1]
    var totalFocusMintues = parseInt(focusTimeMinutes) + parseInt(focusTimeHours)*60
    console.log('Total Focus Time (Minutes): ', totalFocusMintues)

    // Notification Time
    var notificationTimeHours = TimeNotification.split(":")[0]
    var notificationTimeMinutes = TimeNotification.split(":")[1]
    var totalNotificationMintues = parseInt(notificationTimeMinutes) + parseInt(notificationTimeHours)*60
    console.log('Total Notification Time (Minutes): ', totalNotificationMintues)

    // Session Time
    totalSessionTime = totalFocusMintues + totalNotificationMintues
    console.log('Session = ', totalSessionTime)

    // Number of Possible Sessions
    var numberSessions = Math.floor(totalAvailableMinutesNet / totalSessionTime)
    document.getElementById('numberSessions').innerHTML = `${numberSessions}`;

    //TIMER
    ////////////////////////////////////////////////
    const second = 1
    const minute = second * 60
    const hour = minute * 60
    totalFocusSeconds = totalFocusMintues * 60

    var focusTimeEnd = DateTime.now().plus({ minutes: totalFocusMintues }).toFormat("hh:mm");

    console.log('time end', focusTimeEnd)

    var timeStartOfSession = DateTime.now()
   
    const timeEndOfSession = timeStartOfSession.plus({ minutes: totalFocusMintues});

    timeDiffSeconds = 90
    while (timeDiffSeconds > 0) {
    const focusCountDown = () => {
    var timeNow = DateTime.now()

    const timeDiff = timeEndOfSession.diff(timeNow, [ 'hours', 'minutes', 'seconds']);

    countdownHours = timeDiff.hours
    countdownMinutes= timeDiff.minutes
    countdownSeconds = Math.round(timeDiff.seconds)

    document.querySelector(".hour").innerText = countdownHours
    document.querySelector(".minute").innerText = countdownMinutes
    document.querySelector(".second").innerText = countdownSeconds
    timeDiffSeconds - second
    alert
    }
    setInterval(focusCountDown,1000)

        //https://www.youtube.com/watch?v=Rib69h2DOxg
    }
/*

    const countDown = () => {
        console.log('the final countdown')
        sessionCount = 0
        while (sessionCount <= numberSessions) {
            console.log('Session count:' , sessionCount)
            console.log('Number of sessions: ', numberSessions)



            sessionCount =  sessionCount+1;
        }
        console.log('** END OF DAY **')
        console.log(':)')

    }

    //countDown()
    //setInterval(countDown, 1000)

// how to implement a timer: https://www.youtube.com/watch?v=x7WJEmxNlEs
*/
});


});


