$(document).ready(function() {
  $("#fav-things").submit(function(event) {
    event.preventDefault();
    alert("inform");

    var favoriteThings = [];
    var food = $("#food").val();
    var animal = $("#animal").val();
    var musicType = $("#music-type").val();
    var color = $("#color").val();
    var movie = $("#movie").val();
    console.log(favoriteThings);

    food2.text(food);

    favoriteThings.push(food2, animal, musicType, color, movie);


  });
});
