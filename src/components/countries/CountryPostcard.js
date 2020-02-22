import React, { Fragment } from 'react';
import Spinner from '../layout/Spinner';

const CountryPostcard = props => {
  return (
    <div className="postcard-container">
      <div className="banner"></div>
      <div className="postcard">
        <div className="postcard-top">
          <div className="postcard-hero">
            <img
              className="postcard-img"
              src="https://eurovision.tv/image/8d914d11-9bb8-4a44-854c-aa9a823e4921/hero.JPG"
              alt="Norway"
            />
            <img
              className="postcard-flag"
              src="https://eurovision.tv/image/8d9387de-68de-403d-b3d0-1bdcf1c361e6.svg"
              alt="Norway"
            />
            <div className="postcard-title">
              <h2>Norway</h2>
            </div>
          </div>
          <div className="postcard-info">
            <div>
              <h3>Participations</h3>
              <span>59</span>
            </div>
            <div>
              <h3>First Participation</h3>
              <span>1960 (Nora Brockstedt)</span>
            </div>
            <div className="postcard-list">
              <h3>Victories</h3>
              <span>2009 (Alexander Rybak)</span>
              <span>1995 (Secret Garden)</span>
              <span>1985 (Bobbysocks)</span>
            </div>
            <div className="postcard-list">
              <h3>Hosts</h3>
              <span>Oslo 2010</span>
              <span>Oslo 1996</span>
              <span>Bergen 1986</span>
            </div>
          </div>
        </div>

        <div className="postcard-content">
          <div className="postcard-bio">
            <p className="intro">
              Norway made its debut in the Eurovision Song Contest in 1960. The
              country has finished last more times than any other country,
              however, in the case of Jahn Teigen who scored zero points in
              1978, it turned him into a star!
            </p>
            <p>
              Norway has the dubious record of finishing last most times (11 in
              total), including scoring nul points on 4 occasions. On the other
              hand, Norway has won the contest 3 times and scored the biggest
              margin of victory ever in 2009. Nora Brockstedt gave Norway its
              first top-five placing when the country debuted in 1960. She
              performed Voi Voi in London and finished in fourth place. Prior to
              the first Norwegian victory in 1985, the country had only once
              reached the top 5 in 1966. 10 years after Bobbysocks won with La
              Det Swinge in 1985, Secret Garden scored the second victory for
              Norway with Nocturne. The following year in Oslo, Norway finished
              second on home ground for the one and, to date, only time when
              Elisabeth Andreassen represented the country on home ground with
              the song I evighet. Norway has finished last in every decade since
              the 1960s and more recently Norway finished last in Baku in 2012
              with Stay performed by Tooji. However, it's not all bad news:
              since the Semi-Finals were introduced, Norway has only failed to
              qualify for the final on 3 occasions.
            </p>
          </div>

          <div className="postcard-video">
            <iframe
              src="https://www.youtube.com/embed/5oyFVcxAQlg"
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

export default CountryPostcard;
