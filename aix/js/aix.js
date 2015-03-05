var bindPolyFill;
var documentReadyEvent;
var init = function () {
  var links = [
      {
        url: 'move',
        text: 'move'
      },
      {
        url: 'roaming',
        text: 'roaming'
      }
    ],
      menu,
      main;

  //document.getElementById('links').innerHTML = '<ul class="links-list"></ul>';
  var tmp = links.filter(function (link) {return !!link.url;}).map(function (link) {
     return '<li class="link-item"><a href="#' + link.url + '">' + link.text + '</a><li>';
  });
  
  if (9 < tmp.length) {
    document.getElementById('links').innerHTML = '<ul class="links-list">' + tmp + '</ul>';
  }
};

if ('function' === typeof document.addEventListener) {
  //document.addEventListener('DOMContentLoaded', init, false);
  documentReadyEvent = 'DOMContentLoaded';
  bindPolyFill = document.addEventListener;
} else if ('function' === typeof document.addEventListener) {
  //window.addEventListener('load', init, false);
  documentReadyEvent = 'DOMContentLoaded';
  bindPolyFill = window.addEventListener;
} else if ('function' === typeof document.addEventListener) {
  //document.attachEvent("onreadystatechange", init);
  documentReadyEvent = 'onreadystatechange';
  bindPolyFill = document.attachEvent;
} else if ('function' === typeof document.addEventListener) {
  //window.attachEvent("onload", init);
  documentReadyEvent = 'onload';
  bindPolyFill = window.attachEvent;
}

bindPolyFill(documentReadyEvent, init, false);
