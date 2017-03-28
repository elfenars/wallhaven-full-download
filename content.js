// TODO: Call this on hover or something like that.
function isValidURL(url) {
  var http = new XMLHttpRequest();

  http.open('HEAD', url, false);
  http.send();
  return http.status != 404;
}

function addFullLink(){
  $("ul li figure").each(function(){
    exts  = [".jpg",".png",".jpeg"];
    id    = $(this).attr('data-wallpaper-id');
    url   = `https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-${id}`

    for ( var i in exts ) {
      extURL = url + exts[i];

      if ( isValidURL(extURL) ) {
        console.log("Found " + extURL);
        $(this).find('.wall-res').wrap('<a href='+ extURL +' target=_blank download></a>');
        break;
      };
    };
  });
};

$(document).bind('DOMNodeInserted', function(e) {
    if ( $(e.target).is("section") ){
      addFullLink();
    }
});

addFullLink();
