import React, { PropTypes, Component } from 'react';
import reqwest from 'reqwest';
import Menu from './Menu';
import Uri from 'jsuri';
import {RouteHandler} from 'react-router';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { showMenu: false, signedIn: false, currentUser: { handle: '' }};
  };
  static defaultProps = { origin: process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : '' };
  static propTypes = { origin: PropTypes.string };

  componentWillMount() {
    const jwt = new Uri(window.location.search).getQueryParamValue('jwt');
    if (jwt) { sessionStorage.setItem('jwt', jwt); }
  }

  componentDidMount() {
    if (sessionStorage.getItem('jwt')) { this.currentUserFromAPI(); }
  }

  currentUserFromAPI() {
    this.readFromAPI(`${this.props.origin}/current_user`,
                     (user) => this.setState({signedIn: true, currentUser: user}));
  }

  handleMenuClick() {
    this.setState({ showMenu: !this.state.showMenu });
  }

  readFromAPI(url, successFn) {
    reqwest({
      url,
      type: 'json',
      method: 'get',
      contentType: 'application/json',
      headers: { Authorization: sessionStorage.getItem('jwt') },
      success: successFn,
      error: function(error) {
        console.error(url, error.response);
        window.location.pathname = '/';
      },
    });
  }

  writeToAPI({ method = 'POST', url, data, successFn }) {
    reqwest({
      url,
      data,
      method,
      type: 'json',
      contentType: 'application/json',
      headers: { Authorization: sessionStorage.getItem('jwt') },
      success: successFn,
      error: (error) => {
        console.error(url, error.response);
        window.location.pathname = '/';
      },
    });
  }

  render() {
    const menu = this.state.showMenu ? 'show-menu' : 'hide-menu';

    return (
      <div id="app" className={menu}>
        <Menu origin={this.props.origin} sendMenuClick={::this.handleMenuClick} signedIn={this.state.signedIn} />
        <div id="content">
          <RouteHandler origin={this.props.origin} readFromAPI={this.readFromAPI} signedIn={this.state.signedIn} />
        </div>
      </div>
    );
  }
}
