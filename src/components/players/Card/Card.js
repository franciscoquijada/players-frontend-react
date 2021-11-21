import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';

export const Card = ({ player }) => {
  return (
    <div className="card">
      <div className="image-container">
        <img src={`https://${player.avatar}`} alt={player.nickname} />
      </div>
      <div className="info-container">
        <section className="name-tagline">
          <p className="player-name">{player.nickname}</p>
          <p className="player-info">
            <i>
              <b>Id:</b> {player.id}
            </i>
          </p>
          <p className="player-info">
            <i>
              <b>Status:</b> {player.status}
            </i>
          </p>
          <p className="player-info">
            <i>
              <b>Balance:</b> {player.balance}
            </i>
          </p>
        </section>
      </div>
    </div>
  );
};

Card.propTypes = {
  player: PropTypes.shape({
    id: PropTypes.number,
    avatar: PropTypes.string,
    nickname: PropTypes.string,
    status: PropTypes.string,
    balance: PropTypes.number
  })
};
