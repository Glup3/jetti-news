import React from 'react';

import { GetRecentAndWonMatchesFromPlayerQuery } from '../../generated/graphql';
import TeamListPlayer from '../TeamListPlayer';

interface TeamListProps {
  team: GetRecentAndWonMatchesFromPlayerQuery['matches'][number]['Team1'];
  username: string;
}

function HeroTeamList({ team, username }: TeamListProps) {
  return (
    <div className="col-sm">
      <div>
        <h4 className="d-inline-block">Team {team.teamName}</h4>
      </div>
      <div className="text-medium">
        <TeamListPlayer
          username={team.PlayerH1.userTag}
          rank={team.PlayerH1.skillLevel}
          isSpecial={team.PlayerH1.userTag == username}
          id={team.PlayerH1.playerId}
        />
        <TeamListPlayer
          username={team.PlayerH2.userTag}
          rank={team.PlayerH2.skillLevel}
          isSpecial={team.PlayerH2.userTag == username}
          id={team.PlayerH2.playerId}
        />
        <TeamListPlayer
          username={team.PlayerH3.userTag}
          rank={team.PlayerH3.skillLevel}
          isSpecial={team.PlayerH3.userTag == username}
          id={team.PlayerH3.playerId}
        />
        <TeamListPlayer
          username={team.PlayerH4.userTag}
          rank={team.PlayerH4.skillLevel}
          isSpecial={team.PlayerH4.userTag == username}
          id={team.PlayerH4.playerId}
        />
        <TeamListPlayer
          username={team.PlayerH5.userTag}
          rank={team.PlayerH5.skillLevel}
          isSpecial={team.PlayerH5.userTag == username}
          id={team.PlayerH5.playerId}
        />
      </div>
    </div>
  );
}

export default HeroTeamList;
