import React from 'react';
import PlayerList from '../components/Heroes/PlayerList';

function Heroes() {
  return (
    <main className="container my-2">
      <h1>All Heroes</h1>
      <PlayerList />
    </main>
  );
}

export default Heroes;
