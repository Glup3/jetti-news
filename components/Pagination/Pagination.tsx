import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import SmallPagination from './SmallPagination';
import LargePagination from './LargePagination';

interface PaginationProps {
  hasPrevious: boolean;
  hasNext: boolean;
  currentPage: number;
  lastPage: number;
}

function Pagination({ hasNext, hasPrevious, currentPage, lastPage }: PaginationProps) {
  return (
    <nav className="mt-4" aria-label="...">
      <ul className="pagination">
        <li className={classNames('page-item', { disabled: !hasPrevious })}>
          <Link passHref href={`/?page=${currentPage - 1}`}>
            <a className="page-link">&laquo;</a>
          </Link>
        </li>

        {lastPage < 10 ? (
          <SmallPagination currentPage={currentPage} lastPage={lastPage} />
        ) : (
          <LargePagination currentPage={currentPage} lastPage={lastPage} hasNext={hasNext} hasPrevious={hasPrevious} />
        )}

        <li className={classNames('page-item', { disabled: !hasNext })}>
          <Link passHref href={`/?page=${currentPage + 1}`}>
            <a className="page-link">&raquo;</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
