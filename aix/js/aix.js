var init = function () {
  var links = [
      {
        url: 'roaming',
        text: 'roaming'
      }
    ],
      menu,
      main;
  
  document.getElementById('links').append('ul');
  links.map(function (i) {
    document.querySelector('#links ul').append('<li><a href="' + links[i].url + '">' + links[i].text + '</a><li>');
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
