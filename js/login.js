$(document).ready(function(){
    // Create jqxInput.
    $("#username").jqxInput({
        placeHolder: "Username",
        height: 30,
        width: 250,
        minLength: 1,
      });
    // Create jqxPasswordInput.
    $("#password").jqxPasswordInput({ 
        placeHolder: "Enter your password...", 
        width: 250, 
        height: 30,
        minLength: 1,
    });

    // Validate the Form.
    $("#submit").click(function () {
        const user = "Admin";
        const pass = "admin123";
        if($("#username").val() == user && $("#password").val() == pass){
            location.href = "../html/my_translation_page.html";
        }
        else{
            alert("wtf");
        }
    });    
});