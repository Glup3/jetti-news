import React from 'react';

import { GetAlinaStatsQuery } from '../../../generated/graphql';

interface HeroAlinaStatsCardProps {
  data: GetAlinaStatsQuery;
}

function AlinaStatsCard({ data }: HeroAlinaStatsCardProps) {
  return (
    <div className="card h-100 bg-surface">
      <div className="card-body row">
        <h5 className="card-title">Important Alina Stats</h5>
        <div className="col">
          <div>{data.lostAgainstAlina.count.all} Games lost against Alina</div>
          <div>{data.playedWithAlina.count.all} Games played with Alina</div>
          <div>{data.lostWithAlina.count.all} Games lost with Alina</div>
        </div>
      </div>
    </div>
  );
}

export default AlinaStatsCard;
