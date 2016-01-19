var React = require('react');
var classNames = require('classnames');

var ERROR_MESSAGE = 'Are you sure you don’t have a message for me?';

module.exports = React.createClass({
  onChange: function (e) {
    var newState = {
      value: e.target.value,
      valid: false,
      validationMessage: ERROR_MESSAGE
    };

    if(newState.value !== '' && newState.value.match(/[\S]+/)) {
      newState.valid = true;
      newState.validationMessage = '';
    }

    this.setState(newState);
  },
  getInitialState: function () {
    return {
      value: '',
      valid: false,
      validationMessage: ERROR_MESSAGE
    };
  },
  render: function () {
    var controlClass = classNames({
      'form-control': true,
      'error': (this.props.formSubmitted && !this.state.valid)
    });

    return (
      <div className={controlClass}>
        <textarea value={this.state.value} onChange={this.onChange} rows="9" placeholder="Enter your message..."></textarea>
        <div className="form-control-validation">{this.state.validationMessage}</div>
      </div>
    );
  }
});
