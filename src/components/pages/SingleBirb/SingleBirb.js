import React, { useState, useEffect } from 'react';
import moment from 'moment';

import birbsData from '../../../helpers/data/birbsData';

/*
class SingleBirb extends React.Component {
  state = {
    birb: {},
  }

  componentDidMount() {
    const { birbId } = this.props.match.params;

    birbsData.getSingleBirbById(birbId)
      .then((res) => this.setState({ birb: res.data }))
      .catch((err) => console.error('get single birb broke ', err));
  }

  render() {
    const { birb } = this.state;
    return (
      <div className="SingleBirb">
        <h1>SingleBirb</h1>
        <h4>{birb.type}</h4>
      </div>
    );
  }
}
*/
const SingleBirb = (props) => {
  const [birb, setBirb] = useState({});

  useEffect(() => {
    const { birbId } = props.match.params;

    birbsData.getSingleBirbById(birbId)
      .then((res) => setBirb(res.data))
      .catch((err) => console.error('get single birb failed ', err));
  }, [props.match.params]);

  return (
    <div className="SingleBirb mt-3 p-3 bg-success rounded">
      <h1>Welcome to the {birb.type} page</h1>
      <p>Birb seen at: {birb.location}</p>
      <p>size: {birb.size}</p>
      <p>Colors: {birb.color}, {birb.altColor}</p>
      <p>Last seen on: {moment(birb.seenAt).format('MMMY Do YYYY, h:mma')}</p>
      <p>Note: {birb.notes}</p>
      <p>Was Sleeping: {birb.wasSleeping ? 'Yes' : 'No'}</p>
    </div>
  );
};

export default SingleBirb;
