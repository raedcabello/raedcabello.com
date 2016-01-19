var React = require('react');
var classNames = require('classnames');

var ERROR_MESSAGE = 'Hey, I need a good email address if you want to hear back from me!';

module.exports = React.createClass({
  onChange: function (e) {
    var newState = {
      value: e.target.value,
      valid: false,
      validationMessage: ERROR_MESSAGE
    };

    if(newState.value !== '' && newState.value.match(/^[\S]+@[\S]+\.[\S]+$/)) {
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
        <input value={this.state.value} onChange={this.onChange} type="email" placeholder="Enter your email address..." />
        <div className="form-control-validation">{this.state.validationMessage}</div>
      </div>
    );
  }
});
