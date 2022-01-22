

var DateTime = luxon.DateTime; //--> Luxon's date object
var localTime=DateTime.local(); // --> To get the current time
console.log("this is the time: ", localTime.toString())
const Interval = luxon.Interval;

$(document).ready(function () {
   

    console.log("JS loading")
    var dt = DateTime.now();
    var dt_later = dt.plus({ hours: 3, minutes: 2 });

    var todaysdate = dt.toISODate();
    console.log('todays date = ', todaysdate)

    const dt_humanReadable = dt.toLocaleString(DateTime.DATETIME_MED);
    const TimeNow = dt.toLocaleString(DateTime.TIME_SIMPLE)


    console.log('time now:', dt_humanReadable)
    console.log('time later:', dt_later)

    document.getElementById('TimeNow').innerHTML = `${TimeNow}`;

    
    $(document).on("click", "#GoButton", function () {
      
        
    console.log("go!")
    TimeEndofDay = $("#EndOfDay").val() 
    TimeLunch = $("#LunchBreak").val() 
    TimeFocus = $("#FocusSession").val() 
    TimeEmail = $("#EmailTime").val() 

    /*
    console.log("today = ", TimeNow2)
    console.log('End = ', TimeEndofDay)
    console.log('Lunch = ', TimeLunch)
    console.log('Focus = ', TimeFocus)
    console.log('Email = ', TimeEmail)
    console.log('Now = ', TimeNow)
*/

    TimeEndOfDayHH = TimeEndofDay.split(":")[0]
    TimeEndOfDayMM = TimeEndofDay.split(":")[1]

    TimeLunchHH = TimeLunch.split(":")[0]
    TimeLunchMM = TimeLunch.split(":")[1]


    console.log('End = ', TimeEndofDay)


    today = todaysdate + "T"
    console.log('TODAY!!', today)
    FullEndfDay = today + TimeEndofDay
    console.log('test = ', FullEndfDay)
    var testdate = DateTime.fromISO(FullEndfDay);

    console.log('test date = ', testdate)
    const testdate_humanReadable = testdate.toLocaleString(DateTime.DATETIME_MED);
    console.log('test date 2:', testdate_humanReadable)

    //const diff = testdate.diff(dt, ["hours", "minutes"])

    diff= testdate.diff(dt, "seconds", "minutes").toFormat("hh:mm"); // => 6:01

    document.getElementById('TimeForWork').innerHTML = `${diff}`;


    //const diffHours = diff.length('hours');
    console.log('diff = ', diff)
    //console.log('number of hours for working: ', diffHours )



// how to implement a timer: https://www.youtube.com/watch?v=x7WJEmxNlEs

});


});


