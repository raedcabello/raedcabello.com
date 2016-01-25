var React = require('react');

var WorkLightbox = require('./work-lightbox');

var WorkThumbnail = React.createClass({
  getInitialState: function () {
    return {
      isLightboxVisible: false
    };
  },
  toggleLightbox: function (e) {
    e.preventDefault();
    this.setState({isLightboxVisible: !this.state.isLightboxVisible});
  },
  closeLightbox: function () {
    this.setState({isLightboxVisible: false});
  },
  render: function () {
    return (
      <a onClick={this.toggleLightbox} href="#">
        <img src={this.props.data.thumbnail_url} alt={this.props.data.title} />
        <WorkLightbox ref="lightbox" data={this.props.data} visible={this.state.isLightboxVisible} onClose={this.closeLightbox} />
      </a>
    );
  }
});

module.exports = WorkThumbnail;
