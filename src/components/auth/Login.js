import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <Fragment>
      <div className="auth background">
        <div className="banner"></div>
        <div className="content">
          <div className="overlay">
            <div className="auth-container">
              <h1 className="large">Sign In</h1>
              <p className="lead">
                <i className="fas fa-user"></i> Sign in to Your Account
              </p>
              <form className="form">
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
                <input
                  type="submit"
                  className="btn btn-secondary"
                  value="Login"
                />
              </form>
              <p className="my-1">
                Don't have an account?{' '}
                <Link className="text-primary" to="/register">
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
