var init = function () {
  var links = [
      {
        url: 'roaming',
        text: 'roaming'
      }
    ],
      menu,
      main;
  console.log(links);
  document.getElementById('links').innerHTML = '<ul class="links-list"></ul>';
  links.map(function (link) {
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
