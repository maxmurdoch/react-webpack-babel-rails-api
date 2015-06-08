import React from 'react';
import Blab from './Blab';

export default class List extends React.Component {
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
