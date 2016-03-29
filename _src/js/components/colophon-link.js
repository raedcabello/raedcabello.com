var React = require('react');

var ModalState = require('../states/modal');
var ColophonModal = require('./colophon-modal');

var ColophonLink = React.createClass({
  hideModal: function (e) {
    e.preventDefault();
    ModalState.hide();
  },
  showModal: function (e) {
    e.preventDefault();
    ModalState.show((
      <ColophonModal controller={this} key="colophon" />
    ));
  },
  render: function () {
    return (<span onClick={this.showModal}>&amp;</span>);
  }
});

module.exports = ColophonLink;
