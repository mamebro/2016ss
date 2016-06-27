import React from "react";
import request from 'superagent'
import EntryList from "./EntryList";

export default class MamebroApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    };
  }

  loadTaskFromServer() {
    request
    .get(this.props.url + '/api/entries.json')
    .accept('application/json')
    .end((err, res) => {
      if (err || !res.ok) {
        console.error(this.props.url + '/api/entries.json', status, err.toString());
      } else {
        this.setState({data: res.body});
      }
    });
  }

  componentDidMount() {
    this.loadTaskFromServer();
    setInterval(this.loadTaskFromServer.bind(this), this.props.pollInterval);
  }

  render() {
    return (
      <div className="mamebro-app">
        <EntryList data={this.state.data} />
      </div>
    );
  }
}
