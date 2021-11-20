import React from 'react';
import '../styles/Cards.css';

export const Cards = React.forwardRef(({player}, ref) => {

    return (
        <div className='player-card' ref={ref}>
            <section className='top'>
                <section className='image-name-tagline'>
                    <img src={player.avatar} alt={player.nickname}/>
                    <section className='right-side'>
                        <p className='player-name'>{player.nickname}</p>
                        <p className='player-info'>
                            <i>{player.status}</i>
                            <i>{player.balance}</i>
                        </p>
                    </section>
                </section>
            </section>
        </div>
    );
});
