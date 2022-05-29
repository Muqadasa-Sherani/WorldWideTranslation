var clicked_user_name = "Betsy"
$(document).ready(function () {
    $("#search-btn").click(function () {
        // delete all profiles before getting new ones
        clearProfiles()
        // get input fields
        var from_lang = $(".from-lang option:selected").val();
        var to_lang = $(".to-lang option:selected").val();
        var order_val = $(".filter option:selected").val();
        // get all translators form JSON file
        $.getJSON("../ajax/json/translators.json", function (data) {
            // filter & order translators according to selected options
            translators = filterTranslators(data.translators, from_lang, to_lang, order_val)
            results_num = translators.length
            // if no translators found, display result
            if (results_num == 0) {
                $(".result-area").css("visibility", "visible").hide().fadeIn(500)
                $(".result-area").append(`<p class="result">${n} translators were found for your search</p>`)
            }
            else {
                // create profiles
                createProfileFields(results_num)
                // fill profile informations
                $.each(translators, function (i, item) {
                    // fill the fields from JSON data
                    $(`#profile${i} .profile-pic`).attr("src", item.image)
                    $(`#profile${i} .profile-info h3`).text(item.fullname)
                    $(`#profile${i} .profile-info p`).text(item.bio)
                    $(`#profile${i} .price`).text(item.price)
                    $(`#profile${i} .time`).text(item.time)
                    $(`#profile${i} #rating${i}`).jqxRating({ width: 100, height: 35, disabled: true, value: item.rating });
                    $(`#profile${i} #rating${i}.jqx-rating-image-default, .jqx-rating-image-backward`).css("cursor", "default")

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
    if (order_val === "price-asc") {
        result.sort((a, b) => {
            return a.price - b.price;
        });
    }
    else if (order_val === "time") {
        result.sort((a, b) => {
            return a.time - b.time;
        });
    }
    else if(order_val === "rating"){
        result.sort((a, b) => {
            return b.rating - a.rating;
        });
    }
    
    return result
}
// create n clones of profile sample
function createProfileFields(n) {
    $(".result-area").css("visibility", "visible").hide().fadeIn(500)
    $(".result-area").append(`<p class="result">${n} translators were found for your search</p>`)
    for (let i = 0; i < n; i++) {
        $(".result-area").append(
            ` 
            <div class="profile" id="profile${i}">
                <div class="profile-content">
                <div class="img-rating">
                    <img class="profile-pic" src="" alt="user" />
                    <div id="rating${i}"></div>
                </div>
                <div class="profile-info">
                    <h3></h3>
                    <p class="read-more"></p>
                </div>
                </div>
                <div class="side-content">
                <div class="side-info">
                    <p>Per words: <span class="price"></span>$</p>
                    <p>Time: <span class="time"></span> hours</p>
                </div>
                <a class="view-profile" href="translators_profile_page.html">View Profile</a>
                </div>
            </div>
            `
        );
    };
}
// remove all the profiles except the sample one
function clearProfiles() {
    $('.profile').remove();
    $('.result').remove();
}