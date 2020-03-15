import React from 'react';
//import '../styles/styleHeader.less';



function Header(){

   
   return (
    <header>
      <div className="wrapper-header-up">
        <ul className="header-up">
          <li className="technomart-link"><button id="technomart-link-up" >техномарт</button></li>
          <li className="header-up-element-input">
            <input id="search" className="input-search" placeholder="Поиск:"/>
            <label htmlFor="search" className="label-search"></label>
          </li>
          <li className="header-up-element-bookmarks" value=" Закладки:">
            Закладки:&nbsp;
            <div className="header-bookmark-value">0</div>
          </li>
          <li className="header-up-element-cart">
            Корзина:&nbsp;
            <div className="header-cart-value">0</div>
          </li>
          <li className="button-create-order">
            <a href="#">Оформить заказ</a>
          </li>
        </ul>
      </div>
      <div className="wrapper-header-middle">
        <h1 className="header-middle-element-left">
          <p className="header-title">
            Интернет-магазин<br />
            строительных материалов<br />
            и инструментов для ремонта
          </p>
        </h1>
        <div className="header-middle-element-tel">
          <a className="input-tel" href="tel:+78125550555">+7 (812) 555-05-55</a>
          <p className="header-adress">г. Санкт-Петербург, ул. Б. Конюшенная, д. 19/8</p>
        </div>
        <div id="id-header-middle-element-right" className="header-middle-element-right">
          <button className="button-login">
            <img className="button-login-img" src="./img/icon/icon_login.png" alt="логин" />
            Войти
          </button>
          <button className="button-registration">Регистрация</button>
        </div>
        <div id="id-header-middle-element-right-form" className="header-middle-element-right-form">
          <input id="login" className="header-middle-element-right-input" placeholder="Логин"/>
          <label htmlFor="login" className="label-header-middle-element-right-input"></label>
          <ul>
            <li><a href="#">Мои заказы</a></li>
            <li><div className="header-middle-element-right-separator"></div></li>
            <li><a href="#">Личный кабинет</a></li>
          </ul>
        </div>
      </div>
      <nav>
        <ul className="header-nav-down">
          <li className="link-header-nav"><a href="#">Главная</a></li>
          <li className="link-header-nav"><a href="#">Компания</a></li>
          <li className="link-header-nav"><a href="#">Каталог</a></li>
          <li className="link-header-nav"><a href="#">Новости</a></li>
          <li className="link-header-nav"><a href="#">Спецпредложения</a></li>
          <li className="link-header-nav"><a href="#">Доставка</a></li>
          <li className="link-header-nav"><a href="#">Контакты</a></li>
        </ul>
      </nav>
    </header>
   )

  }

export default Header;