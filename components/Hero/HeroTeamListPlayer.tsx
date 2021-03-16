import React from 'react';
import classNames from 'classnames';

import RankIcon from '../RankIcon';

interface HeroTeamListPlayerProps {
  rank: number;
  username: string;
  isSpecial?: boolean;
}

function HeroTeamListPlayer({ rank, username, isSpecial }: HeroTeamListPlayerProps) {
  return (
    <div>
      <RankIcon skillLevel={rank} />
      <span className={classNames('ms-1', { 'text-my-primary-light': isSpecial })}>{username}</span>
    </div>
  );
}

export default HeroTeamListPlayer;
