import React from 'react';
import PageLink from './PageLink';

interface SmallPaginationProps {
  currentPage: number;
  lastPage: number;
}
function SmallPagination({ currentPage, lastPage }: SmallPaginationProps) {
  return (
    <>
      {[...Array(lastPage)].map((_, i) => {
        return <PageLink key={i + 1} currentPage={currentPage} page={i + 1} />;
      })}
    </>
  );
}

export default SmallPagination;
