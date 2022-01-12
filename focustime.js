$(document).ready(function () {

    console.log("JS loading")

 
    var today = new Date();
    var TimeNow = today.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    var TimeNow2 = today.toLocaleTimeString();


    test  = new Date();
    const options = { dateStyle: 'short' };
    const dateToday = test.toLocaleString('en-ie', options);
    console.log('test', dateToday)

    document.getElementById('TimeNow').innerHTML = `${TimeNow}`;

    $(document).on("click", "#GoButton", function () {
      
        
    console.log("go!")
    TimeEndofDay = $("#EndOfDay").val() 
    TimeLunch = $("#LunchBreak").val() 
    TimeFocus = $("#FocusSession").val() 
    TimeEmail = $("#EmailTime").val() 

    console.log("today = ", TimeNow2)
    console.log('End = ', TimeEndofDay)
    console.log('Lunch = ', TimeLunch)
    console.log('Focus = ', TimeFocus)
    console.log('Email = ', TimeEmail)
    console.log('Now = ', TimeNow)


    TimeEndOfDayHH = TimeEndofDay.split(":")[0]
    TimeEndOfDayMM = TimeEndofDay.split(":")[1]

    TimeLunchHH = TimeLunch.split(":")[0]
    TimeLunchMM = TimeLunch.split(":")[1]


    var TimeDateEndOfDay = new Date(null, null, null, TimeEndOfDayHH, TimeEndOfDayMM);
    var TimeDateLunch = new Date(null, null, null, TimeLunchHH, TimeLunchMM);
    
    console.log(TimeDateEndOfDay, "-",TimeDateLunch)
    var NetofLunch  = Math.abs(TimeDateEndOfDay - TimeDateLunch);


    const date = new Date(NetofLunch);

    alert(`${date.getMinutes()}`);
        console.log('Net of lunch = ', NetofLunch)




});


});

