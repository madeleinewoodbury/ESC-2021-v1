import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addParticipant } from '../../actions/participants';
import { getCountries } from '../../actions/countries';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';

const AddParticipant = ({
  addParticipant,
  getCountries,
  countries: { countries, loading },
  history
}) => {
  useEffect(() => {
    getCountries();
  }, [getCountries]);

  const [formData, setFormData] = useState({
    country: '',
    artist: '',
    song: '',
    year: '',
    image: '',
    intro: '',
    bio: '',
    writtenBy: '',
    composedBy: '',
    semifinal: '',
    final: false,
    youtube: '',
    points: ''
  });

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    addParticipant(formData, history);
  };

  const {
    country,
    artist,
    song,
    year,
    image,
    intro,
    bio,
    writtenBy,
    composedBy,
    semifinal,
    final,
    youtube,
    points
  } = formData;

  return loading && countries === null ? (
    <Spinner />
  ) : (
    <div className="admin-form background">
      <div className="banner"></div>
      <div className="content">
        <div className="overlay">
          <div className="container">
            <div className="container-inner">
              <h1 className="large">Add a New Particpant</h1>
              <p>* = required field</p>
              <form className="form" onSubmit={e => handleSubmit(e)}>
                <div className="form-group">
                  <select
                    name="country"
                    value={country}
                    onChange={e => handleChange(e)}
                  >
                    <option value="0">* Select a Country</option>
                    {countries.map(country => (
                      <option value={country.name}>{country.name}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="* Artist Name"
                    name="artist"
                    value={artist}
                    onChange={e => handleChange(e)}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="* Song title"
                    name="song"
                    value={song}
                    onChange={e => handleChange(e)}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    placeholder="Year"
                    name="year"
                    value={year}
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
                    type="text"
                    placeholder="Written by"
                    name="writtenBy"
                    value={writtenBy}
                    onChange={e => handleChange(e)}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Composer"
                    name="composedBy"
                    value={composedBy}
                    onChange={e => handleChange(e)}
                  />
                </div>
                <div className="form-group">
                  <select
                    name="semifinal"
                    value={semifinal}
                    onChange={e => handleChange(e)}
                  >
                    <option value="0">* Select a semifinal</option>
                    <option value="First Semifinal">First Semifinal</option>
                    <option value="Second Semifinal">Second Semifinal</option>
                    <option value="Final">Final</option>
                  </select>
                </div>
                <div className="form-group">
                  <p>
                    <input
                      type="checkbox"
                      name="final"
                      checked={final}
                      value={final}
                      onChange={() => {
                        setFormData({ ...formData, final: !final });
                      }}
                    />{' '}
                    Grand Final
                  </p>
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
                    Write a brief bio of the contestant
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
                <div className="form-group">
                  <input
                    type="number"
                    placeholder="Points"
                    name="points"
                    value={points}
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

AddParticipant.propTypes = {
  addParticipant: PropTypes.func.isRequired,
  getCountries: PropTypes.func.isRequired,
  countries: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  countries: state.countries
});

export default connect(mapStateToProps, { addParticipant, getCountries })(
  withRouter(AddParticipant)
);
