import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';

export default class Menu extends Component {
  static propTypes = { sendMenuClick: PropTypes.func,
                       signedIn: PropTypes.bool,
                       origin: PropTypes.string, };

  handleSignOutLink() {
    window.sessionStorage.setItem('jwt', '');
    window.location.replace('/');
  }

  render() {
    let signingLink = <li><a href={`${this.props.origin}/request_token`}>Sign in</a></li>;
    if (this.props.signedIn) {
      signingLink = <li><span onClick={this.handleSignOutLink}>Sign out</span></li>;
    }
    return (
        <div id="menu">
          <span id="menu-link" onClick={this.props.sendMenuClick}><span></span></span>
          <div id="menu-list">
            <div className="pure-menu pure-menu-open">
              <span className="pure-menu-heading">Blabber</span>
              <ul>
                <li><Link to="blabs">Blabs</Link></li>
                <li><Link to="about">About</Link></li>
                { signingLink }
              </ul>
            </div>
          </div>
        </div>
      );
  }
}
