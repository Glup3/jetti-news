import React from 'react';
import MatchList from '../components/index/MatchList';

import { useGetMatchesQuery } from '../generated/graphql';

function Home() {
  const { data, error, loading } = useGetMatchesQuery({
    variables: {
      skip: 0,
      take: 5,
    },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>ERROR {error}</div>;
  }

  return (
    <div className="container my-2">
      <MatchList matches={data.matches} />
    </div>
  );
}

export default Home;
