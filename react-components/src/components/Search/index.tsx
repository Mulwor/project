import React from 'react';
import './index.css';
import loupe from '../../assets/loupe-svgrepo-com.svg';

export class Search extends React.Component {
  state = {
    value: '',
  };

  // onInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
  // this.setState({ state: event.target.value });
  // };

  render = () => (
    <div className="input">
      <img className="loops" src={loupe} />
      <input className="search" type="search" id="search" placeholder="Поиск по карточкам" />
    </div>
  );
}
