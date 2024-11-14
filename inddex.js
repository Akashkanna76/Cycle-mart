$(".midage").click(function(event){
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $(".PUheading2").offset().top // 'position' is the vertical pixel position to scroll to
      }, 10); // 'duration' is the time in milliseconds for the scroll effect
      
})

$(".adultage").click(function(event){
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $(".PUheading3").offset().top // 'position' is the vertical pixel position to scroll to
      }, 10); // 'duration' is the time in milliseconds for the scroll effect
      
})




  