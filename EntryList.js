import React from "react";
import Entry from "./Entry";

export default class EntryList extends React.Component {
  render() {
    var entries = this.props.data.map((entry) => {
      return (
        <Entry id={entry.id} title={entry.title} content={entry.content}>
        </Entry>
      );
    });

    return (
      <article classsName='entries'>
        {entries}
      </article>
    );
  }
}
