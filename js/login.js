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
        showStrength: true, 
        showStrengthPosition: "right" 
    });
        
    // Create jqxValidator.
    $("#form").jqxValidator({
        rules: [
            { input: "#username", action: 'keyup, blur', rule: 'required' },
            { input: "#password", action: 'keyup, blur', rule: 'required' }
            
        ]
    });

    // Validate the Form.
    $("#submit").click(function () {
        $('#form').jqxValidator('validate');
    });    
});