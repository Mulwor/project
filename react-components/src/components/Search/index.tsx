import React from 'react';
import './index.css';
import loupe from '../../assets/loupe-svgrepo-com.svg';

export class Search extends React.Component {
  render = () => (
    <div className="input">
      <img className="loops" src={loupe} />
      <input className="search" type="search" id="search" placeholder="Поиск по карточкам" />
    </div>
  );
}
