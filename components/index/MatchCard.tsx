import React from 'react';
import { GetMatchesQuery } from '../../generated/graphql';
import TeamList from './TeamList';

interface MatchCardProps {
  match: GetMatchesQuery['matches'][number];
}

function MatchCard({ match }: MatchCardProps) {
  return (
    <div className="col-lg-6">
      <div className="card h-100">
        <div className="card-body">
          <div className="row">
            <TeamList won={match.matchResult == 1} team={match.Team1} />
            <TeamList won={match.matchResult == 2} team={match.Team2} />
          </div>
          <p className="card-text mt-2">
            <small className="text-muted">{match.createdAt}</small>
          </p>
        </div>
        {match.screenshotPath && (
          <img src={match.screenshotPath} className="card-img-bottom p-2" alt="Match Screenshot"></img>
        )}
      </div>
    </div>
  );
}

export default MatchCard;
