$(document).ready(function(){
    
    $('#weather-app').hover(function() {
        $(this).attr('src', 'assets/gifs/weatherDB.gif');
      }, function() {
        $(this).attr('src', 'assets/images/weatherDB.jpg');
      });

      $('#searchU-app').hover(function() {
        $(this).attr('src', 'assets/gifs/searchU.gif');
      }, function() {
        $(this).attr('src', 'assets/images/searchU.jpg');
      });

      $('#planner-app').hover(function() {
        $(this).attr('src', 'assets/gifs/planner.gif');
      }, function() {
        $(this).attr('src', 'assets/images/planner.jpg');
      });

      $('#quiz-app').hover(function() {
        $(this).attr('src', 'assets/gifs/quiz.gif');
      }, function() {
        $(this).attr('src', 'assets/images/quiz.jpg');
      });

      $('#burger-app').hover(function() {
        $(this).attr('src', 'assets/gifs/Eat-Da-Burger.gif');
      }, function() {
        $(this).attr('src', 'assets/images/Eat-Da-Burger.jpg');
      });

   
})