$(document).ready(function () {
   // each translation must have unique rating and new uploaded translation has 0 star initally
   $("#rating_new").jqxRating({ width: 112, height: 35, value: 0 });
   $("#rating_old1").jqxRating({ width: 112, height: 35, value: 5 });
   $("#rating_old2").jqxRating({ width: 112, height: 35, value: 4 });
   $("footer").hide()
   const child_num = document.getElementById("translations").children.length
   $("#translations").children().each(function (index) {
      if (index < child_num)
        $(this).hide().delay(200 * index).fadeIn();
   });
   async function show_after(){
      await sleep(1000) // wait a second for content
      $("footer").show()
   }
   show_after()
})
const sleep = ms => new Promise(r => setTimeout(r, ms));
