var React = require('react');
var BlabsView = require('../blabs/View.jsx');

module.exports = React.createClass({
  render: function() {
    return (
      <div className="content">
        <BlabsView />
      </div>
    );
  }
});
