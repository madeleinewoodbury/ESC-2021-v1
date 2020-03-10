import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateParticipant, getParticipant } from '../../actions/participants';
import { getCountries } from '../../actions/countries';
import { getCompetitions } from '../../actions/competitions';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';

const EditParticipant = ({
  updateParticipant,
  getParticipant,
  getCountries,
  getCompetitions,
  countries: { countries },
  competitions: { competitions },
  participants: { participant, loading },
  history,
  match
}) => {
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

  useEffect(() => {
    countries.lenght !== [] && getCountries();
    competitions.lenght !== [] && getCompetitions();
    participant === null && getParticipant(match.params.id);

    if (participant !== null) {
      setFormData({
        country: loading || !participant.country ? '' : participant.country,
        artist: loading || !participant.artist ? '' : participant.artist,
        song: loading || !participant.song ? '' : participant.song,
        year: loading || !participant.year ? '' : participant.year,
        image: loading || !participant.image ? '' : participant.image,
        intro: loading || !participant.intro ? '' : participant.intro,
        bio: loading || !participant.bio ? '' : participant.bio,
        writtenBy:
          loading || !participant.writtenBy ? '' : participant.writtenBy,
        composedBy:
          loading || !participant.composedBy ? '' : participant.composedBy,
        semifinal:
          loading || !participant.semifinal ? '' : participant.semifinal,
        final: loading || !participant.final ? false : participant.final,
        youtube: loading || !participant.youtube ? '' : participant.youtube,
        points: loading || !participant.points ? '' : participant.points
      });
    }
    // eslint-disable-next-line
  }, [
    loading,
    getCountries,
    getCompetitions,
    getParticipant,
    match.params.id,
    participant
  ]);

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    updateParticipant(match.params.id, formData, history);
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
              <h1 className="large">Edit Particpant</h1>
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
                      <option key={country._id} value={country.name}>
                        {country.name}
                      </option>
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
                  <select
                    name="year"
                    value={year}
                    onChange={e => handleChange(e)}
                  >
                    <option value={0}>* Select a Year</option>
                    {competitions.map(comp => (
                      <option key={comp._id} value={comp.year}>
                        {comp.year}
                      </option>
                    ))}
                  </select>
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

                <input type="submit" className="btn btn-primary" />
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

EditParticipant.propTypes = {
  updateParticipant: PropTypes.func.isRequired,
  getParticipant: PropTypes.func.isRequired,
  getCountries: PropTypes.func.isRequired,
  getCompetitions: PropTypes.func.isRequired,
  countries: PropTypes.object.isRequired,
  participants: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  countries: state.countries,
  competitions: state.competitions,
  participants: state.participants
});

export default connect(mapStateToProps, {
  updateParticipant,
  getParticipant,
  getCountries,
  getCompetitions
})(withRouter(EditParticipant));
