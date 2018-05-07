import React, {Component} from 'react';
import OpeningTimeList from '../components/OpeningTimeList.js';

class OpeningTimeBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        { id: 1, title: "Big Wednesday", url: "https://www.imdb.com/title/tt0077235/?ref_=nv_sr_1"},
        { id: 2, title: "Lords of Dog Town", url: "https://www.imdb.com/title/tt0355702/?ref_=nv_sr_1"},
        { id: 3, title: "Blue Juice", url: "https://www.imdb.com/title/tt0112537/?ref_=fn_al_tt_1"}
      ]
    };
  } // end constructor


  render() {
    return (
      <div className="opening-time-box">
        This is a OpeningTimeBox
        <OpeningTimeList data={ this.state.data }>

        </OpeningTimeList>
      </div>
    ); // end return
  } // end render


}  // end class OpeningTimeBox


export default OpeningTimeBox
