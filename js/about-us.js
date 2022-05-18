$(document).ready(function(){
    $("#send-button").on("click", function(){
        //checks if the inputs are empty or not.
        if(($("#email").val() != "") && ($("#comment").val() != "")){
            var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            //email validation.
            if(emailReg.test($("#email").val())){
                //if correct email entered.
                alert("Thank you for your feedback!");
                $("#email").val('');
                $("#comment").val('');
            }
            else{//if incorrect email entered
                alert("Please, enter a correct email address.");
            }
            
        }
        else {//if inputs are empty.
            alert("Please enter the required inputs!");
        }
        
    })

});



