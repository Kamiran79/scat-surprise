import React from 'react';
// import PropTypes from 'prop-types';

import birbShape from '../../../helpers/propz/birbShape';

class Birb extends React.Component {
  static propTypes = {
    birb: birbShape.birbShape,
  }

  render() {
    const { birb } = this.props;
    return (
      <div className="card text-center">
        <div className="card-header"><h5>{birb.type}</h5></div>
        <div className="card-body">
          <p className="card-title">{birb.color}</p>
          <p className="card-text">{birb.size}</p>
          <button className="btn btn-secondary mr-1" onClick={this.singlebirbEvent}>View birb Details</button>
          <button className="btn btn-danger" onClick={this.deletebirbEvent}>Delete birb</button>
        </div>
    <div className="card-footer text-muted">{birb.note}</div>
      </div>
    );
  }
}

export default Birb;
