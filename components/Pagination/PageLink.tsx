import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';

interface PageLinkProps {
  page: number;
  currentPage: number;
}

function PageLink({ page, currentPage }: PageLinkProps) {
  return (
    <li key={page} className={classNames('page-item', { active: page == currentPage })}>
      <Link passHref href={`/?page=${page}`}>
        <a className="page-link">{page}</a>
      </Link>
    </li>
  );
}

export default PageLink;
