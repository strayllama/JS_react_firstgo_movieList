import React, {Component} from 'react';
import OpeningTimeItem from './OpeningTimeItem.js';

class OpeningTimeList extends Component {
  render() {
    const openingTimeNodes = this.props.data.map((movie) => {
      return (
        <OpeningTimeItem title={movie.title} url={movie.url} key={movie.id}>
        </OpeningTimeItem>
      );

    }); // end .map

    return(
      <div className="opening-time-list">
        {openingTimeNodes}
      </div>
    ); // end return

  } // end render()
} // end class OpeningTimeList


export default OpeningTimeList
