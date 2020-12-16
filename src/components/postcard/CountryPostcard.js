import React, { Fragment, useEffect } from 'react'
import Spinner from '../layout/Spinner'
import { connect } from 'react-redux'
import { getCountry } from '../../actions/countries'
import PropTypes from 'prop-types'
import './Postcard.css'

const CountryPostcard = ({
  getCountry,
  countries: { country, loading },
  match,
  history,
}) => {
  useEffect(() => {
    getCountry(match.params.id, history)
  }, [getCountry, match.params.id, history])

  return (
    <Fragment>
      {country === null || loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <div className='postcard-container'>
            <div className='banner'></div>
            <div className='postcard'>
              <div className='postcard-top'>
                <div className='postcard-hero'>
                  <div>
                    <img
                      className='postcard-img'
                      src={country.image}
                      alt={country.name}
                    />
                  </div>
                  <div>
                    <div className='postcard-title'>
                      <h2>{country.name}</h2>
                      <img
                        className='postcard-flag'
                        src={country.flag}
                        alt={country.name}
                      />
                    </div>
                  </div>
                </div>
                <div className='postcard-info'>
                  <div>
                    <h3>Participations</h3>
                    {/* <span>{country.participations}</span> */}
                    <span>TO DO</span>
                  </div>
                  <div>
                    <h3>First Participation</h3>
                    <span>{country.firstParticipation}</span>
                  </div>
                  <div className='postcard-list'>
                    <h3>Victories</h3>
                    {/* {country.victories.map((victory, idx) => (
                      <span key={idx}>{victory}</span>
                    ))} */}
                    <span>TO DO</span>
                  </div>
                  <div className='postcard-list'>
                    <h3>Hosts</h3>
                    {/* {country.hosts.map((host, idx) => (
                      <span key={idx}>{host}</span>
                    ))} */}
                    <span>TO DO</span>
                  </div>
                </div>
              </div>

              <div className='postcard-content'>
                <div className='postcard-bio'>
                  {country.bio.map((p) => (
                    <p>{p}</p>
                  ))}
                </div>

                <div className='postcard-video'>
                  {country.video && (
                    <iframe
                      title={`${country.name} in the Eurovision`}
                      src={`https://www.youtube.com/embed/${country.video}`}
                      frameBorder='0'
                      allow='accelerometer; encrypted-media; gyroscope; picture-in-picture'
                      allowFullScreen
                    ></iframe>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  )
}

CountryPostcard.propTypes = {
  getCountry: PropTypes.func.isRequired,
  countries: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  countries: state.countries,
  auth: state.auth,
})

export default connect(mapStateToProps, { getCountry })(CountryPostcard)
