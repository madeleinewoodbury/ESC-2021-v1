import React, { useEffect, useState, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Spinner from '../layout/Spinner';
import { connect } from 'react-redux';
import { updateCountry, getCountry } from '../../actions/countries';
import PropTypes from 'prop-types';

const EditCountry = ({
  updateCountry,
  getCountry,
  countries: { country, loading },
  history,
  match
}) => {
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

  useEffect(() => {
    getCountry(match.params.id);
    if (country !== null) {
      setFormData({
        name: loading || !country.name ? '' : country.name,
        emoji: loading || !country.emoji ? '' : country.emoji,
        flag: loading || !country.flag ? '' : country.flag,
        image: loading || !country.image ? '' : country.image,
        participations:
          loading || !country.participations ? '' : country.participations,
        firstParticipation:
          loading || !country.firstParticipation
            ? ''
            : country.firstParticipation,
        victories:
          loading || !country.victories ? '' : country.victories.join(','),
        hosts: loading || !country.hosts ? '' : country.hosts.join(','),
        intro: loading || !country.intro ? '' : country.intro,
        bio: loading || !country.bio ? '' : country.bio,
        youtube: loading || !country.youtube ? '' : country.youtube
      });
    }
  }, [loading, getCountry, match.params.id, country]);

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    updateCountry(match.params.id, formData, history);
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

  return loading && country === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className="admin-form background">
        <div className="banner"></div>
        <div className="content">
          <div className="overlay">
            <div className="container">
              <div className="container-inner">
                <h1 className="large">Edit Country</h1>
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

                  <input
                    type="submit"
                    className="btn btn-primary my-1"
                    value="Save Changes"
                  />
                  <Link className="btn btn-light my-1" to="/edit-countries">
                    Go Back
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

EditCountry.propTypes = {
  updateCountry: PropTypes.func.isRequired,
  getCountry: PropTypes.func.isRequired,
  countries: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  countries: state.countries
});

export default connect(mapStateToProps, { getCountry, updateCountry })(
  withRouter(EditCountry)
);
