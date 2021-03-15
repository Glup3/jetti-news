import React from 'react';
import { useGetPlayerQuery } from '../../generated/graphql';
import LoadingSpinner from '../LoadingSpinner';

interface HeroTitleProps {
  userId: number;
}

function HeroTitle({ userId }: HeroTitleProps) {
  const { data, loading, error } = useGetPlayerQuery({ variables: { id: userId } });

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <div>Error {error}</div>;
  }

  if (data.player == null) {
    return <h2>Player with ID {userId} not found!</h2>;
  }

  return <h2>{data.player.userTag}</h2>;
}

export default HeroTitle;
