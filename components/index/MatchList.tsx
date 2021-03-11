import React from 'react';
import { GetMatchesQuery } from '../../generated/graphql';
import MatchCard from './MatchCard';

interface MatchListProps {
  matches: GetMatchesQuery['matches'];
}

function MatchList({ matches }: MatchListProps) {
  return (
    <div className="row g-3">
      {matches.length > 0 ? (
        matches.map((match, index) => <MatchCard key={index} match={match} />)
      ) : (
        <div>No Matches found</div>
      )}
    </div>
  );
}

export default MatchList;
