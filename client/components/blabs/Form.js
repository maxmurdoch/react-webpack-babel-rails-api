import React, {Component, PropTypes} from 'react';

export default class BlabsForm extends Component {
  static propTypes = {
    signedIn: PropTypes.boolean,
    writeBlabToAPI: PropTypes.func,
  };
  handleSubmit(e) {
    e.preventDefault();
    const content = this.refs.content.getDOMNode().value.trim();
    if (!content) { return; }
    if (this.props.signedIn) {
      this.props.writeBlabToAPI(JSON.stringify({ blab: { content } }));
      this.refs.content.getDOMNode().value = '';
      this.refs.content.getDOMNode().blur();
    } else {
      alert('Please sign in to blab!');
    }
  }
  render() {
    return (
      <form className="blabs-form pure-form" onSubmit={::this.handleSubmit}>
        <input type="text" placeholder="start blabbing..." ref="content" />
        <button type="submit" className="pure-button pure-button-primary">Blab</button>
      </form>
    );
  }
}
