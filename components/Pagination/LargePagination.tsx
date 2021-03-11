import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import PageLink from './PageLink';

const displayAmount = 3;

interface LargePaginationProps {
  hasPrevious: boolean;
  hasNext: boolean;
  currentPage: number;
  lastPage: number;
}

function LargePagination({ hasPrevious, hasNext, currentPage, lastPage }: LargePaginationProps) {
  return (
    <>
      <li className={classNames('page-item', { active: !hasPrevious })}>
        <Link passHref href="/">
          <a className="page-link">1</a>
        </Link>
      </li>

      {currentPage > displayAmount && (
        <li className={classNames('page-item disabled')}>
          <span className="page-link">...</span>
        </li>
      )}

      {currentPage <= displayAmount &&
        [...Array(displayAmount - 1)].map((_, i) => {
          const page = 2 + i;

          return <PageLink key={page} page={page} currentPage={currentPage} />;
        })}

      {currentPage > displayAmount &&
        currentPage < lastPage - displayAmount &&
        [...Array(displayAmount)].map((_, i) => {
          const page = currentPage + i;

          return <PageLink key={page} page={page} currentPage={currentPage} />;
        })}

      {currentPage < lastPage - displayAmount && (
        <li className={classNames('page-item disabled')}>
          <span className="page-link">...</span>
        </li>
      )}

      {currentPage + displayAmount >= lastPage &&
        [...Array(displayAmount)].map((_, i) => {
          const page = lastPage - displayAmount + i;

          return <PageLink key={page} page={page} currentPage={currentPage} />;
        })}

      <li className={classNames('page-item', { active: !hasNext })}>
        <Link passHref href={`/?page=${lastPage}`}>
          <a className="page-link">{lastPage}</a>
        </Link>
      </li>
    </>
  );
}

export default LargePagination;
