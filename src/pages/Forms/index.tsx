import React from 'react';
import './index.scss';

export class Form extends React.Component {
  render() {
    return (
      <div>
        <h2>Форма</h2>
        <div>Заполните данную форму, чтобы увидеть свою карточку</div>
        <form className="form">
          {/* Введите ваше полное имя */}
          <label className="labels">
            Firstname: <input type="text" className="inputForms" />
          </label>
          <label className="labels">
            Secondname: <input type="text" className="inputFormsS" />
          </label>
          {/* Дата рождения */}
          {/* Откуда ты родом*/}
          <label className="country">
            Where are you from:
            <select className="choose">
              <option value="denmark">Denmark</option>
              <option value="Russia">Russia</option>
              <option value="England">England</option>
              <option value="Wales">Wales </option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="Belarus">Belarus</option>
              <option value="Germany">Germany</option>
              <option value="Belgium">Belgium</option>
              <option value="Switzerland">Switzerland</option>
              <option value="Albania">Albania</option>
              <option value="Portugal">Portugal</option>
              <option value="Azerbaijan">Azerbaijan</option>
              <option value="Greece">Greece</option>
              <option value="Serbia">Serbia</option>
            </select>
          </label>
          {/* Чекбокс с выбором пола */}
          <label className="man">
            Your gender:
            <select className="you">
              <option value="denmark">Men</option>
              <option value="Russia">Women</option>
              <option value="Russia">It</option>
            </select>
          </label>
          {/* ? Добавление картинки*/}
          {/* Чекбокс с согласием */}
          <div>
            <input type="checkbox" id="coding" name="interest" value="coding" />
            <label>Ваши данные будут использованы в умышленных целях и будут переданы в ФБР </label>
          </div>
          {/* Кнопка для создания карточки */}
          <button className="uniqiue__button button">Создать карточку</button>
        </form>
      </div>
    );
  }
}
