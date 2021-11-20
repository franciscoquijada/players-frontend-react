import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {PaginationButtons} from './Pagination';
import '../styles/Home.css';
import {CardPlayer} from './CardPlayer';
import {SearchInput} from "./SearchInput";

export const Home = () => {
    const [cards, setCards] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState();
    const [searchPlayers, setSearchPlayers] = useState('');

    useEffect(() => {
        fetchPlayersData();
    }, [currentPage, searchPlayers]);

    const fetchPlayersData = async () => {
        const quantityPages = 20;
        console.log(`Estoy dentro http://localhost:3000/api/v1/players/?search=${searchPlayers}&page=${currentPage}&limit=${quantityPages}`);
        try {
            const response = await axios.get(
                `http://localhost:3000/api/v1/players/?search=${searchPlayers}&page=${currentPage}&limit=${quantityPages}`
            );
            console.log('Total ' + response.data.total + ' Cantidad de paginas ' +  quantityPages);
            setTotalPages(calculateTotalPages(response.data.total, quantityPages));
            setCards(response.data.data);
        } catch (err) {
            console.log(err);
        }
    };

    const calculateTotalPages = (total, quantity) => {
        return Math.trunc(total / quantity) === 0 ? 1 : total;
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
                <PaginationButtons
                    handlePageChange={handlePageChange}
                    total={totalPages}
                    page={currentPage}
                />
            </div>
            <div className='player-container'>
                {cards.map((player) => (
                    <CardPlayer
                        key={player.id}
                        player={player}
                        id={player.id}
                    />
                ))}
            </div>
        </>
    );
};




