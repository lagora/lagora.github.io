var init = function () {
  var links,
      menu,
      main;
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
