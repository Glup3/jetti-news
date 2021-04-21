import React from 'react';
import classNames from 'classnames';

import { GetMatchesQuery } from '../../generated/graphql';
import WinnerBadge from './WinnerBadge';
import TeamListPlayer from '../TeamListPlayer';

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
        <TeamListPlayer username={team.PlayerH1.userTag} rank={team.PlayerH1.skillLevel} id={team.PlayerH1.playerId} />
        <TeamListPlayer username={team.PlayerH2.userTag} rank={team.PlayerH2.skillLevel} id={team.PlayerH2.playerId} />
        <TeamListPlayer username={team.PlayerH3.userTag} rank={team.PlayerH3.skillLevel} id={team.PlayerH3.playerId} />
        <TeamListPlayer username={team.PlayerH4.userTag} rank={team.PlayerH4.skillLevel} id={team.PlayerH4.playerId} />
        <TeamListPlayer username={team.PlayerH5.userTag} rank={team.PlayerH5.skillLevel} id={team.PlayerH5.playerId} />
      </div>
    </div>
  );
}

export default TeamList;
