$(document).ready(function () {
   // each translation must have unique rating and new uploaded translation has 0 star initally
   $("#rating_new").jqxRating({ width: 100, value: 0 });
   $("#rating_old1").jqxRating({ width: 100, value: 0 });
   $("#rating_old2").jqxRating({ width: 100, value: 4 });
   // first dialog
   var dialog = $("#dialog-form").dialog({
      autoOpen: false,
      height: 300,
      width: 315,
      modal: true,
   })
   $("#rate-btn-1").click(function () {
      dialog.dialog("open")
   })
   $("#send-btn-1").click(function () {
      dialog.dialog("close")
   })
   // 2nd dialog
   var dialog2 = $("#dialog-form2").dialog({
      autoOpen: false,
      height: 300,
      width: 315,
      modal: true,
   })
   $("#rate-btn-2").click(function () {
      dialog2.dialog("open")
   })
   $("#send-btn-2").click(function () {
      dialog2.dialog("close")
   })
   // 3rd dialog
   var dialog3 = $("#dialog-form3").dialog({
      autoOpen: false,
      height: 300,
      width: 315,
      modal: true,
   })
   $("#rate-btn-3").click(function () {
      dialog3.dialog("open")
   })
   $("#send-btn-3").click(function () {
      dialog3.dialog("close")
   })
   // loading documents in transition
   $("footer").hide()
   const child_num = document.getElementById("translations").children.length
   $("#translations").children().each(function (index) {
      if (index < child_num)
         $(this).hide().delay(300 * index).fadeIn(300);
   });
   async function show_after() {
      await sleep(1000) // wait a second for content
      $("footer").show()
   }
   show_after()
})
const sleep = ms => new Promise(r => setTimeout(r, ms));
