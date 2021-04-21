import React from 'react';
import { DateTime } from 'luxon';
import Link from 'next/link';

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
      {data.players.map((player) => {
        const joinDate = DateTime.fromISO(player.createdAt).toLocaleString(DateTime.DATETIME_FULL);

        return (
          <Link key={player.discordId} href={`/heroes/${player.id}`}>
            <a className="list-group-item list-group-item-action">
              <RankIcon skillLevel={player.skillLevel} />
              <span className="ms-1 text-high">{player.userTag}</span>

              <small className="text-disabled d-block mt-2">joined {joinDate}</small>
            </a>
          </Link>
        );
      })}
    </div>
  );
}

export default PlayerList;
