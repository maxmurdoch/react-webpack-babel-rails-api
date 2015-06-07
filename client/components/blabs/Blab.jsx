import React from 'react';
console.log(React);

export default class Blab extends React.Component {
  constructor(props) {
    super(props);
  }

  static propTypes() { return { content: React.PropTypes.array }; }

  render() {
    return (
      <li className="blab">
        <span className="blab-text">{this.props.content}</span>
      </li>
    );
  }
}
