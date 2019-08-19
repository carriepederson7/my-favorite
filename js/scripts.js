$(document).ready(function() {
  $("#fav-things").submit(function(event) {
    event.preventDefault();
    alert("inform");

    var favoriteThings = [];
    var food = $("input#food").val();
    var animal = $("#animal").val();
    var musicType = $("#music-type").val();
    var color = $("#color").val();
    var movie = $("#movie").val();
    console.log(favoriteThings);
    favoriteThings.push(food, animal, musicType, color, movie);


  });
});
