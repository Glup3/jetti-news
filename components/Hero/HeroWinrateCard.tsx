import React from 'react';

import { useGetWrQuery } from '../../generated/graphql';
import LoadingSpinner from '../LoadingSpinner';
import RankIcon from '../RankIcon';

interface HeroWinrateCardProps {
  userId: number;
}

function HeroWinrateCard({ userId }: HeroWinrateCardProps) {
  const { data, loading, error } = useGetWrQuery({ variables: { id: userId } });

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <div>Error {error}</div>;
  }

  const total = data.gamesWon.count.all + data.gamesLost.count.all;

  return (
    <div className="card h-100 bg-surface">
      <div className="card-body row">
        <h5 className="card-title">General Stats - Winrate</h5>
        <div className="col">
          <RankIcon skillLevel={data.player?.skillLevel} size={100} />
        </div>
        <div className="col">
          <div>{total} Games</div>
          <div>{data.gamesWon.count.all} Wins</div>
          <div>{data.gamesLost.count.all} Loss</div>
          <div>{((100 / total) * data.gamesWon.count.all).toFixed(2)}% Winrate</div>
        </div>
      </div>
    </div>
  );
}

export default HeroWinrateCard;
