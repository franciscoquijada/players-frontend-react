import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {PaginationButtons} from '../../../components/players/Pagination/Pagination';
import {Card} from '../../../components/players/Card/Card';
import {SearchInput} from '../../../components/players/SearchInput/SearchInput';
import {Loading} from '../../../components/players/Loading/Loading';
import {Message} from '../../../components/shared/Message/Message';
import './Home.css';


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
        setLoading(true);
        await axios.get(
            `${process.env.REACT_APP_API_URL}players/?search=${searchPlayers}&page=${currentPage}&limit=${quantityPages}`
        ).then(response => {
            setTotalPages(calculateTotalPages(response.data.total, quantityPages));
            setCards(response.data.data);
            setLoading(false);
        }).catch(error => {
            setLoading(false);
        });
    };

    const calculateTotalPages = (total, quantity) => {
        let numberPages = Math.trunc(total / quantity);
        return numberPages <= 0 ? 1 : numberPages;
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




