import React from 'react';
import { DateTime } from 'luxon';

import { useGetAllPlayersQuery } from '../../generated/graphql';
import RankIcon from '../RankIcon';
import LoadingSpinner from '../LoadingSpinner';

function PlayerList() {
  const { data, loading, error } = useGetAllPlayersQuery();

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <div>ERROR {error}</div>;
  }

  return (
    <div className="list-group">
      {data.findManyPlayers.map((player) => {
        const joinDate = DateTime.fromISO(player.createdAt).toLocaleString(DateTime.DATETIME_FULL);

        return (
          <div className="list-group-item" key={player.userId}>
            <RankIcon skillLevel={player.skillLevel} />
            <span className="ms-1">{player.userTag}</span>
            <p>
              <small className="text-muted">joined {joinDate}</small>
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default PlayerList;
