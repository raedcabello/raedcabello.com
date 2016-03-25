var React = require('react');
var ReactDOM = require('react-dom');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

var ModalState = require('../states/modal');

var Modal = React.createClass({
  getInitialState: function () {
    return {
      contents: <div/>
    };
  },
  render: function () {
    return null;
  },
  componentDidMount: function () {
    var modalContainer = document.createElement('div');
    // modalContainer.className = 'modal';
    document.body.appendChild(modalContainer);
    this.modalContainer = modalContainer;
    this.componentDidUpdate();

    ModalState.subscribe('show', function (event) {
      this.setState({
        contents: event.contents
      });
    }.bind(this));

    ModalState.subscribe('hide', function (event) {
      this.setState({
        contents: <div />
      });
    }.bind(this));
  },
  componentDidUpdate: function () {
    ReactDOM.render(
      (
        <ReactCSSTransitionGroup transitionName="modal" transitionEnterTimeout={400} transitionLeaveTimeout={400}>
        {this.state.contents}
        </ReactCSSTransitionGroup>
      ), this.modalContainer
    );
  }
});

module.exports = Modal;
