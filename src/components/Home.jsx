import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {PaginationButtons} from './Pagination';
import {CardPlayer} from './CardPlayer';
import {SearchInput} from './SearchInput';
import {Loading} from './Loading';
import '../styles/Home.css';
import {NotContent} from './NotContent';

export const Home = () => {
    const [cards, setCards] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState();
    const [searchPlayers, setSearchPlayers] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchPlayersData();
    }, [currentPage, searchPlayers]);

    const fetchPlayersData = async () => {
        const quantityPages = 20;
        console.log(`Estoy dentro http://localhost:3000/api/v1/players/?search=${searchPlayers}&page=${currentPage}&limit=${quantityPages}`);

        setLoading(true);
        await axios.get(
            `http://localhost:3000/api/v1/players/?search=${searchPlayers}&page=${currentPage}&limit=${quantityPages}`
        ).then(response => {
            console.log(" Respuesta: ");
            console.log(response.data);
            setTotalPages(calculateTotalPages(response.data.total, quantityPages));
            setCards(response.data.data);
            setLoading(false);
        }).catch(error => {
            setLoading(false);
            console.log(error);
        });
    };

    const calculateTotalPages = (total, quantity) => {
        return Math.trunc(total / quantity) <= 0 ? 1 : total;
    }

    const handlePageChange = (e) => {
        setCurrentPage(e.target.innerText);
    };

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
                            { cards.length ?
                                <div className='player-container'>
                                    {
                                        cards.map((player) => (
                                            <CardPlayer
                                                key={player.id}
                                                player={player}
                                                id={player.id}
                                            />
                                        ))
                                    }
                                </div> :
                                <NotContent/>
                            }
                        </>
                }
            </div>
        </>
    );
};




