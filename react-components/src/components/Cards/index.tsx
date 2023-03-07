import React from 'react';
import './index.css';

type TCard = {
  name: string;
  calories: string;
  protein: string;
  portion: string;
  photo: string;
};

export class Cards extends React.Component<TCard> {
  render() {
    return (
      <>
        <div className="containerOriing">
          <div className="card">
            <img src={this.props.photo} alt="Image" />
            <div className="container">
              <h4>
                <b>{this.props.name}</b>
              </h4>
              <p>{this.props.portion}</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
