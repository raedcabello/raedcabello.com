var React = require('react');
var ReactDOM = require('react-dom');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

var LightboxState = require('../states/lightbox');

var WorkLightbox = React.createClass({
  getInitialState: function () {
    return {
      contents: <div/>
    };
  },
  render: function () {
    return null;
  },
  componentDidMount: function () {
    var lightboxContainer = document.createElement('div');
    lightboxContainer.className = 'work-lightbox';
    document.body.appendChild(lightboxContainer);
    this.lightboxContainer = lightboxContainer;
    this.componentDidUpdate();

    LightboxState.subscribe('show', function (event) {
      this.setState({
        contents: event.contents
      });
    }.bind(this));

    LightboxState.subscribe('hide', function (event) {
      this.setState({
        contents: <div />
      });
    }.bind(this));
  },
  componentDidUpdate: function () {
    ReactDOM.render(
      (
        <ReactCSSTransitionGroup transitionName="lightbox" transitionEnterTimeout={200} transitionLeaveTimeout={200}>
        {this.state.contents}
        </ReactCSSTransitionGroup>
      ), this.lightboxContainer
    );
  }
});

module.exports = WorkLightbox;
