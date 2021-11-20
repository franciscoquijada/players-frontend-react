import React from 'react';
import '../styles/Card.css';

export const CardPlayer = ({player}) => {

    return (
        <div className='card'>
            <div className='image-container'>
                <img src={`https://${player.avatar}`} alt={player.nickname}/>
            </div>

            <div className='info-container'>
                <section className='name-tagline'>
                    <p className='player-name'>{player.nickname}</p>
                    <p className='player-info'>
                        <i><b>Status:</b> {player.status}</i>
                    </p>
                    <p className='player-info'>
                        <i><b>Balance:</b> {player.balance}</i>
                    </p>
                </section>
            </div>
        </div>
    );
};



