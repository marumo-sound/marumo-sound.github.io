$(function(){
  
  // 左メニュー押下時のページ内遷移
  $('header a').click(function() {
    
    var id =  $(this).attr('href');
    var position = $(id).offset().top;
    
    $('html, body').animate({
      'scrollTop': position
    }, 500);
  });


});