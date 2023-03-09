import React from 'react';
import './index.css';
import { Search } from '../components/Search';
import { Cards } from '../components/Cards';

export class Home extends React.Component {
  render = () => (
    <div>
      <h2>Дом, милый дом!</h2>
      <Search />
      <Cards />
    </div>
  );
}
