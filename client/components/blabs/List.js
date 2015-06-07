import React from 'react';
import Blab from './Blab';

export default class List extends React.Component {
  displayName = 'List';
  constructor(props) {
    super(props);
  }
  static propTypes() {
    return {
      content: React.PropTypes.string,
      data: React.PropTypes.array,
    };
  }
  render() {
    console.log(this.props.data);
    var blabs = this.props.data.map(function(blab) {
      return (
        <Blab key={blab.id} content={blab.content} />
      );
    });

    return (
      <ul className="blabs-list">
        {blabs}
      </ul>
    );
  }
}