var React = require('react');

var ModalState = require('../states/modal');
var ContactForm = require('./contact-form');

var ContactFormTrigger = React.createClass({
  hideModal: function (e) {
    e.preventDefault();
    ModalState.hide();
  },
  showModal: function (e) {
    e.preventDefault();
    ModalState.show((
      <div className="modal" key="contactForm">
        <div className="modal-content">
          <div className="modal-header">
            <button className="close" onClick={this.hideModal}>Close</button>
          </div>
          <p>
            Interested in working together? <br />
            Drop me a line. I promise not to spam you.
          </p>
          <ContactForm />
        </div>
      </div>
    ));
  },
  render: function () {
    return (
      <a href="#" className="email" onClick={this.showModal}>Email</a>
    );
  }
});

module.exports = ContactFormTrigger;
