import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const AddCountry = () => {
  return (
    <div className="admin-form background">
      <div className="banner"></div>
      <div className="content">
        <div className="content-container">
          <h1 className="large text-primary">Add a New Country</h1>
          <small>* = required field</small>
          <form className="form">
            <div className="form-group">
              <input
                type="text"
                placeholder="* Country Name"
                name="name"
                // value={name}
                // onChange={e => handleChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="* Emoji"
                name="emoji"
                // value={name}
                // onChange={e => handleChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="* Flag URL"
                name="flag"
                // value={name}
                // onChange={e => handleChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Image URL"
                name="image"
                // value={name}
                // onChange={e => handleChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                placeholder="* Participations"
                name="participations"
                // value={name}
                // onChange={e => handleChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="* First Participations"
                name="firstParticipations"
                // value={name}
                // onChange={e => handleChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="* Victories"
                name="victories"
                // value={name}
                // onChange={e => handleChange(e)}
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
                // value={name}
                // onChange={e => handleChange(e)}
              />
              <small className="form-text">
                Please use comma separated values
              </small>
            </div>

            <div className="form-group">
              <textarea
                placeholder="Intro"
                name="intro"
                // value={description}
                // onChange={e => handleChange(e)}
              ></textarea>
              <small className="form-text">Write a short intro</small>
            </div>
            <div className="form-group">
              <textarea
                placeholder="Bio"
                name="bio"
                // value={description}
                // onChange={e => handleChange(e)}
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
                // value={name}
                // onChange={e => handleChange(e)}
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
  );
};

export default AddCountry;
