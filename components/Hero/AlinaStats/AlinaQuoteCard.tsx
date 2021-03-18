import React from 'react';
import { GetAlinaStatsQuery } from '../../../generated/graphql';
import AlinaQuoteBody from './AlinaQuoteBody';
import AlinaQuoteTitle from './AlinaQuoteTitle';

interface HeroAlinaQuoteCardProps {
  data: GetAlinaStatsQuery;
}

function AlinaQuoteCard({ data }: HeroAlinaQuoteCardProps) {
  return (
    <div className="card h-100 bg-surface">
      <div className="card-body">
        <AlinaQuoteTitle
          gamesWith={data.playedWithAlina.count.all}
          lossesAgainst={data.lostAgainstAlina.count.all}
          lossesWith={data.lostWithAlina.count.all}
        />
        <AlinaQuoteBody
          gamesWith={data.playedWithAlina.count.all}
          lossesAgainst={data.lostAgainstAlina.count.all}
          lossesWith={data.lostWithAlina.count.all}
        />
      </div>
    </div>
  );
}

export default AlinaQuoteCard;
