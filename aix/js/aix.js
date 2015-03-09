var bindPolyFill;
var documentReadyEvent;
var idCharRange = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
var env = {
  agents: [],
  x: {
    min: 0,
    max: undefined
  },
  y: {
    min: 0,
    max: undefined
  },
  spawnAgent: function () {
    var id, x, y;
    do {
      id += idRange[Math.floor(Math.rand() * 16)];
    } while (id.toString.length < 8)
    
    var agent = {
      id: id, 
      x: Math.floor(Math.rand() * this.x.max),
      y: Math.floor(Math.rand() * this.y.max)
    };
    
    this.agents.push(this.update(agent));
  },
  adjust: function (key, value) {
    if (undefined !== env[key].max && value > env[key].max) {
      value = env[key].max;
    } else if (undefined !== env[key].max && value < env[key].min) {
      value = env[key].min;
    }
    return value;
  },
  update: function (agent) {
    if (undefined === agent) {
      this.agents = this.agents.map(function (agent) {
        return env.update(agent);
      });
      return;
    }
    var agentKeys = Object.keys(agent);
    agentKeys
    .filter(function (key) {
      return undefined !== env[key];
    })
    .map(function () {
      var value = agent[key];
      env.adjust(key, value);
      agent[key] = adjustedValue;
    });
    return agent;
  }
};
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
  
  if (0 < tmp.length) {
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
console.log('documentReadyEvent', documentReadyEvent);
bindPolyFill(documentReadyEvent, init, false);
