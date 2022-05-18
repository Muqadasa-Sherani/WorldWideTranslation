$("document").ready(()=>{
    
    $("#resume").change(function() {
        filename = this.files[0].name;
        $("#selected-file").text(filename)
    });

    
      $("#first-name").jqxInput({
        placeHolder: "First Name",
        height: 30,
        width: 250,
        minLength: 1,
      });

      $("#last-name").jqxInput({
        placeHolder: "Last Name",
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

      $("#phone").jqxInput({
        placeHolder: "Phone",
        height: 30,
        width: 250,
        minLength: 1,
      });

      $("#address").jqxInput({
        placeHolder: "Address",
        height: 30,
        width: 250,
        minLength: 1,
      });

      $('#jqxTextArea').jqxTextArea({ placeHolder: 'Why Do You Want to be an WWT Translator?', height: 90, width: 250, minLength: 1, });
      

})
