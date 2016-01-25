var visible = false;

var handlers = {
  show: [],
  hide: []
};

var handleKeyUp = function (event) {
  if(event.keyCode === 27) {
    hideLightbox();
  }
};

var hideLightbox = function () {
  visible = false;
  document.body.classList.remove('has-lightbox');
  document.removeEventListener('keyup', handleKeyUp);

  handlers.hide.forEach(function (handler) {
    handler.call();
  });
};

var showLightbox = function (contents) {
  if(!visible) {
    visible = true;
    document.body.classList.add('has-lightbox');
    document.addEventListener('keyup', handleKeyUp);
  }

  handlers.show.forEach(function (handler) {
    handler.call(null, {
      contents: contents
    });
  });
};

var LightboxState = {
  visible: false,
  subscribe: function (eventName, handler) {
    handlers[eventName].push(handler);
  },
  show: showLightbox,
  hide: hideLightbox
};

module.exports = LightboxState;
