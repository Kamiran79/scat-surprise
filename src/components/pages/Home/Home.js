import React from 'react';
import { Link } from 'react-router-dom';

import Birb from '../Birb/Birb';

import birbsData from '../../../helpers/data/birbsData';
import authData from '../../../helpers/data/authData';

class Home extends React.Component {
  state = {
    birbs: [],
  }

  getAllBirbs = () => {
    birbsData.getbirbsByUid(authData.getUid())
      .then((birbs) => {
        this.setState({ birbs });
      })
      .catch((err) => console.error('get birbs broke!!', err));
  };

  componentDidMount() {
    this.getAllBirbs();
  }

  editBirbEvent = (e) => {
    e.preventDefault();
    const birbId = 'birb10000';
    this.props.history.push(`/edit/${birbId}`);
  }

  render() {
    const { birbs } = this.state;

    const birbsCard = birbs.map((birb) => <Birb key={birb.id} birb={birb} />);
    return (
      <div className="Home">
        <h1>Home</h1>
        <button className="btn btn-dark" onClick={this.editBirbEvent}>Edit A Birb</button>
        <Link to='/new'>New Birb</Link>
        <h2> Hey here is a link to a link to a <Link to='/birbs/birb12344556'>Specific Birb</Link></h2>
        <div className="card-columns">
          {birbsCard}
        </div>
      </div>
    );
  }
}

export default Home;
