var React = require('react');

var ModalState = require('../states/modal');
var ContactFormModal = require('./contact-form-modal');

var ContactFormTrigger = React.createClass({
  hideModal: function (e) {
    e.preventDefault();
    ModalState.hide();
  },
  showModal: function (e) {
    e.preventDefault();
    ModalState.show((
      <ContactFormModal key="contactForm" controller={this} />
    ));
  },
  render: function () {
    return (
      <a href="#" className="email" onClick={this.showModal}>Email</a>
    );
  }
});

module.exports = ContactFormTrigger;
