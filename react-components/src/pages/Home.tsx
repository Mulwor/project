import React from 'react';
import './index.css';
import { Search } from '../components/Search';
import { Cards } from '../components/Cards';
import filik from '../data/index.json';

export class Home extends React.Component {
  render = () => (
    <div>
      <h2>Дом, милый дом!</h2>
      <Search />

      {filik.map((codes, i) => {
        return (
          <Cards
            key={i}
            name={codes.name}
            calories={codes.calories}
            protein={codes.protein}
            portion={codes.portion}
            photo={codes.photo}
          />
        );
      })}
    </div>
  );
}
