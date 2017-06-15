function ajaxIsValidURL(url, el) {
  isValid = false;

  $.ajax({
    url: url,
    type: "HEAD",
    async: true,
    success: function(data) {
      console.log("Found: " + url);
      el.find('.wall-res').wrap('<a href='+ url +' target=_blank download></a>');
    }
  });
}

function addFullLink(){
  exts  = [".jpg",".png",".jpeg"];

  $("ul li figure").each(function(){
    id  = $(this).attr('data-wallpaper-id');
    url = `https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-${id}`

    for ( var i in exts ) {
      extURL = url + exts[i];
      ajaxIsValidURL(extURL, $(this) );
    };
  });
};

$(document).bind('DOMNodeInserted', function(e) {
    if ( $(e.target).is("section") ){
      addFullLink();
    }
});

addFullLink();
