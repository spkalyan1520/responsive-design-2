$('.bottom-menu li').click(function(e){
    e.stopPropagation();
    $('.bottom-menu li').removeClass('selected');
    var $el;
    if($(event.target).is('li'))
        $el = $(event.target);
    else
      $el = $(event.target).closest('li');
    $el.addClass('selected');
    var text = $el.attr('tab').trim();
    $('.main div').hide();
    $('.main').find('.'+text).show();
    window.scrollTo(0,0);
});
