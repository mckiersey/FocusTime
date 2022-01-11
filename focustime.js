$(document).ready(function () {

    console.log("JS loading")

 
    var d = new Date();
    var TimeNow = d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    console.log('time is ', TimeNow)

    var timeControl = document.querySelector('input[type="time"]');
    timeControl.value = TimeNow;


    
    document.getElementById('TimeNow').innerHTML = `${TimeNow}`;

    $(document).on("click", "#GoButton", function () {
      
    console.log("go!")
    TimeEndofDay = $("#EndOfDay").val() 
    TimeLunch = $("#LunchBreak").val() 
    TimeFocus = $("#FocusSession").val() 
    TimeEmail = $("#EmailTime").val() 


});


});

