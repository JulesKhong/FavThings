$(document).ready(function() {

  $("#favoriteThings").submit(function(event) {

    var food = $("#food").val();
    var movie = $("#movie").val();
    var animal = $("#animal").val();
    var tvShow = $("#tvShow").val();

    var allFav = [food, movie, animal, tvShow];
    var allFavRevised = [allFav[1], allFav[0], allFav[2]];
    allFavRevised.push(allFav[0], allFav[1], allFav[2], allFav[3]);

    console.log(allFavRevised);
    $("#resultOne").append("<li>" + allFavRevised[0] + "</li>");
    $("#resultOne").append("<li>" + allFavRevised[1] + "</li>");
    $("#resultOne").append("<li>" + allFavRevised[3] + "</li>");
    $("#resultOne").append("<li>" + allFavRevised[4] + "</li>");
    $("#resultOne").append("<li>" + allFavRevised[5] + "</li>");
    $("#resultOne").append("<li>" + allFavRevised[6] + "</li>");
    $("#resultOne").append("<li>" + allFavRevised[7] + "</li>");

    event.preventDefault();

});
});
