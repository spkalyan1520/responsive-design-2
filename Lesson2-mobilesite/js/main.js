$('.bottom-menu li').click(function(e){
    e.stopPropagation();
    $('.bottom-menu li').removeClass('selected');
    if($(event.target).is('li'))
        $(event.target).addClass('selected');
    else
      $(event.target).closest('li').addClass('selected');
});
