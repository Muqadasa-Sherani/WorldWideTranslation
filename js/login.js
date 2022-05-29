$(document).ready(function(){
    // Create jqxInput username.
    $("#username").jqxInput({
        placeHolder: "Username",
        height: 30,
        width: 250,
        minLength: 1,
      });
    // Create jqxInput password.
    $("#password").jqxInput({ 
        placeHolder: "Enter your password...", 
        width: 250, 
        height: 30,
        minLength: 1,
    });

    //creating a fake account.
    $("#submit").click(function () {
        const user = "admin";
        const pass = "admin123";
        if($("#username").val() == user && $("#password").val() == pass){
            location.href = "../html/my_translation_page.html";
        }
        else{
            alert("Incorrect username or password.");
        }
    });    
});