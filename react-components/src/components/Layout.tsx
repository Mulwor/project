import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export class Layout extends React.Component {
  render = () => (
    <>
      <div className="header">
        <div className="header__wrapper">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </div>

        <Outlet />

        <footer className="container">
          Личность, которая этим занималась: Али Адыгезалли, на курсе реакт, ОРУ ___ 2023
        </footer>
      </div>
    </>
  );
}
