var React = require('react');

var WorkItem = require('./work-item');
var WorkLightbox = require('./work-lightbox');

var WorkItemList = React.createClass({
  render: function () {
    var workItem = function (data, index) {
      return (
        <WorkItem key={index} data={data}/>
      );
    }.bind(this);

    return (
      <div>
        {this.props.data.map(workItem)}
        <WorkLightbox />
      </div>
    );
  }
});

module.exports = WorkItemList;
