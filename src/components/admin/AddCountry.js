import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addCountry } from '../../actions/countries';
import PropTypes from 'prop-types';

const AddCountry = ({ addCountry, history }) => {
  const [formData, setFormData] = useState({
    name: '',
    emoji: '',
    flag: '',
    image: '',
    participations: '',
    firstParticipation: '',
    victories: '',
    hosts: '',
    intro: '',
    bio: '',
    youtube: ''
  });

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    addCountry(formData, history);
  };

  const {
    name,
    emoji,
    flag,
    image,
    participations,
    firstParticipation,
    victories,
    hosts,
    intro,
    bio,
    youtube
  } = formData;

  return (
    <div className="admin-form background">
      <div className="banner"></div>
      <div className="content">
        <div className="overlay">
          <div className="container">
            <div className="container-inner">
              <h1 className="large">Add a New Country</h1>
              <p>* = required field</p>
              <form className="form" onSubmit={e => handleSubmit(e)}>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="* Country Name"
                    name="name"
                    value={name}
                    onChange={e => handleChange(e)}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="* Emoji"
                    name="emoji"
                    value={emoji}
                    onChange={e => handleChange(e)}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="* Flag URL"
                    name="flag"
                    value={flag}
                    onChange={e => handleChange(e)}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Image URL"
                    name="image"
                    value={image}
                    onChange={e => handleChange(e)}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    placeholder="* Participations"
                    name="participations"
                    value={participations}
                    onChange={e => handleChange(e)}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="* First Participation"
                    name="firstParticipation"
                    value={firstParticipation}
                    onChange={e => handleChange(e)}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="* Victories"
                    name="victories"
                    value={victories}
                    onChange={e => handleChange(e)}
                  />
                  <small className="form-text">
                    Please use comma separated values
                  </small>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="* Hosts"
                    name="hosts"
                    value={hosts}
                    onChange={e => handleChange(e)}
                  />
                  <small className="form-text">
                    Please use comma separated values
                  </small>
                </div>

                <div className="form-group">
                  <textarea
                    placeholder="Intro"
                    name="intro"
                    value={intro}
                    onChange={e => handleChange(e)}
                  ></textarea>
                  <small className="form-text">Write a short intro</small>
                </div>
                <div className="form-group">
                  <textarea
                    placeholder="Bio"
                    name="bio"
                    value={bio}
                    onChange={e => handleChange(e)}
                  ></textarea>
                  <small className="form-text">
                    Write a brief history of the country in Eurovison
                  </small>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Youtube link"
                    name="youtube"
                    value={youtube}
                    onChange={e => handleChange(e)}
                  />
                </div>

                <input type="submit" className="btn btn-primary my-1" />
                <Link className="btn btn-light my-1" to="/dashboard">
                  Go Back
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

AddCountry.propTypes = {
  addCountry: PropTypes.func.isRequired
};

export default connect(null, { addCountry })(withRouter(AddCountry));
