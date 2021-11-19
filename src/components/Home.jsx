import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {PaginationButtons} from './Pagination';
import '../styles/Home.css';
import {CardPlayer} from './CardPlayer';

export const Home = () => {
    const [cards, setCards] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState();

    useEffect(() => {
        fetchPlayersData(currentPage);
    }, [currentPage]);

    const fetchPlayersData = async (pageNumber) => {
        const quantityPages = 20;
        try {
            const response = await axios.get(
                `http://localhost:3000/api/v1/players/?page=${pageNumber}&limit=${quantityPages}`
            );
            setTotalPages(response.data.total / quantityPages);
            setCards(response.data.data);
        } catch (err) {
            console.log(err);
        }
    };

    const handlePageChange = (e) => {
        setCurrentPage(e.target.innerText);
        fetchPlayersData(currentPage);
        console.log("page nr:", e.target);
    };

    return (
        <>
            <div className='player-container'>
                {cards.map((player) => (
                    <CardPlayer
                        key={player.id}
                        player={player}
                        id={player.id}
                    />
                ))}
            </div>
            <div className='center'>
                <PaginationButtons
                    handlePageChange={handlePageChange}
                    total={totalPages}
                    page={currentPage}
                />
            </div>
        </>
    );
};




