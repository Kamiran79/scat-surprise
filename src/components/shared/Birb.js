import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import moment from 'moment';

import birbShape from '../../helpers/propz/birbShape';

class Birb extends React.Component {
  static propTypes = {
    birb: birbShape.birbShape,
  }

  render() {
    const { birb } = this.props;

    const filterDate = moment(birb.seenAt).format('MMMM Do YYYY, hh:mm:ss a');
    // if you want only month.day.year
    // moment(birb.seenAt).format('MM-DD-YYYY')

    const singleBirbLink = `/birbs/${birb.id}`;
    return (
      <div className="card text-center" style={{ background: `"${birb.color}"` }}>
        <div className="card-header"><h5>{birb.type}</h5></div>
        <div className="card-body">
          <p className="card-title">{birb.color}</p>
          <p className="card-text">{birb.size}</p>
          <p className="card-text">{filterDate}</p>
          <Link to={singleBirbLink} className="btn btn-warning mr-1"><i class="far fa-eye"></i></Link>
          <button className="btn btn-danger" onClick={this.deletebirbEvent}>Delete birb</button>
        </div>
    <div className="card-footer text-muted">{birb.note}</div>
      </div>
    );
  }
}

export default Birb;
