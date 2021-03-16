import React from 'react';
import classNames from 'classnames';

import { GetRecentAndWonMatchesFromPlayerQuery } from '../../generated/graphql';
import HeroTeamListPlayer from './HeroTeamListPlayer';

interface TeamListProps {
  team: GetRecentAndWonMatchesFromPlayerQuery['matches'][number]['Team1'];
  username: string;
}

function HeroTeamList({ team, username }: TeamListProps) {
  return (
    <div className="col-sm">
      <div>
        <h2 className={classNames('d-inline-block')}>Team {team.teamName}</h2>
      </div>
      <div className="text-medium">
        <HeroTeamListPlayer
          username={team.PlayerH1.userTag}
          rank={team.PlayerH1.skillLevel}
          isSpecial={team.PlayerH1.userTag == username}
        />
        <HeroTeamListPlayer
          username={team.PlayerH2.userTag}
          rank={team.PlayerH2.skillLevel}
          isSpecial={team.PlayerH2.userTag == username}
        />
        <HeroTeamListPlayer
          username={team.PlayerH3.userTag}
          rank={team.PlayerH3.skillLevel}
          isSpecial={team.PlayerH3.userTag == username}
        />
        <HeroTeamListPlayer
          username={team.PlayerH4.userTag}
          rank={team.PlayerH4.skillLevel}
          isSpecial={team.PlayerH4.userTag == username}
        />
        <HeroTeamListPlayer
          username={team.PlayerH5.userTag}
          rank={team.PlayerH5.skillLevel}
          isSpecial={team.PlayerH5.userTag == username}
        />
      </div>
    </div>
  );
}

export default HeroTeamList;
