import React from 'react';
import reqwest from 'reqwest';
import Menu from './Menu';
import {RouteHandler} from 'react-router';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showMenu: false };
  };
  static defaultProps = { origin: process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : '' };
  static propTypes = { origin: React.PropTypes.string };

  handleMenuClick() {
    this.setState({ showMenu: !this.state.showMenu });
  }

  readFromAPI(url, successFn) {
    reqwest({
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
    let menu = this.state.showMenu ? 'show-menu' : 'hide-menu';
    return (
      <div id="app" className={menu}>
        <Menu sendMenuClick={::this.handleMenuClick} />
        <div id="content">
          <RouteHandler origin={this.props.origin} readFromAPI={this.readFromAPI} />
        </div>
      </div>
    );
  }
}
