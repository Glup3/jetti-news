import React from 'react';
import classNames from 'classnames';

import { GetMatchesQuery } from '../../generated/graphql';
import RankIcon from '../RankIcon';
import WinnerBadge from './WinnerBadge';

interface TeamListProps {
  team: GetMatchesQuery['matches'][number]['Team1'];
  won: boolean;
}

function TeamList({ team, won }: TeamListProps) {
  return (
    <div className="col-sm">
      <div>
        <h2 className={classNames('d-inline-block text-high')}>Team {team.teamName}</h2>
        {won && <WinnerBadge />}
      </div>
      <div className="text-medium">
        <div>
          <RankIcon skillLevel={team.PlayerH1.skillLevel} /> {team.PlayerH1.userTag}
        </div>
        <div>
          <RankIcon skillLevel={team.PlayerH2.skillLevel} /> {team.PlayerH2.userTag}
        </div>
        <div>
          <RankIcon skillLevel={team.PlayerH3.skillLevel} /> {team.PlayerH3.userTag}
        </div>
        <div>
          <RankIcon skillLevel={team.PlayerH4.skillLevel} /> {team.PlayerH4.userTag}
        </div>
        <div>
          <RankIcon skillLevel={team.PlayerH5.skillLevel} /> {team.PlayerH5.userTag}
        </div>
      </div>
    </div>
  );
}

export default TeamList;
