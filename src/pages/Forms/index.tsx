import React, { FormEvent } from 'react';
import './index.scss';

export class Form extends React.Component {
  firstname: React.RefObject<HTMLInputElement>;
  secondname: React.RefObject<HTMLInputElement>;
  email: React.RefObject<HTMLInputElement>;
  country: React.RefObject<HTMLSelectElement>;
  gender: React.RefObject<HTMLSelectElement>;
  date: React.RefObject<HTMLInputElement>;
  photo: React.RefObject<HTMLInputElement>;
  agree: React.RefObject<HTMLInputElement>;

  constructor(props: Record<string, string>) {
    super(props);
    this.firstname = React.createRef();
    this.secondname = React.createRef();
    this.email = React.createRef();
    this.country = React.createRef();
    this.gender = React.createRef();
    this.date = React.createRef();
    this.photo = React.createRef();
    this.agree = React.createRef();
  }

  handleSubmit(event: FormEvent<HTMLFormElement>) {
    console.log('Проверка вывода имени в консоль: ' + this.firstname.current!.value);
    console.log('Проверка вывода фамилии в консоль: ' + this.secondname.current!.value);
    console.log('Проверка вывода эмейл в консоль: ' + this.email.current!.value);

    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h2>Форма</h2>

        <div>Заполните данную форму, чтобы увидеть свою карточку</div>

        <form className="form" onSubmit={(event) => this.handleSubmit(event)}>
          <div className="item">
            <label className="labels">
              Firstname:
              <input type="text" id="name" className="inputForms" ref={this.firstname} />
            </label>
          </div>

          <div className="item">
            <label className="labels">
              Secondname:
              <input type="text" id="surname" className="inputFormsS" ref={this.secondname} />
            </label>
          </div>

          <div className="item">
            <label className="labels">
              Email:
              <input
                type="email"
                name="email"
                id="email"
                className="inputFormsS"
                ref={this.email}
              />
            </label>
          </div>

          <div>
            <label className="country">
              Where are you from:
              <select className="choose" ref={this.country}>
                <option value="denmark">Denmark</option>
                <option value="russia">Russia</option>
                <option value="england">England</option>
                <option value="wales">Wales </option>
                <option value="united Kingdom">United Kingdom</option>
                <option value="belarus">Belarus</option>
                <option value="germany">Germany</option>
                <option value="belgium">Belgium</option>
                <option value="switzerland">Switzerland</option>
                <option value="albania">Albania</option>
                <option value="portugal">Portugal</option>
                <option value="azerbaijan">Azerbaijan</option>
                <option value="greece">Greece</option>
                <option value="serbia">Serbia</option>
              </select>
            </label>
          </div>

          <label className="gender">
            Your gender:
            <select className="you" ref={this.gender}>
              <option value="denmark">Men</option>
              <option value="Russia">Women</option>
              <option value="Russia">It</option>
            </select>
          </label>

          <div className="form-item" ref={this.date}>
            <label className="form-item-label">
              Your birthday in:
              <input type="date" ref={this.date} />
            </label>
          </div>

          <div className="form-item">
            <label className="form-item-label">
              Upload file
              <input type="file" ref={this.photo} />
            </label>
          </div>

          <div>
            <input type="checkbox" id="coding" name="interest" value="coding" ref={this.agree} />
            <label>Ваши данные будут использованы в умышленных целях и будут переданы в ФБР </label>
          </div>

          {/* Кнопка для создания карточки */}
          <button className="uniqiue__button button">Создать карточку</button>
        </form>
      </div>
    );
  }
}
