import React from 'react';
import { DateTime } from 'luxon';
import classNames from 'classnames';

import { GetMatchesQuery } from '../../generated/graphql';
import TeamList from './TeamList';

import styles from '../../styles/Card.module.scss';

interface MatchCardProps {
  match: GetMatchesQuery['matches'][number];
}

function MatchCard({ match }: MatchCardProps) {
  const date = DateTime.fromISO(match.createdAt).toLocaleString(DateTime.DATETIME_FULL);

  return (
    <div className="col-lg-6">
      <div className={classNames('card card-dark h-100', styles.card)}>
        <div className="card-body">
          <div className="row">
            <TeamList won={match.matchResult == 1} team={match.Team1} />
            <TeamList won={match.matchResult == 2} team={match.Team2} />
          </div>
          <p className="card-text mt-2">
            <small className={styles.date}>{date}</small>
          </p>
        </div>
        {match.screenshotPath && (
          <a href={match.screenshotPath} className="m-2" target="_blank" rel="noreferrer">
            <img
              src={match.screenshotPath}
              className={classNames('card-img-bottom', styles.border)}
              alt="Match Screenshot"
            ></img>
          </a>
        )}
      </div>
    </div>
  );
}

export default MatchCard;
