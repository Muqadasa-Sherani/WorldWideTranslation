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


    //password validation.
    $('input[type=password]').keyup(function() {
        // set password variable
        var pswd = $(this).val();

        //validate the length
        if ( pswd.length < 8 ) {
            $('#length').removeClass('valid').addClass('invalid');
        } else {
            $('#length').removeClass('invalid').addClass('valid');
        }
        //validate letter
        if ( pswd.match(/[A-z]/) ) {
            $('#letter').removeClass('invalid').addClass('valid');
        } else {
            $('#letter').removeClass('valid').addClass('invalid');
        }

        //validate capital letter
        if ( pswd.match(/[A-Z]/) ) {
            $('#capital').removeClass('invalid').addClass('valid');
        } else {
            $('#capital').removeClass('valid').addClass('invalid');
        }

        //validate number
        if ( pswd.match(/\d/) ) {
            $('#number').removeClass('invalid').addClass('valid');
        } else {
            $('#number').removeClass('valid').addClass('invalid');
        }
        
    }).focus(function() { //when create password is clicked dialog is shown.
        $('#pswd_info').show();
    }).blur(function() { //when outside of create password is clicked dialog box is hidden.
        $('#pswd_info').hide();
    });


    //confirm password validation.
    var flag = 1;
    $("#submit").click(function () {
        var firstPassword = $("#password").jqxInput('val');
        var secondPassword = $("#passwordConfirm").jqxInput('val');
        if(firstPassword == secondPassword){
            flag = 0;
        } 
        else{
            alert("Passwords should match!");
            flag = 1;
        }
    });

    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    //email validation.
    if(emailReg.test($("#email").val())){
        //if correct email entered.
        flag = 0;
    }
    else{//if incorrect email entered
        flag = 1;
    }

    //when the button is clicked all these validation should take please.
    $("#submit").on("click", function(){
        //checks if the inputs are empty or not.
        if(($("#agreement-checkbox").prop('checked') == true) && flag == 0){ //if checkbox is ticked
            location.href = "../html/my_translation_page.html";            
        }
        else {
            alert("Please fill in the form apprpriately!");
        }
        
    })
});