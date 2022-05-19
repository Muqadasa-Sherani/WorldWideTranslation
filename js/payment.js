$(document).ready(function () {
    // jQuery dialog widget is used for displaying the payment form in "translator's profile" page
    var dialog, form,
    dialog = $("#dialog-form").dialog({
        autoOpen: false, // this dialog will be displayed when "send file" button is clicked. so hide it.
        height: 530,
        width: 350,
        modal: true,
        // modal has 2 buttons and each has actions
        buttons: {
            "Confirm Payment": function(){
                // take all input fields
                let name = $("#name").val()
                let card_number = parseInt($("#card-number").val())
                let expiration = $("#expiration-date").val()
                let cvv = parseInt($("#cvv").val())
                // fisrt check if any file is uploaded 
                if(!$(".price").hasClass("price-active")){
                    $(".validation-error").html("Please upload your file.")
                }
                // validate inputs
                else if(inputValidation(name, card_number, cvv, expiration)){
                    alert("Your file has sended! We will inform you when your translation is ready!", location.href="../html/my_translation_page.html")
                    dialog.dialog("close")
                }
                 
            },
            "Cancel": function () {
                dialog.dialog("close");
                form[0].reset(); // clear input fields
            }
        },
        close: function () {
            form[0].reset(); // clear input fields
        }
    });

    form = dialog.find("form").on("submit", function (event) {
        event.preventDefault();
    });
    // when send file button is clicked, dialog will be opened
    $("#send-btn").button().on("click", function () {
        dialog.dialog("open");
    });
});
// proper validation tips will be displayed if any unvalid input is detected when the "confirm payment" button is clicked
function inputValidation(name, card_number, cvv, expiration_date){
    if(name.length == 0){
        $(".validation-error").html("Please enter name on the card.")
        return false
    }
    if(Number.isInteger(card_number)==false || card_number.toString().length != 16){
        $(".validation-error").html("Please enter a valid card-number.")
        return false
    }
    if(Number.isInteger(cvv) == false || cvv.toString().length != 3){
        $(".validation-error").html("Please enter a valid cvv.")
        return false
    }
    if(expiration_date.split("/").length != 2){
        $(".validation-error").html("Please enter a valid expiration date.")
        return false
    }
    if(expiration_date.split("/").length == 2){
        const date = expiration_date.split("/")
        const month = parseInt(date[0])
        const year = parseInt(date[1])
        if(Number.isInteger(year) == false || Number.isInteger(month) == false || (month > 12 || month < 1)){
            $(".validation-error").html("Please enter a valid expiration date.")
            return false
        }
        
    }
    return true
}