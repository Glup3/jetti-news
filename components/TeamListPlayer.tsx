import React from 'react';
import Link from 'next/link';

import RankIcon from './RankIcon';
import styles from '../styles/links.module.scss';

interface TeamListPlayerProps {
  rank: number;
  username: string;
  isSpecial?: boolean;
  id: number;
}

function TeamListPlayer({ rank, username, isSpecial, id }: TeamListPlayerProps) {
  return (
    <div>
      <Link href={`/heroes/${id}`}>
        <a className={isSpecial ? styles.special : styles.normal}>
          <RankIcon skillLevel={rank} />
          <span className="ms-1">{username}</span>
        </a>
      </Link>
    </div>
  );
}

export default TeamListPlayer;
