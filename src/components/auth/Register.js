import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <Fragment>
      <div className="auth background">
        <div className="banner"></div>
        <div className="content">
          <div className="overlay">
            <div className="auth-container">
              <h1 className="large">Sign Up</h1>
              <p className="lead">
                <i className="fas fa-user"></i> Create Your Account
              </p>
              <form className="form">
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    // value={name}
                    // onChange={e => handleChange(e)}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    // value={email}
                    // onChange={e => handleChange(e)}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    // value={password}
                    // onChange={e => handleChange(e)}
                    // minLength={6}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    name="password2"
                    // value={password2}
                    // onChange={e => handleChange(e)}
                    // minLength={6}
                  />
                </div>
                <input
                  type="submit"
                  className="btn btn-secondary"
                  value="Register"
                />
              </form>
              <p className="my-1">
                Already have an account?{' '}
                <Link className="text-primary" to="/login">
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Register;
