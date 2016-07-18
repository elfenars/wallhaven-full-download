function addFullLink(){
  $("ul li figure").each(function(){
    id  = $(this).attr('data-wallpaper-id');
    url = `https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-${id}.jpg`

    $(this).find('.wall-res').wrap('<a href='+ url +' target=_blank download></a>')
  });
};

$(document).bind('DOMNodeInserted', function(e) {
    if ( $(e.target).is("section") ){
      addFullLink();
    }
});

addFullLink();
