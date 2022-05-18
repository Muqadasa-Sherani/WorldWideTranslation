$(document).ready(function(){
     $("#resume").change(function() {
        filename = this.files[0].name;
        $("#selected-file").text(filename)
        $(".price").toggleClass("price-active")
    });
})