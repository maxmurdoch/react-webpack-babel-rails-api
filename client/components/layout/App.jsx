import React from 'react';
import Reqwest from 'reqwest';
import BlabsView from '../blabs/View.jsx';

export default class BlabApp extends React.Component {
  constructor(props) {
    super(props);
  };
  static defaultProps() { return { origin: process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : '' }; };
  static propTypes() { return { origin: React.PropTypes.string }; };
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
