import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {HomeView} from "./HomeView";

export const HomeContainer = () => {
    const [players, setPlayers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState();
    const [searchPlayers, setSearchPlayers] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchPlayersData = () => {
            const quantityPages = 20;
            setLoading(true);
             axios.get(
                `${process.env.REACT_APP_API_URL}players/?search=${searchPlayers}&page=${currentPage}&limit=${quantityPages}`
            ).then(response => {
                setTotalPages(calculateTotalPages(response.data.total, quantityPages));
                setPlayers(response.data.data);
                setLoading(false);
            }).catch(error => {
                setLoading(false);
            });
        };
        fetchPlayersData();
    }, [currentPage, searchPlayers]);

    const calculateTotalPages = (total, quantity) => {
        let numberPages = Math.trunc(total / quantity);
        return numberPages <= 0 ? 1 : numberPages;
    }

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return <HomeView
        setSearchPlayers={setSearchPlayers}
        loading={loading}
        handlePageChange={handlePageChange}
        totalPages={totalPages}
        currentPage={currentPage}
        players={players}
    />
};




