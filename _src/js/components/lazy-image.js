var React = require('react');
var ReactDOM = require('react-dom');
var classNames = require('classnames');

var LazyImage = React.createClass({
  getInitialState: function () {
    return {
      loaded: false
    };
  },
  onImageLoad: function () {
    if (this.isMounted()) {
      this.setState({loaded: true});
    }
  },
  componentDidMount: function () {
    var imgTag = ReactDOM.findDOMNode(this.refs.img);
    var imgSrc = imgTag.getAttribute('src');

    var loader = new window.Image();
    loader.onload = this.onImageLoad;
    loader.src = imgSrc;
  },
  render: function () {
    var imgClasses = classNames({
      'lazy-image': true,
      'loaded': this.state.loaded
    });
    return (
      <div className={imgClasses}>
        <div className="loading-message">Loading image...</div>
        <img ref="img" {...this.props}/>
      </div>
    );
  }
});

module.exports = LazyImage;
