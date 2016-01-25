var React = require('react');

var WorkItem = require('./work-item');

var WorkItemList = React.createClass({
  getInitialState: function () {
    return null;
  },
  render: function () {
    var workItem = function (data) {
      return (
        <WorkItem key={data.title} data={data} />
      );
    };

    return (
      <div>
        {this.props.data.map(workItem)}
      </div>
    );
  }
});

module.exports = WorkItemList;
