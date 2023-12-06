import React from 'react';
import { nanoid } from 'nanoid';

export class ContactListItem extends React.Component {
  render() {
    return (
      <li key={nanoid()} name={this.state.name}>
        {this.state.name}
      </li>
    );
  }
}
