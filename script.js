$(function() {
  
  WebFont.load({
    google: {
      families: ['Noto Sans JP', 'Share Tech Mono']
    },
    loading: function() {
      // window.alert('loading');
    },
    active: function() {
      // window.alert('active');
    },
    inactive: function() {
      // window.alert('inactive');
    },
    fontloading: function(familyName, fvd) {
      // window.alert('fontloading' + ' ' + familyName + ' ' + fvd);
    },
    fontactive: function(familyName, fvd) {
      // window.alert('fontactive' + familyName + fvd);
    },
    fontinactive: function(familyName, fvd) {
      // window.alert('fontinactive' + familyName + fvd);
    }
  });
  
  // 左メニュー押下時のページ内遷移
  $('.left-wrapper a').click(function() {
    var id =  $(this).attr('href');
    var position = $(id).offset().top;
    $('html, body').animate({
      'scrollTop': position
    }, 'slow');
  });
});