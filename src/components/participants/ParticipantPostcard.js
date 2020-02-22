import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../layout/Spinner';

const ParticipantPostcard = props => {
  return (
    <div className="postcard-container">
      <div className="banner"></div>
      <div className="postcard">
        <div className="postcard-top">
          <div className="postcard-hero">
            <img
              className="postcard-img"
              src="https://eurovision.tv/image/8f6eb1ff-6648-46bc-9b49-1495b24ef09d/card.png "
              alt="Arilena Ara"
            />
            <img
              className="postcard-flag"
              src="https://eurovision.tv/image/8d938a00-42af-4b60-835f-415a224a66cd.svg"
              alt="Albania"
            />
            <div className="postcard-title">
              <h2>Arilena Ara</h2>
            </div>
          </div>
          <div className="postcard-info">
            <div>
              <h3>Country</h3>
              <Link to="/countries/id">🇦🇱 Albania</Link>
            </div>
            <div>
              <h3>Song</h3>
              <span>Shaj</span>
            </div>
            <div>
              <h3>Written by</h3>
              <span>Lindon Berisha</span>
            </div>
            <div>
              <h3>Composed by</h3>
              <span>Darko Dimitrov, Lazar Cvetkovski</span>
            </div>
          </div>
        </div>

        <div className="postcard-content">
          <div className="postcard-bio">
            <p className="intro">
              Arilena Ara rose to fame in Albania after winning the second
              season of Albania's 'X Factor
            </p>
            <p>
              The Shkodra singer has topped international rankings on networks
              such as Itunes for weeks with her song "Nëntori", one that earned
              her a ticket to the prestigious Europe Plus festival in Russia and
              Astana Dausy in Kazakhstan in 2016.
            </p>
          </div>

          <div className="postcard-video">
            <iframe
              src="https://www.youtube.com/embed/5jh3f1J-eJE"
              frameBorder="0"
              allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParticipantPostcard;
