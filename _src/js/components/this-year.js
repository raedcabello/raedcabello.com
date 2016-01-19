var React = require('react');

module.exports = React.createClass({
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
