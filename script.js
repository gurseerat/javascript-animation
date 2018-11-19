setTimeout(function(){
    
    $('.logo').slideUp("slow", function() {
         $('.logo').remove();
        });
    $('.back').animate({
        width: "50%"
    }, 1000 );
  }, 1500);

  function scaleToFill() {
    $('video.video-background').each(function(index, videoTag) {
       var $video = $(videoTag),
           videoRatio = videoTag.videoWidth / videoTag.videoHeight,
           tagRatio = $video.width() / $video.height(),
           val;

       if (videoRatio < tagRatio) {
           val = tagRatio / videoRatio * 1.02; //size increased by 2% because value is not fine enough and sometimes leaves a couple of white pixels at the edges 
       } else if (tagRatio < videoRatio) {
           val = videoRatio / tagRatio * 1.02;
       }

       $video.css('transform','scale(' + val  + ',' + val + ')');

    });    
}

$(function () {
    scaleToFill();

    $('.video-background').on('loadeddata', scaleToFill);

    $(window).resize(function() {
        scaleToFill();
    });
});


setInterval(function(){
    
    $('.top').slideDown("slow", function() {
        $('.top').show();
       });
      
        $('.slide').show();
      
  }, 2200);

  setInterval(function(){
      
        $('.content1').show();
        $('.content2').show();
        $('.content3').show();
        $('.input-box').show();
  }, 2300);
