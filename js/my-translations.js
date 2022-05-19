$(document).ready(function () {
   // each translation must have unique rating and new uploaded translation has 0 star initally
   $("#rating_new").jqxRating({ width: 112, height: 35, value: 0 });
   $("#rating_old1").jqxRating({ width: 112, height: 35, value: 5 });
   $("#rating_old2").jqxRating({ width: 112, height: 35, value: 4 });
   $(".new-translation-container").hide().fadeIn(600)
   $(".pending-translation-container").hide().fadeIn(600)
   $("h2").hide().fadeIn(600)
})

