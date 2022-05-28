$(document).ready(function () {
    $("#search-btn").click(function () {
        clearExceptSample()
        // get input fields
        var from_lang = $(".from-lang option:selected").val();
        var to_lang = $(".to-lang option:selected").val();
        var order_val = $(".filter option:selected").val();

        $.getJSON("../ajax/json/translators.json", function (data) {

            translators = filterTranslators(data.translators, from_lang, to_lang, order_val)
            results_num = translators.length

            if (results_num == 0) {
                $(".result-area .result").text("No translators found for your choices :(").css("visibility", "visible").hide().fadeIn(500)
                $(".profile").css("visibility", "hidden")
            }
            else {
                // create profiles
                createProfileFields(results_num)
                // show result
                $(".result").text(`${results_num} translators were found for your search.`)
                $(".result-area").css("visibility", "visible").hide().fadeIn(500)
                $(".profile").css("visibility", "visible")

                $.each(translators, function (i, item) {
                    // fill the fields from JSON data
                    $(`.profile:nth-child(${i + 2}) .profile-pic`).attr("src", item.image)
                    $(`.profile:nth-child(${i + 2}) .profile-info h3`).text(item.fullname)
                    $(`.profile:nth-child(${i + 2}) .profile-info p`).text(item.bio)
                    $(`.profile:nth-child(${i + 2}) #price`).text(item.price)
                    $(`.profile:nth-child(${i + 2}) #time`).text(item.time)
                    //console.log(item.fullname, " => ", item.rating) 
                    // TODO: rating is not working correct
                    $(`.profile:nth-child(${i + 2}) .rating`).jqxRating({ width: 100, height: 35, disabled: true, value: item.rating});
                    $(`.profile:nth-child(${i + 2}) .jqx-rating-image-default, .jqx-rating-image-backward`).css("cursor", "default")

                });
                // add read more plugin
                readMore()
            }
        })
        
    })
    

})

function filterTranslators(translators, from_lang, to_lang, order_val) {
    result = []
    for (let t in translators) {
        languages = translators[t].languages
        // if translator has both selected languages, add to array
        if (languages.indexOf(from_lang) !== -1 && languages.indexOf(to_lang) !== -1) {
            result.push(translators[t])
        }
    }
    // sorting according to selected preference
    if(order_val == "price-asc"){
        result.sort((a, b) => {
            return a.price - b.price;
        });
    }
    else if(order_val="time"){
        result.sort((a, b) => {
            return a.time - b.time;
        });
    }
    else{
        result.sort((a, b) => {
            return b.rating - a.rating;
        });
    }

    return result
}
// create n clones of profile sample
function createProfileFields(n) {
    var profile = $(".profile")
    for (let i = 1; i < n; i++) {
        profile.clone().appendTo(".result-area");
    };
}
// remove all the profiles except the sample one
function clearExceptSample() {
    $('.profile').not(":first").remove();
}