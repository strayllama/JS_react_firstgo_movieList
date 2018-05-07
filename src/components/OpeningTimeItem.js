import React, { Component } from 'react';

class OpeningTimeItem extends Component {
  render() {
    return (
      <li className="opening-time-item">
        <h2>{this.props.title}</h2><a href={this.props.url}>IMDB Page Link</a>
      </li>
    ); // end return
  } // end render()
} // end class OpeningTimeItem

export default OpeningTimeItem
