import React from 'react';
import { DateTime } from 'luxon';
import classNames from 'classnames';

import { GetMatchesQuery } from '../../generated/graphql';
import TeamList from './TeamList';

interface MatchCardProps {
  match: GetMatchesQuery['matches'][number];
}

function MatchCard({ match }: MatchCardProps) {
  const date = DateTime.fromISO(match.createdAt).toLocaleString(DateTime.DATETIME_FULL);

  return (
    <div className="col-lg-6">
      <div className={classNames('card card-dark h-100 bg-surface')}>
        <div className="card-body">
          <div className="row">
            <TeamList won={match.matchResult == 1} team={match.Team1} />
            <TeamList won={match.matchResult == 2} team={match.Team2} />
          </div>
          <p className="card-text mt-2">
            <small className="text-disabled">{date}</small>
          </p>
        </div>
        {match.screenshotPath && (
          <a href={match.screenshotPath} className="m-2" target="_blank" rel="noreferrer">
            <img
              src={match.screenshotPath}
              className={classNames('card-img-bottom border border-my-primary')}
              alt="Match Screenshot"
            ></img>
          </a>
        )}
      </div>
    </div>
  );
}

export default MatchCard;
