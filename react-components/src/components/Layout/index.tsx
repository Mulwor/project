import React from 'react';
import { Link, Outlet, NavLink } from 'react-router-dom';
import './index.css';

export class Layout extends React.Component {
  render = () => (
    <>
      <header className="header">
        <div className="header__wrapper">
          <h2 className="header__logotype">
            <Link to="/"> In recognition of codes</Link>
          </h2>

          <div className="header__navigation">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About us</NavLink>
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
}
