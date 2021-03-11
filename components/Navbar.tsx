import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import { useRouter } from 'next/router';

const routes = [
  { link: '/', name: 'Home' },
  { link: '/heroes', name: 'Heroes' },
];

function Navbar() {
  const { pathname } = useRouter();

  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link href="/" passHref>
              <a className="nav-link active navbar-brand">Jetti News</a>
            </Link>
          </li>
          {routes.map((route, i) => (
            <li key={i} className="nav-item">
              <Link href={route.link} passHref>
                <a className={classNames('nav-link', { active: pathname == route.link })}>{route.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
