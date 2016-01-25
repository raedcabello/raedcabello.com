var React = require('react');
var all = require('array-all');
var classNames = require('classnames');

var EmailInput = require('./email-input');
var MessageInput = require('./message-input');
var SubmitContactFormAction = require('../../actions/submit-contact-form');

var ContactForm = React.createClass({
  getInitialState: function () {
    return {
      accepted: false,
      rejected: false,
      submitted: false,
      submitting: false,
      valid: false
    };
  },
  handleSubmit: function (e) {
    e.preventDefault();
    var nextState = {
      submitted: true
    };

    if(!all([
      this.refs.email.state.valid,
      this.refs.message.state.valid
    ])) {
      this.setState(nextState);
      return false;
    }

    nextState.submitting = true;
    // Update the state before we go async for who knows how long
    this.setState(nextState);

    SubmitContactFormAction({
      email: this.refs.email.state.value,
      message: this.refs.message.state.value
    })
    .then(function () {
      nextState.accepted = true;
      nextState.rejected = false;
      nextState.submitting = false;
      this.setState(nextState);
    }.bind(this))
    .catch(function () {
      nextState.accepted = false;
      nextState.rejected = true;
      nextState.submitting = false;
      this.setState(nextState);
    }.bind(this));
  },
  render: function () {
    var formClass = classNames({
      'contact-form': true,
      hide: this.state.accepted
    });

    var acceptedClass = classNames({
      'form-accepted-message': true,
      hide: !this.state.accepted
    });

    var rejectedClass = classNames({
      'form-rejected-message': true,
      hide: !this.state.rejected
    });

    return (
      <div>
        <form className={formClass} onSubmit={this.handleSubmit} noValidate autoCorrect="off" autoCapitalize="off">
          <EmailInput ref="email" formSubmitted={this.state.submitted} />
          <MessageInput ref="message" formSubmitted={this.state.submitted} />
          <div className="form-control">
            <button className="btn green" type="Submit">{(this.state.submitting) ? 'Sending...' : 'Send Message'}</button>
          </div>
        </form>
        <div className={rejectedClass}>Aw man, something went wrong while sending your message. This is probably my fault. You can try to send it again, or just reach out to me on <a href="https://twitter.com/raedcabello" target="_blank">Twitter</a> instead.</div>
        <div className={acceptedClass}>{'Thanks for your message. I’ll get back to you soon!'}</div>
      </div>
    );
  }
});

module.exports = ContactForm;
