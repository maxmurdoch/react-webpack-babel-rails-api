import React from 'react';
import List from './List';

export default class View extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }
  static propTypes = {
      readFromAPI: React.PropTypes.func,
      origin: React.PropTypes.string,
  };

  componentDidMount() {
    this.readBlabsFromAPI();
  }
  readBlabsFromAPI() {
    this.props.readFromAPI(`${this.props.origin}/blabs`, function(blabs) {
      this.setState({data: blabs});
    }.bind(this));
  }
  render() {
    return (
      <div className="blabs-view">
        <List data={this.state.data} />
      </div>
    );
  }
}
