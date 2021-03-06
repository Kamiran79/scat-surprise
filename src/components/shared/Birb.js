import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import moment from 'moment';

import birbShape from '../../helpers/propz/birbShape';

import './Birb.scss';

class Birb extends React.Component {
  static propTypes = {
    birb: birbShape.birbShape,
    deleteBirb: PropTypes.func.isRequired,
  }

  deletebirbEvent = (e) => {
    e.preventDefault();
    const { deleteBirb, birb } = this.props;
    deleteBirb(birb.id);
  };

  render() {
    const { birb } = this.props;

    const filterDate = moment(birb.seenAt).format('MMMM Do YYYY, hh:mm:ss a');
    // if you want only month.day.year
    // moment(birb.seenAt).format('MM-DD-YYYY')

    const singleBirbLink = `/birbs/${birb.id}`;
    const editLink = `/edit/${birb.id}`;
    return (
      <div className="col-4 mb-3">
        <div className="card text-center boarder-0" style={{ background: `${birb.color}` }}>
          <div className="card-header">
            <h5>{birb.type}</h5>
            <Link to={editLink} className="btn btn-success mr-1 float-left"><i className="fas fa-pencil-alt"></i></Link>
            <button className="btn btn-danger float-right" onClick={this.deletebirbEvent}><i className="fas fa-trash-alt "></i></button>
          </div>
          <div className="card-body">
            <p className="card-title">{birb.color}</p>
            <p className="card-text">{birb.size}</p>
            <p className="card-text">{filterDate}</p>
            <p className="card-text">{birb.notes}</p>
            <Link to={singleBirbLink} className="btn btn-warning mr-1"><i class="far fa-eye"></i></Link>

          </div>
          <div className="card-footer text-muted">
            Updated: {moment(birb.seenAt).fromNow()}
          </div>
        </div>
      </div>
    );
  }
}

export default Birb;

/*
import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

import birbShape from '../../../helpers/propz/birbShape';

const BirbCard = (props) => {
  const { birb } = props;

  const singleBirbLink = `/birbs/${birb.id}`;
  const editLink = `/edit/${birb.id}`;

  return (
    <div className="col-4 mb-3">
      <div className="Bird card border-0">
        <div className="card-body">
          <h5 className="card-title">{birb.type}</h5>
          <p className="card-text">{birb.notes}</p>
          <Link to={singleBirbLink} className="btn btn-warning mr-2"><i className="fas fa-binoculars"></i></Link>
          <Link to={editLink} className="btn btn-success"><i className="fas fa-pencil-alt"></i></Link>
        </div>
        <div className="card-footer text-muted">
          Updated: {moment(birb.seenAt).fromNow()}
        </div>
      </div>
    </div>
  );
};

BirbCard.propTypes = {
  birb: birbShape.birbShape,
};

export default BirbCard;
*/
