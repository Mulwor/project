import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './index.css';

export class Layout extends React.Component {
  render = () => (
    <>
      <div className="header">
        <div className="header__wrapper">
          <h2 className="header__logotype">
            <Link to="/">In recognition of codes</Link>
          </h2>

          <div className="header__navigation">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </div>
        </div>
      </div>

      <Outlet />

      <footer className="container">
        Личность, которая этим занималась: Али Адыгезалли, на курсе реакт, ОРУ ___ 2023
      </footer>
    </>
  );
}
