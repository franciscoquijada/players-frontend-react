import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { HomeView } from './HomeView';

export const HomeContainer = () => {
  const [players, setPlayers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchPlayers, setSearchPlayers] = useState('');
  const [loading, setLoading] = useState(false);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    const fetchPlayersData = () => {
      const quantityPages = 20;
      setLoading(true);
      let searchString = searchPlayers;
      if (searchPlayers.trim()) {
        searchString = `&search=${searchPlayers}`;
      }
      axios
        .get(
          `${process.env.REACT_APP_API_URL}players?page=${currentPage}&limit=${quantityPages}${searchString}`
        )
        .then((response) => {
          setTotalPages(calculateTotalPages(response.data.total, quantityPages));
          setPlayers(response.data.data);
          setLoading(false);
        })
        .catch(() => {
          setShowError(true);
          setLoading(false);
        });
    };
    fetchPlayersData();
  }, [currentPage, searchPlayers]);

  const calculateTotalPages = (total, quantity) => {
    let numberPages = Math.trunc(total / quantity);
    return numberPages <= 0 ? 1 : numberPages;
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <HomeView
      setSearchPlayers={setSearchPlayers}
      searchPlayers={searchPlayers}
      loading={loading}
      handlePageChange={handlePageChange}
      totalPages={totalPages}
      currentPage={currentPage}
      players={players}
      showError={showError}
    />
  );
};
