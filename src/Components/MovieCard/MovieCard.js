import React from 'react';

import Rate from '../Rate';

import './MovieCard.css';

const MovieCard = ({
  movie: { name, date, rating, image, type, description },
}) => {
  return (
    <div className="card">
      <div className="card_left">
        <img src={image} alt="poster" />
      </div>
      <div className="card_right">
        <h1>{name}</h1>
        <div className="card_right__details">
          <ul>
            <li>{date}</li>
            <li>||</li>
            <li>{type}</li>
          </ul>
        </div>
        <div className="card_right__rating">
          <Rate rating={rating} />
        </div>
        <div className="card_right__review">
          <p>{description}</p>
          <a href="https://fr.web.img3.acsta.net/medias/nmedia/18/35/23/40/18431141.jpg">Read More</a>
        </div>
        <div className="card_right__button">
          <a href="https://img-4.linternaute.com/cip2YBDZkVvjU4a2tqiFIaf6Yhw=/1240x/a9bfc660898e44a19d2d36f463c9c955/ccmcms-linternaute/124775.jpg">WATCH TRAILER</a>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
