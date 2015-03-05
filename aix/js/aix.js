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

  document.getElementById('links').innerHTML = '<ul class="links-list"></ul>';
  links
  .filter(function (link) {
    return !!link.url;
  })
  .map(function (link) {
    document.querySelector('#links ul').innerHTML += '<li class="link-item"><a href="' + link.url + '">' + link.text + '</a><li>';
  });    
  
};

if ('function' === typeof document.addEventListener) {
  document.addEventListener('DOMContentLoaded', init, false);
} else if ('function' === typeof document.addEventListener) {
  window.addEventListener('load', init, false);
} else if ('function' === typeof document.addEventListener) {
  document.attachEvent("onreadystatechange", init);
} else if ('function' === typeof document.addEventListener) {
  window.attachEvent("onload", init);
}
