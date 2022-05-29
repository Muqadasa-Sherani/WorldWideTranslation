$(document).ready(function(){

    // Create jqxInput.
    $("#userName").jqxInput({
        placeHolder: "Username",  
        height: 30,
        width: 250,
        minLength: 1, 
    });

    $("#email").jqxInput({  
        placeHolder: "Email",
        height: 30,
        width: 250,
        minLength: 1,
    });

    // Create jqxPasswordInput.
    $("#password").jqxInput({  
        placeHolder: "Enter a password",
        height: 30,
        width: 250,
        minLength: 1,
    });

    $("#passwordConfirm").jqxInput({  
        placeHolder: "Confirm your password",
        height: 30,
        width: 250,
        minLength: 1, 
    });

    /*validtion starts*/
    $("#submit").on("click", function(){
        $("#form").jqxValidator("validate");
    });
    //initialize validator.
    $("#form").jqxValidator({
        hintType: "label",
        rules:[
            {
                input: "#userName",
                message: "Username is required",
                action: "keyup, blur",
                rule: "required",
            },
            {
                input: "#userName",
                message: "Username must be minimum  3 characters!",
                action: "keyup, blur",
                rule: "length=3,12",
            },
            {
                input: "#email",
                message: "E-mail is required!",
                action: "keyup, blur",
                rule: "required",
            },
            {
                input: "#email",
                message: "Invalid e-mail!",
                action: "keyup",
                rule: "email",
            },
            {
                input: "#password",
                message: "Password is required!",
                action: "keyup, blur",
                rule: "required",
            },
            {
                input: "#password",
                message: "Password must be minimum 4 characters!",
                action: "keyup, blur",
                rule: "length=4,12",
            },
            {
                input: "#passwordConfirm",
                message: "Password is required!",
                action: "keyup, blur",
                rule: "required",               
            },
            {
                input: "#passwordConfirm",
                message: "Passwords doesn't match!",
                action: "keyup, focus",
                rule: function (input, commit) {
                  // call commit with false, when you are doing server validation and you want to display a validation error on this field.
                  if (input.val() === $("#password").val()) {
                    return true;
                  }
                  return false;
                },
            },
            {
                input: "#agreement-checkbox",
                message: "You have to accept the terms ",
                action: "change",
                rule: "required",
                position: "top:0,0",
            },
        ],
    });
});