import React from 'react';
import { useAllPlayersQuery } from '../generated/graphql';

function UserList() {
  const { data, error, loading } = useAllPlayersQuery();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>ERROR: {error.message}</div>;
  }

  return (
    <div>
      {data.findManyPlayers.map((player, index) => (
        <p key={index}>{player.userTag}</p>
      ))}
    </div>
  );
}

export default UserList;
