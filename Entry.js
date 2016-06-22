import React from "react";

export default class Entry extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="entry" id={this.props.id}>
        <h1 className="entry-title">
          {this.props.title}
        </h1>
        <div className="entry-content">
          {this.props.content}
        </div>
      </section>
    );
  }
}
