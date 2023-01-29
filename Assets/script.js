

var todaysDate = dayjs().format('dddd, MMMM YYYY');
$('#currentDay').text(todaysDate);

$(document).ready(function () {
 $('.saveBtn').on('click', function() {
  var time = $(this).siblings(".description").val();
  var text = $(this).parent().attr("id");

  localStorage.setItem(time,text);
  $("#hour9 .description").val(localStorage.getItem("hour9"));
  $("#hour10 .description").val(localStorage.getItem("hour10"));
  $("#hour11 .description").val(localStorage.getItem("hour11"));
  $("#hour12 .description").val(localStorage.getItem("hour12"));
  $("#hour13 .description").val(localStorage.getItem("hour13"));
  $("#hour14 .description").val(localStorage.getItem("hour14"));
  $("#hour15 .description").val(localStorage.getItem("hour15"));
  $("#hour16 .description").val(localStorage.getItem("hour16"));
  $("#hour17 .description").val(localStorage.getItem("hour17"));
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


   // $("#hour9 .description").val(localStorage.getItem("hour9"));
   // $("#hour10 .description").val(localStorage.getItem("hour10"));
   // $("#hour11 .description").val(localStorage.getItem("hour11"));
   // $("#hour12 .description").val(localStorage.getItem("hour12"));
    //$("#hour13 .description").val(localStorage.getItem("hour13"));
    //$("#hour14 .description").val(localStorage.getItem("hour14"));
    //$("#hour15 .description").val(localStorage.getItem("hour15"));
   // $("#hour16 .description").val(localStorage.getItem("hour16"));
    //$("#hour17 .description").val(localStorage.getItem("hour17"));

    timeOfDay();
  });


  