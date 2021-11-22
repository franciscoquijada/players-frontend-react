import React from 'react';
import PropTypes from 'prop-types';
import { PaginationButtons } from '../../../components/shared/PaginationButtons/PaginationButtons';
import { Card } from '../../../components/players/Card/Card';
import { SearchInput } from '../../../components/shared/SearchInput/SearchInput';
import { Loading } from '../../../components/shared/Loading/Loading';
import { Message } from '../../../components/shared/Message/Message';
import './Home.css';

export const HomeView = ({
  setSearchPlayers,
  loading,
  handlePageChange,
  totalPages,
  currentPage,
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
    <div className="center">
      {loading ? (
        <Loading message="Searching Players" />
      ) : (
        <>
          {pagination}
          {players.length ? playersContainer : <Message message="No players were found" />}
        </>
      )}
    </div>
  );
  return (
    <>
      <div className="center">
        <h1>List of Players</h1>
        <SearchInput
          setSearchPlayers={setSearchPlayers}
          labelText="Search player"
          searchPlayers={searchPlayers}
        />
      </div>
      {showError ? <Message message="A system error has occurred" /> : playersSection}
    </>
  );
};

HomeView.propTypes = {
  setSearchPlayers: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  handlePageChange: PropTypes.func.isRequired,
  totalPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  players: PropTypes.array.isRequired,
  searchPlayers: PropTypes.string.isRequired,
  showError: PropTypes.bool.isRequired
};
