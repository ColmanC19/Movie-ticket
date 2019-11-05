// Business Logic


function Ticket(selectedMovie, selectedTime, selectedAge) {
  this.selectedMovie = selectedMovie;
  this.selectedTime = selectedTime;
  this.selectedAge = selectedAge;
}


var price = 0

Ticket.prototype.addPrice = function() {
  var movieAdjust = 11;
  if (this.selectedMovie.includes('The Joker', 'Terminator')) {
    movieAdjust += 1;
  };
  if (this.selectedAge.includes("child", "senior")){
    movieAdjust -= 3;
  };
  if (this.selectedTime <= 3){
    movieAdjust -= 3;
  };
    // return this.price += movieAdjust
    this.movieAdjust = movieAdjust;
};

  // Front End Logic
$(document).ready(function(){
  $("form#ticket-form").submit(function(event) {
    event.preventDefault();
    var selectedMovie = $("#movieList").val();
    var selectedTime = $("#time").val();
    var selectedAge = $("#age").val();
    var ticketResults = new Ticket(selectedMovie, selectedTime, selectedAge)
    ticketResults.addPrice();


    $("p#results").text("Thank you! You purchased a " + ticketResults.selectedAge + " ticket for " + ticketResults.selectedMovie + " at " + ticketResults.selectedTime + "pm. Your total will be: " + ticketResults.movieAdjust);

    console.log(ticketResults);
  })
})
