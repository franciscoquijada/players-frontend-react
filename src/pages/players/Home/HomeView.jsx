import React from 'react';
import {PaginationButtons} from '../../../components/shared/PaginationButtons/PaginationButtons';
import {Card} from '../../../components/players/Card/Card';
import {SearchInput} from '../../../components/shared/SearchInput/SearchInput';
import {Loading} from '../../../components/shared/Loading/Loading';
import {Message} from '../../../components/shared/Message/Message';
import './Home.css';

export const HomeView = ({
                         setSearchPlayers,
                         loading,
                         handlePageChange,
                         totalPages,
                         currentPage,
                         players
                         }) => {

    return (
        <>
            <div className='center'>
                <h1>List of Players</h1>
                <SearchInput setSearchPlayers={setSearchPlayers} labelText='Search player'/>
            </div>
            <div className='center'>
                {
                    loading ?
                        <Loading message='Searching Players'/>
                        :
                        <>
                            <div className='center'>
                                <PaginationButtons
                                    handlePageChange={handlePageChange}
                                    total={totalPages}
                                />
                            </div>
                            {players.length ?
                                <div className='player-container'>
                                    {
                                        players.map((player) => (
                                            <Card
                                                key={player.id}
                                                player={player}
                                                id={player.id}
                                            />
                                        ))
                                    }
                                </div> :
                                <Message message='No players were found'/>
                            }
                        </>
                }
            </div>
        </>
    );
};




