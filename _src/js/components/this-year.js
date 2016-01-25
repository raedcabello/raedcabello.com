var React = require('react');

var ThisYear = React.createClass({
  getInitialState: function () {
    var year = new Date();
    year = year.getFullYear();

    return {
      year: year
    };
  },
  render: function () {
    return <span>{this.state.year}</span>;
  }
});

module.exports = ThisYear;
