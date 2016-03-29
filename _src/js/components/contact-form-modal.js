var React = require('react');

var ContactForm = require('./contact-form');

var ContactFormModal = React.createClass({
  render: function () {
    return (
      <div className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <button className="close" onClick={this.props.controller.hideModal}>Close</button>
          </div>
          <p>
            Interested in working together? <br />
            Drop me a line. I promise not to spam you.
          </p>
          <ContactForm />
        </div>
      </div>
    );
  }
});

module.exports = ContactFormModal;
