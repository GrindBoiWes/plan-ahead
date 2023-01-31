
// Sets date in header of project
var todaysDate = dayjs().format('dddd, MMMM YYYY');
$('#currentDay').text(todaysDate);
// Creates click function on save button for entered text and logs it with the hour
$(document).ready(function() {
 $('.saveBtn').on('click', function(event) {
 event.preventDefault();
  var time = $(this).siblings(".description").val();
  var text = $(this).parent().attr("id");
  
// Saves Text and Hour of entered data
  localStorage.setItem(time,text);
 
 })

    function timeOfDay() {
  
      var currentTime = dayjs().hour();


       // 
        $(".time-block").each(function () {
       
        var blockTime = parseInt($(this).attr("id").split("-")[1]);

          // This section will check the time of day, and set the class accordingly
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

    // Collects the information of stored date and saves it to local storage
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


  