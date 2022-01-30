

var DateTime = luxon.DateTime; //--> Luxon's date object
var localTime=DateTime.local(); // --> To get the current time
console.log("this is the time: ", localTime.toString())
const Interval = luxon.Interval;

$(document).ready(function () {
   

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

        while (totalFocusSeconds > 0) {
        const focusCountDown = () => {

        totalFocusSeconds = totalFocusSeconds - second
        totalFocusSecondsRemaining = totalFocusSeconds
        totalFocusMinutesRemaining = totalFocusSecondsRemaining / minute

        totalFocusHoursRemaining = Math.floor(totalFocusSecondsRemaining % minute)
        //totalFocusMinutesRemaining = Math.floor(totalFocusMinutesRemaining % hour)

        console.log(totalFocusSecondsRemaining)
        //console.log('hours remaining: ', totalFocusHoursRemaining, '| minutes remaining: ', totalFocusMinutesRemaining, '| seconds remaining: ', totalFocusSecondsRemaining)
        }
        setInterval(focusCountDown,1000)
//https://www.youtube.com/watch?v=Rib69h2DOxg
    }


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

});


});


