var dateNow = moment().format("dddd, MMMM Do YYYY  h:mm:ss A");
// console.log(dateNow);
$("#currentDay").text(dateNow);

setInterval(() => {
    var dateNow = moment().format("dddd, MMMM Do YYYY  h:mm:ss A");
    // console.log(dateNow);
    $("#currentDay").text(dateNow);
}, 1000);

// Creating To Do's

// Current Hour
var hour = moment().hour()
// console.log(hour);

// Time Block Function:
$(".time-block").each(function () {
    // console.log($(this).attr("id"));

    // taskHour = the value of the id (ex.hour9) parsed to an integer and split at the "r" leaving just the number of the hour remaining
    $(this).addClass("past");
    var taskHour = parseInt($(this).attr("id").split("r")[1]);
    // console.log(taskHour);

    // if the task's hour is less than the current hour, the row is in the past, add class "past" with corresponding background color
    if (taskHour < hour) {
        $(this).addClass("past");
    };
    // if the task's hour is equal to the current hour, the row is in the present, add class "present" with corresponding background color
    if (taskHour === hour) {
        $(this).addClass("present");
    };
    // if the task's hour is greater than the current hour, the row is in the future, add class "future" with corresponding background color
    if (taskHour > hour) {
        $(this).addClass("future");
    };
});


// saveBtn was clicked: store in localStorage
$(".saveBtn").on("click", function () {
    console.log(this);
    var time = $(this).parent().attr("id");
    var text = $(this).siblings(".to-do").val();

    //set items in local storage
    localStorage.setItem(time, text);
    console.log(text, time);

});


// load saved data from localStorage with getItem, then assign it to textarea for each hour
var loadTasks = function () {

    hour9 = localStorage.getItem("hour9");
    $("#hour9 .to-do").val(hour9);

    hour10 = localStorage.getItem("hour10");
    $("#hour10 .to-do").val(hour10);

    hour11 = localStorage.getItem("hour11");
    $("#hour11 .to-do").val(hour11);

    hour12 = localStorage.getItem("hour12");
    $("#hour12 .to-do").val(hour12);

    hour13 = localStorage.getItem("hour13");
    $("#hour13 .to-do").val(hour13);

    hour14 = localStorage.getItem("hour14");
    $("#hour14 .to-do").val(hour14);

    hour15 = localStorage.getItem("hour15");
    $("#hour15 .to-do").val(hour15);

    hour16 = localStorage.getItem("hour16");
    $("#hour16 .to-do").val(hour16);

    hour17 = localStorage.getItem("hour17");
    $("#hour17 .to-do").val(hour17);

};

loadTasks();

