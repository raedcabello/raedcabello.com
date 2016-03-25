var React = require('react');

var WorkThumbnail = require('./work-thumbnail');

var WorkItem = React.createClass({
  render: function () {
    return (
      <div className="work-media">
        <div className="description">
          <h4>{this.props.data.title}</h4>
          <p>{this.props.data.description}</p>
        </div>
        <div className="thumbnail">
          <WorkThumbnail data={this.props.data}/>
        </div>
      </div>
    );
  }
});

module.exports = WorkItem;
