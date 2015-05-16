var sonofapix = {
  "head": {
    "link": [
      {"type": "text/css","rel": "stylesheet","href": "//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.3.0/css/font-awesome.min.css"},
      {"type": "text/css","rel": "stylesheet","href": "//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.4/css/bootstrap.min.css"}
    ],
    "script": [
      {"type": "text/javascript", "src": "//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js"},
      {"type": "text/javascript", "src": "//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.4/js/bootstrap.min.js"}
    ]
  },
  "links": {
    "mail": {"icon": "fa fa-envelope", "href": "mailto:lagora@sonofapix.com"},
    "twitter": {"icon": "fa fa-twitter", "href": "http://www.twitter.com/sonofapix"},
    "tumblr": {"icon": "fa fa-tumblr", "href": "http://sonofapix.tumblr.com/sonofapix"}
  },
  "projects": {}
};

Object.keys(sonofapix.head).map(function (head_element) {
  console.log('head_element', head_element);
  sonofapix.head[head_element].map(function (each_element) {
    console.log('each_element', each_element);
    //var element = document.createElement(head_element);
      
  });
});

$(document).ready(function () {
  
});
