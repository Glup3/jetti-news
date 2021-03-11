import React from 'react';
import { useRouter } from 'next/router';

import MatchList from '../components/index/MatchList';

import { useGetMatchesQuery } from '../generated/graphql';
import Pagination from '../components/Pagination/Pagination';

const perPage = 5;

function Home() {
  const router = useRouter();
  const { page } = router.query;

  let pageNumber = Number(page) || 0;

  if (pageNumber == 0) {
    pageNumber = 1;
  }

  const { data, error, loading } = useGetMatchesQuery({
    variables: {
      skip: (pageNumber - 1) * perPage,
      take: perPage,
    },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>ERROR {error}</div>;
  }

  const lastPage = Math.ceil(data.aggregateMatch.count._all / perPage);

  return (
    <div className="container my-2">
      <MatchList matches={data.matches} />
      <div className="d-flex justify-content-center">
        <Pagination
          currentPage={pageNumber}
          hasNext={pageNumber + 1 <= lastPage}
          hasPrevious={pageNumber > 1}
          lastPage={lastPage}
        />
      </div>
    </div>
  );
}

export default Home;
