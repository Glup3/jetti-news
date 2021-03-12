import { useRouter } from 'next/router';
import React from 'react';
import { useGetMatchesQuery } from '../../generated/graphql';
import LoadingSpinner from '../LoadingSpinner';
import Pagination from '../Pagination/Pagination';
import MatchList from './MatchList';

const perPage = 5;

function HomeContainer() {
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
    return <LoadingSpinner />;
  }

  if (error) {
    return <div>ERROR {error}</div>;
  }

  const lastPage = Math.ceil(data.aggregateMatch.count._all / perPage);

  return (
    <>
      <MatchList matches={data.matches} />
      <div className="d-flex justify-content-center">
        <Pagination
          currentPage={pageNumber}
          hasNext={pageNumber + 1 <= lastPage}
          hasPrevious={pageNumber > 1}
          lastPage={lastPage}
        />
      </div>
    </>
  );
}

export default HomeContainer;
