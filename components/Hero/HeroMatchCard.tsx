import React from 'react';
import { DateTime } from 'luxon';
import classNames from 'classnames';

import { GetRecentAndWonMatchesFromPlayerQuery } from '../../generated/graphql';
import HeroTeamList from './HeroTeamList';

interface MatchCardProps {
  match: GetRecentAndWonMatchesFromPlayerQuery['matches'][number];
  username: string;
  wonMatch?: boolean;
}

function HeroMatchCard({ match, username, wonMatch }: MatchCardProps) {
  const date = DateTime.fromISO(match.createdAt).toLocaleString(DateTime.DATETIME_FULL);

  return (
    <div
      className={classNames(
        'card bg-surface mb-2 border-2',
        { 'border-primary': wonMatch },
        { 'border-danger': !wonMatch },
      )}
    >
      <div className="card-body">
        <div className="row">
          <HeroTeamList username={username} team={match.Team1} />
          <HeroTeamList username={username} team={match.Team2} />
        </div>
        <p className="card-text mt-2">
          <small className="text-disabled">{date}</small>
        </p>
      </div>
    </div>
  );
}

export default HeroMatchCard;
