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
  document.getElementById('links').innerHTML = '<ul></ul>';
  links.map(function (i) {
    console.log(links[i]);
    //document.querySelector('#links ul').append('<li><a href="' + links[i].url + '">' + links[i].text + '</a><li>');
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
