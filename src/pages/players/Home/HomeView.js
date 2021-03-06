import React from 'react';
import PropTypes from 'prop-types';
import { PaginationButtons } from '../../../components/commons/PaginationButtons/PaginationButtons';
import { Card } from '../../../components/players/Card/Card';
import { SearchInput } from '../../../components/commons/SearchInput/SearchInput';
import { Loading } from '../../../components/commons/Loading/Loading';
import { Message } from '../../../components/commons/Message/Message';
import './Home.css';

export const HomeView = ({
  setSearchPlayers,
  loading,
  handlePageChange,
  totalPages,
  currentPage,
  setCurrentPage,
  players,
  searchPlayers,
  showError
}) => {
  const pagination = (
    <div className="pagination-container">
      <PaginationButtons
        handlePageChange={handlePageChange}
        total={totalPages}
        page={currentPage}
      />
    </div>
  );
  const playersContainer = (
    <div className="player-container">
      {players.map((player) => (
        <Card key={player.id} player={player} id={player.id} />
      ))}
    </div>
  );
  const playersSection = (
    <div className="center">{loading ? <Loading message="Searching Players" /> : null}</div>
  );
  return (
    <>
      <div className="center">
        <h1>List of Players</h1>
        <SearchInput
          setSearchPlayers={setSearchPlayers}
          labelText="Search player"
          searchPlayers={searchPlayers}
          setCurrentPage={setCurrentPage}
        />
      </div>
      {showError ? <Message message="A system error has occurred" /> : playersSection}
      <div className="center">
        {players.length ? playersContainer : <Message message="No players were found" />}
        {pagination}
      </div>
    </>
  );
};

HomeView.propTypes = {
  setSearchPlayers: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  handlePageChange: PropTypes.func.isRequired,
  totalPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  players: PropTypes.array.isRequired,
  searchPlayers: PropTypes.string.isRequired,
  showError: PropTypes.bool.isRequired
};
