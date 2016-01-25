var React = require('react');

var WorkLightbox = require('./work-lightbox');
var LazyImage = require('./lazy-image');
var LightboxState = require('../states/lightbox');

var WorkThumbnail = React.createClass({
  toggleLightbox: function (e) {
    e.preventDefault();
    LightboxState.show(this.getLightboxContent(this.props.data));
  },
  getLightboxContent: function (data) {
    return (
      <div className="lightbox" key="flightbox">
        <div className="lightbox-header">
          <h4 className="title">{data.title}</h4>
          <button className="close" onClick={LightboxState.hide}>Close</button>
        </div>
        <div className="lightbox-content">
          <LazyImage src={data.image_url}/>
        </div>
      </div>
    );
  },
  render: function () {
    return (
      <a onClick={this.toggleLightbox} href="#">
        <img src={this.props.data.thumbnail_url} alt={this.props.data.title} />
      </a>
    );
  }
});

module.exports = WorkThumbnail;
