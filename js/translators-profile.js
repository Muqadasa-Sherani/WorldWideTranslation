$(document).ready(function(){
    console.log(clicked_user_name)
    $("#resume").change(function() {
        filename = this.files[0].name;
        $("#selected-file").text(filename)
        $(".validation-error").html("Please fill all fields.")
        $(".price").toggleClass("price-active")
    });
    // to access and style buttons inside of the modal/dialog we must give custom class or id
    $('.ui-button').each(function(){
        if($(this).text() === "Confirm Payment"){
            $(this).toggleClass("confirm-btn")
        }
        if($(this).text() === "Cancel"){
            $(this).toggleClass("cancel-btn")
        }
    })
    
})