

var todaysDate = dayjs().format('dddd, MMMM YYYY');
$('#currentDay').text(todaysDate);

$(document).ready(function () {
 $('.saveBtn').on('click', function() {
  var time = $(this).siblings(".description").val();
  var text = $(this).parent().attr("id");

  localStorage.setItem(time,text);

 })

    function timeOfDay() {
      var currentTime = dayjs().hour();


   
        $(".time-block").each(function () {
        var blockTime = parseInt($(this).attr("id").split("hour")[1]);


        if (blockTime === currentTime) {
          $(this).removeClass("past");
          $(this).removeClass("future");
          $(this).addClass("present");
        } else if (blockTime > currentTime) {
          $(this).removeClass("past");
          $(this).removeClass("present");
          $(this).addClass("future");
        } else if (blockTime < currentTime) {
          $(this).removeClass("present");
          $(this).removeClass("future");
          $(this).addClass("past");
        }
      })
    }


    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));

    timeOfDay();
  });


  