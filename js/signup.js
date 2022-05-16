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
    $("#password").jqxPasswordInput({  
        placeHolder: "Enter a password",
        height: 30,
        width: 250,
        minLength: 1, 
        showStrength: true, 
        showStrengthPosition: "right" 
    });

    $("#passwordConfirm").jqxPasswordInput({  
        placeHolder: "Confirm your password",
        height: 30,
        width: 250,
        minLength: 1, 
    });

    // Create jqxValidator.
    $("#form").jqxValidator({
        rules: [
            { input: "#userName", message: "Username is required!", action: 'keyup, blur', rule: 'required' },
            { input: "#password", message: "Password is required!", action: 'keyup, blur', rule: 'required' },
            { input: "#passwordConfirm", message: "Password is required!", action: 'keyup, blur', rule: 'required' },
            {
                input: "#passwordConfirm", message: "Passwords should match!", action: 'keyup, blur', rule: function (input, commit) {
                    var firstPassword = $("#password").jqxPasswordInput('val');
                    var secondPassword = $("#passwordConfirm").jqxPasswordInput('val');
                    return firstPassword == secondPassword;
                }
            }
        ]
    });

    // Validate the Form.
    $("#submit").click(function () {
        $('#form').jqxValidator('validate');
    });

    // Update the jqxExpander's content if the validation is successful.
    $('#form').on('validationSuccess', function (event) {
        alert("Account Created Successfully!");
        //$("#createAccount").jqxExpander('setContent', '<span style="margin: 10px;">Account created.</span>');
    });
});