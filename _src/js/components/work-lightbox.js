var React = require('react');
var ReactDOM = require('react-dom');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

var WorkLightbox = React.createClass({
  render: function () {
    return null;
  },
  close: function () {
    try {
      this.props.onClose.call();
    } catch (e) {
      console.log(e);
    }
  },
  handleKeyUp: function (event) {
    if(event.keyCode === 27) {
      this.close();
    }
  },
  componentDidMount: function () {
    var lightboxContainer = document.createElement('div');
    lightboxContainer.className = 'work-lightbox';
    document.body.appendChild(lightboxContainer);

    this.lightboxContainer = lightboxContainer;
    this.componentDidUpdate();
  },
  componentDidUpdate: function () {
    if(!this.props.visible) {
      document.body.classList.remove('has-lightbox');
      document.removeEventListener('keyup', this.handleKeyUp);
      ReactDOM.render(<div />, this.lightboxContainer);
      return;
    }

    document.body.classList.add('has-lightbox');
    document.addEventListener('keyup', this.handleKeyUp);

    ReactDOM.render(
      (
        <ReactCSSTransitionGroup transitionName="lightbox" transitionAppear={true} transitionAppearTimeout={200} transitionEnterTimeout={200} transitionLeaveTimeout={200}>
        <div className="lightbox" key="lightbox">
          <div className="lightbox-header">
            <h4 className="title">{this.props.data.title}</h4>
            <button className="close" onClick={this.close}>Close</button>
          </div>
          <div className="lightbox-content">
            <img src={this.props.data.image_url} alt={this.props.data.title} />
          </div>
        </div>
        </ReactCSSTransitionGroup>
      ), this.lightboxContainer
    );
  }
});

module.exports = WorkLightbox;
