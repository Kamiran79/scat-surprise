import React from 'react';
import DatePicker from 'react-datepicker';
import _ from 'underscore';
// import moment from 'moment';

import authData from '../../../helpers/data/authData';
import birbsData from '../../../helpers/data/birbsData';

class EditBirb extends React.Component {
  state = {
    type: '',
    color: '',
    size: '',
    seenAt: new Date(),
    altColor: '',
    wasSleeping: true,
    location: '',
    notes: '',
  };

  // do the same thing for everything else!
  changeTypeEvent = (e) => {
    e.preventDefault();
    this.setState({ type: e.target.value });
  };

  changeColorEvent = (e) => {
    e.preventDefault();
    this.setState({ color: e.target.value });
  }

  changeSizeEvent = (e) => {
    e.preventDefault();
    this.setState({ size: e.target.value });
  }

  changeAltColor = (e) => {
    e.preventDefault();
    this.setState({ altColor: e.target.value });
  }

  changeLocation = (e) => {
    e.preventDefault();
    this.setState({ location: e.target.value });
  }

  changeNotesEvent = (e) => {
    e.preventDefault();
    this.setState({ notes: e.target.value });
  }

  changeWasSleepingEvent = (e) => {
    this.setState({ wasSleeping: e.target.checked });
  }

  seenAtEvent = (seenAt) => {
    this.setState({ seenAt });
  };

  saveBirb = (e) => {
    e.preventDefault();
    // get birb items off state
    // create new birb object
    // pass that to a data function
    // do something on save?
    const { birbId } = this.props.match.params;
    // console.warn(birbId);
    const keysIWant = [
      'type',
      'color',
      'size',
      'seenAt',
      'altColor',
      'wasSleeping',
      'location',
      'notes',
    ];

    const editBirb = _.pick(this.state, keysIWant);
    editBirb.uid = authData.getUid();

    birbsData
      .updateBirb(birbId, editBirb)
      .then((res) => {
        this.props.history.push(`/birbs/${birbId}`);
        // console.warn('update finished ', res);
      })
      .catch((err) => console.error('edit birb broke', err));
  };

  componentDidMount() {
    // const { boardThatIAmEditing } = this.props;
    const { birbId } = this.props.match.params;
    birbsData.getSingleBirbById(birbId)
      .then(({ data }) => {
        // console.warn(data.type);
        this.setState({
          type: data.type,
          color: data.color,
          size: data.size,
          altColor: data.altColor,
          wasSleeping: data.wasSleeping,
          location: data.location,
          notes: data.notes,
          seenAt: new Date(data.seenAt),
        });
      })
      .catch((err) => console.error('get birb by Id faild ', err));
  }

  getBirbById = () => {
    const { birbId } = this.props.match.params;
    birbsData.getSingleBirbById(birbId)
      .then()
      .catch((err) => console.error('get birb by Id faild ', err));
  };

  render() {
    const { birbId } = this.props.match.params;

    const {
      type,
      color,
      size,
      seenAt,
      altColor,
      wasSleeping,
      location,
      notes,
    } = this.state;

    return (
      <div className="EditBirb">
        <h1>You are editing birb: {birbId}</h1>
        <div className="NewBirb col-12">
        <h1>EditBirb</h1>
        <form className="col-6 offset-3">
          <div className="form-group">
            <label htmlFor="birbType">Type</label>
            <input
              type="text"
              className="form-control"
              id="birbType"
              placeholder="Enter Birb Type"
              value={type}
              onChange={this.changeTypeEvent}
            />
          </div>
          <div className="form-group">
            <label htmlFor="birbColor">Color</label>
            <input
              type="text"
              className="form-control"
              id="birbColor"
              placeholder="Enter Birb Color"
              value={color}
              onChange={this.changeColorEvent}
            />
          </div>
          <div className="form-group">
            <label htmlFor="birbSize">Size</label>
            <input
              type="text"
              className="form-control"
              id="birbSize"
              placeholder="Enter Birb Size"
              value={size}
              onChange={this.changeSizeEvent}
            />
          </div>
          <div className="form-group">
            <label htmlFor="birbAltColor">Alt Color</label>
            <input
              type="text"
              className="form-control"
              id="birbAltColor"
              placeholder="Enter Birb Alt Color"
              value={altColor}
              onChange={this.changeAltColor}
            />
          </div>
          <div className="form-group">
            <label htmlFor="birbLocation">Location</label>
            <input
              type="text"
              className="form-control"
              id="birbLocation"
              placeholder="Enter Birb Location"
              value={location}
              onChange={this.changeLocation}
            />
          </div>
          <div className="form-group">
            <label htmlFor="birbNotes">Notes</label>
            <input
              type="textarea"
              className="form-control"
              id="birbNotes"
              placeholder="Enter Birb Notes"
              value={notes}
              onChange={this.changeNotesEvent}
            />
          </div>
          <div className="form-group">
            <label htmlFor="birbWasSleeping">Was Sleeping</label>
            <input
              type="checkbox"
              className="form-control"
              id="birbWasSleeping"
              checked={wasSleeping}
              onChange={this.changeWasSleepingEvent}
            />
          </div>
          <div className="form-group">
            <label htmlFor="birbSeenAt" className="mr-2">
              Seen At:{' '}
            </label>
            <DatePicker
              selected={seenAt}
              onChange={this.seenAtEvent}
              showTimeSelect
            />
          </div>
          <button className="btn btn-warning" onClick={this.saveBirb}>
            Save Birb
          </button>
        </form>
      </div>
      </div>
    );
  }
}

export default EditBirb;
