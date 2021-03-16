import React from 'react';
import { useGetRecentAndWonMatchesFromPlayerQuery } from '../../generated/graphql';

import LoadingSpinner from '../LoadingSpinner';
import HeroMatchCard from './HeroMatchCard';

interface HeroRecentMatchesCardProps {
  userId: number;
}

function HeroRecentMatchesCard({ userId }: HeroRecentMatchesCardProps) {
  const { data, loading, error } = useGetRecentAndWonMatchesFromPlayerQuery({ variables: { amount: 5, id: userId } });

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <div>Error {error}</div>;
  }

  return (
    <div>
      <h3>Recent Matches</h3>
      <div>
        {data.matches.map((match, index) => {
          const wonMatch = data.wonMatches.map((m) => m.id).includes(match.id);

          return <HeroMatchCard key={index} match={match} username={data.player.userTag} wonMatch={wonMatch} />;
        })}
        {data.matches.length == 0 && <div>No matches found</div>}
      </div>
    </div>
  );
}

export default HeroRecentMatchesCard;
