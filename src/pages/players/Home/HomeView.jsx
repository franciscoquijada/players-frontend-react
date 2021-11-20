import React from 'react';
import {PaginationButtons} from '../../../components/players/Pagination/Pagination';
import {Card} from '../../../components/players/Card/Card';
import {SearchInput} from '../../../components/players/SearchInput/SearchInput';
import {Loading} from '../../../components/players/Loading/Loading';
import {Message} from '../../../components/shared/Message/Message';
import './Home.css';

export const HomeView = ({
                         setSearchPlayers,
                         loading,
                         handlePageChange,
                         totalPages,
                         currentPage,
                         cards
                         }) => {

    return (
        <>
            <div className='center'>
                <h1>List of Players</h1>
                <SearchInput setSearchPlayers={setSearchPlayers}/>
            </div>
            <div className='center'>
                {
                    loading ?
                        <Loading/>
                        :
                        <>
                            <div className='center'>
                                <PaginationButtons
                                    handlePageChange={handlePageChange}
                                    total={totalPages}
                                    page={currentPage}
                                />
                            </div>
                            {cards.length ?
                                <div className='player-container'>
                                    {
                                        cards.map((player) => (
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




