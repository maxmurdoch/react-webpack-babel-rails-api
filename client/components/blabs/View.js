import React, {PropTypes} from 'react';
import List from './List';
import BlabsForm from './Form';

export default class View extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }
  static propTypes = {
    readFromAPI: PropTypes.func,
    writeToAPI: PropTypes.func,
    signedIn: PropTypes.boolean,
    origin: PropTypes.string,
  };

  componentDidMount() {
    this.readBlabsFromAPI();
  }
  readBlabsFromAPI() {
    this.props.readFromAPI(`${this.props.origin}/blabs`, (blabs) => {
      this.setState({data: blabs});
    });
  }
  writeBlabToAPI(data) {
    this.props.writeToAPI({url: `${this.props.origin}/blabs`, data, successFn: (blab) => {
      let blabs = this.state.data;
      blabs.unshift(blab);
      this.setState({data: blabs});
    },});
  }
  render() {
    return (
      <div className="blabs-view">
        <BlabsForm writeBlabToAPI={::this.writeBlabToAPI} signedIn={this.props.signedIn} />
        <List data={this.state.data} />
      </div>
    );
  }
}
