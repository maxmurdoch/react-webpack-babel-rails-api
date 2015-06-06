var React = require('react');
var BlabsList = require('./List.jsx');

module.exports = React.createClass({
  getInitialState: function() {
    return {data: []}
  },
  componentDidMount: function() {
    this.setState(
      { data:
        [
          {id: '1', content: 'another fake blab'},
          {id: '2', content: 'and another'}
        ]
      }
    );
  },
  render: function() {
    return (
      <div className="blabs-view">
        <BlabsList data={this.state.data} />
      </div>
    );
  }
});
