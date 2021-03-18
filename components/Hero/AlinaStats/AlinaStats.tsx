import React from 'react';

import { useGetAlinaStatsQuery } from '../../../generated/graphql';
import LoadingSpinner from '../../LoadingSpinner';
import AlinaQuoteCard from './AlinaQuoteCard';
import AlinaStatsCard from './AlinaStatsCard';

interface HeroAlinaStatsCardProps {
  userId: number;
}

function AlinaStats({ userId }: HeroAlinaStatsCardProps) {
  const { data, loading, error } = useGetAlinaStatsQuery({ variables: { id: userId } });

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <div>Error {error}</div>;
  }

  return (
    <>
      <div className="col-sm-6 mb-2">
        <AlinaStatsCard data={data} />
      </div>
      <div className="col-sm-6 mb-2">
        <AlinaQuoteCard data={data} />
      </div>
    </>
  );
}

export default AlinaStats;
