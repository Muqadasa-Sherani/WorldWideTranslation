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

    //builtin jquery validator
    $("form").validate();

    // Create jqxValidator.
    /*$("#form").jqxValidator({
        rules: [
            { input: "#userName", action: 'keyup, blur', rule: 'required' },
            { input: "#password", action: 'keyup, blur', rule: 'required' },
            { input: "#passwordConfirm", action: 'keyup, blur', rule: 'required' },
            {
                input: "#passwordConfirm", message: "Passwords should match!", action: 'keyup, blur', rule: function (input, commit) {
                    var firstPassword = $("#password").jqxInput('val');
                    var secondPassword = $("#passwordConfirm").jqxInput('val');
                    return firstPassword == secondPassword;
                }
            }
        ]
        
    }) ;

    $("#submit").click(function () {
        $('#form').jqxValidator('validate');
    });

    // Update the jqxExpander's content if the validation is successful.
    $('#form').on('validationSuccess', function (event) {
        alert("Account Created Successfully!");
        //$("#createAccount").jqxExpander('setContent', '<span style="margin: 10px;">Account created.</span>');
    });*/
});