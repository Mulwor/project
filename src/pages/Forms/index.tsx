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
          {/* Чекбокс с согласием */}
          {/* Чекбокс с выбором пола */}
          {/* ? Добавление картинки*/}
          {/* Кнопка для создания карточки */}
          <button className="uniqiue__button button">Создать карточку</button>
        </form>
      </div>
    );
  }
}
