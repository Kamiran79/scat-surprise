import React from 'react';
import birbsData from '../../../helpers/data/birbsData';

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

export default SingleBirb;
