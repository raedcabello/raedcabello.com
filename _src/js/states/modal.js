var visible = false;

var handlers = {
  show: [],
  hide: []
};

var handleKeyUp = function (event) {
  if(event.keyCode === 27) {
    hideModal();
  }
};

var hideModal = function () {
  visible = false;
  document.body.classList.remove('has-modal');
  document.removeEventListener('keyup', handleKeyUp);

  handlers.hide.forEach(function (handler) {
    handler.call();
  });
};

var showModal = function (contents) {
  if(!visible) {
    visible = true;
    document.body.classList.add('has-modal');
    document.addEventListener('keyup', handleKeyUp);
  }

  handlers.show.forEach(function (handler) {
    handler.call(null, {
      contents: contents
    });
  });
};

var ModalState = {
  visible: false,
  subscribe: function (eventName, handler) {
    handlers[eventName].push(handler);
  },
  show: showModal,
  hide: hideModal
};

module.exports = ModalState;
