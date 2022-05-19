
$(document).ready(()=>{
    // get current url
    var activePage = window.location.href;
    // loop through each link in navigation
    $('.nav-link a').each(function () {
        var linkPage = this.href;
        // give nav-active class to current nav link for underlying style
        if (activePage == linkPage) {
            $(this).closest("li").addClass("nav-active");
        }
    });
    // gives active class to hamburger menu when it's clicked: transition from burger to cross x
    $(".burger").click(function () {
        $(".burger").toggleClass("active")
        $(".nav-ul").toggleClass("active")
        
    })
})