import React from 'react';
import Reqwest from 'reqwest';
import BlabsView from '../blabs/View';

export default class App extends React.Component {
  displayName = 'App';
  constructor(props) {
    super(props);
  };
  static defaultProps = { origin: process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : '' };
  static propTypes = { origin: React.PropTypes.string };

  readFromAPI(url, successFn) {
    Reqwest({
      url: url,
      type: 'json',
      method: 'get',
      contentType: 'application/json',
      success: successFn,
      error: function(error) {
        console.error(url, error.response);
      },
    });
  }
  render() {
    return (
      <div className="content">
        <BlabsView origin={this.props.origin} readFromAPI={this.readFromAPI} />
      </div>
    );
  }
}
