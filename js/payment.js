$(document).ready(function () {

    var dialog, form,
    dialog = $("#dialog-form").dialog({
        autoOpen: false,
        height: 530,
        width: 350,
        modal: true,
        buttons: {
            "Confirm Payment": function(){
                let name = $("#name").val()
                let card_number = parseInt($("#card-number").val())
                let expiration = $("#expiration-date").val()
                let cvv = parseInt($("#cvv").val())
                
                if(!$(".price").hasClass("price-active")){
                    $(".validation-error").html("Please upload your file.")
                }
                else if(inputValidation(name, card_number, cvv, expiration)){
                    alert("Your file has sended! We will inform you when your translation is ready!", location.href="../html/my_translation_page.html")
                    dialog.dialog("close")
                }
                 
            },
            "Cancel": function () {
                dialog.dialog("close");
                form[0].reset();
            }
        },
        close: function () {
            form[0].reset();
        }
    });

    form = dialog.find("form").on("submit", function (event) {
        event.preventDefault();
    });

    $("#send-btn").button().on("click", function () {
        dialog.dialog("open");
    });
});
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