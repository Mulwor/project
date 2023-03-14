import React from 'react';
import './index.scss';
import loupe from '../../assets/loupe-svgrepo-com.svg';

type Unique = {
  [index: string]: string | number;
};

type State = {
  [index: string]: string | number;
};

export class Search extends React.Component<Unique, State> {
  constructor(props: Unique) {
    super(props);
    this.state = {
      value: localStorage.getItem('searchValue') || '',
    };
    this.handleChangeInput = this.handleChangeInput.bind(this);
  }

  handleChangeInput(event: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({
      value: event.target.value,
    });
  }

  componentWillUnmount(): void {
    localStorage.setItem('searchValue', `${this.state.value}`);
  }

  render = () => (
    <div className="input">
      <img className="loops" src={loupe} />
      <input
        value={this.state.value}
        onChange={this.handleChangeInput}
        className="search"
        type="search"
        id="search"
        placeholder="Поиск по карточкам ..."
      />
    </div>
  );
}
