$(document).ready(function(){
  var showCharacter = 200;
  var moretext = "Read More";
  var lesstext = "Read less";
  
  $('.read-more').each(function(){
    var content = $(this).html(); //all the content of the paragraph.

    if(content.length > showCharacter){ //whole content is limited to 200 characters
      var showContent = content.substr(0, showCharacter); //substr() shows the first 200 characters
      var hideContent = content.substr(showCharacter); //substr() shows the rest of the characters.
      //the paragraph is disected into more classes and readmore text. 
      var fullContent = showContent + '<div class="morecontent"><div>' + hideContent + '</div><a href="" class="morelink">' + moretext + '</a></div>';
      $(this).html(fullContent);
    }
  });

  $('.morelink').click(function(){ //click event for readmore link
    if($(this).hasClass('less')){ //if readless is clicked change to readmore
      $(this).removeClass('less');
      $(this).html(moretext);
    }else{              //if readmore is clicked change to readless
      $(this).addClass('less');
      $(this).html(lesstext);
    }
    //the previous division (hideContent) is shown or hidden using slideToggle()
    $(this).prev().slideToggle('slow'); 

    return false; //used to prevent url being submitted.
  });

});