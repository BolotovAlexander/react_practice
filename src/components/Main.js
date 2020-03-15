import React from 'react';
//import '../styles/styleHeader.less';



function Main(){

   
   return (
    <main id="main-index">
      <section className="wrapper-nav-goods-and-service">
        <h2 className="visually-hidden">Навигация по товарам и услугам</h2>
        <div className="wrapper-button-goods-and-service-up">
          <div className="button-materials">
            <h3>Материалы</h3>
            <button className="button-arround-slider">на любой вкус</button>
            <div className="new">new</div>
          </div>
          <div className="button-instuments">
            <h3>Инструмент</h3>
            <button className="button-arround-slider">на все случаи</button>
          </div>
          <div className="button-technics">
            <h3>Техника</h3>
            <button className="button-arround-slider">для стройки</button>
          </div>
        </div>

        <div  className="wrapper-button-goods-and-service-down">
          <div id="slider-main" className="slider">
          <div className="slider-text-div">
            <span></span>
            <p></p>
          </div>
          <div className="slider-button">
            <button className="slider-button-left"><img src="./img/icon/icon_left.png" alt="стрелка влево" /></button>
            <button className="slider-button-right"><img src="./img/icon/icon_right.png" alt="стрелка вправо" /></button>
          </div>
          <div className="wrapper-slider-down">
            <a id="slider-open-catalog">открыть каталог</a>
            <div className="slider-radio">
              <div className="slider-left-radio"></div>
              <div className="slider-right-radio"></div>
            </div>
          </div>
          </div>
          <div className="wrapper-button-goods-and-service-right">
            <div className="button-discounts">
              <h3>Скидки 50%</h3>
              <button className="button-arround-slider">на 350 товаров</button>
            </div>
            <div className="button-delivery">
              <h3>Доставка</h3>
              <button className="button-arround-slider">бесплатно</button>
            </div>
          </div>
        </div>
      </section>

      <article className="wrapper-popular-goods">
        <div className="popular-goods">
          <h2>популярные товары:</h2>
          <a href="#">все популярные товары</a>
        </div>
        <ul className="card" id="card-Goods-Ul-Index"></ul>
      </article>

      <article className="wrapper-popular-brands">
        <div className="popular-brands">
          <h2>популярные производители:</h2>
          <a href="#">все производители</a>
        </div>
        <ul className="card"  id="card-Brands-Ul-Index"></ul>
      </article>

      <section className="service">
        <h2 className="visually-hidden">Сервисы и доставка</h2>
        <section className="service-up">
          <span>сервисы</span>
          <p>
            Хороший интернет-магазин отличается от плохого не только ценами!<br />
            Мы стараемся изо всех сил, чтобы сделать ваши покупки приятными.
          </p>
        </section>
        <section className="service-down">
            <h3 className="visually-hidden">Сервисы</h3>
            <ul className="buttons-service">
              <li><button className="buttons-service-focus button-service-delivery" data-label='service-delivery'>Доставка</button></li>
              <li><button className="buttons-service-button button-service-guarantee" data-label='service-guarantee'>Гарантия</button></li>
              <li><button className="buttons-service-button button-service-credit" data-label='service-credit'>Кредит</button></li>
            </ul>
            <section className="wrapper-service-delivery">
              <div className="service-delivery">
                  <h3>доставка</h3>
                  <p>
                    Мы с удовольствием доставим ваш товар прямо<br />
                    к вашему подъезду совершенно бесплатно!<br />
                    Ведь мы неплохо заработаем,<br />
                    поднимая его на ваш этаж!
                  </p>
              </div>
              <div className="service-guarantee">
                <h3>гарантия</h3>
                <p>
                  Если купленный у нас товар поломается или заискрит,<br />
                  а также в случае пожара, спровоцированного его возгоранием,<br />
                  вы всегда можете быть уверенны в нашей гарантии. Мы обменяем<br />
                  сгоревший товар на новый.<br />
                  Дом уж восстановите как-нибудь сами.
                </p>
              </div>
              <div className="service-credit">
                  <h3>кредит</h3>
                  <p>
                    Залезть в долговую яму стало проще!<br />
                    Кредитные консультанты придут к вам на помощь.
                  </p>
              </div>
            </section>
        </section>
      </section>

      <div className="company-contacts">
        <h2 className="visually-hidden">О компании и контакты</h2>
        <section className="company-contacts-left">
          <h3>компания &laquoтехномарт&raquo</h3>
          <div className="paragraph">Настоящий мужской шоппинг начинается здесь! Огромный выбор товаров для ремонта и<br />
            строительства не оставит равнодушным любителей сэкономить на гастарбайтерах.
          </div>
          <div className="paragraph">Мы можем доставить ваш товар в самые отдалённые точки России!<br />
            Техномарт работает со многими транспортными компаниями:
          </div>
          <div className="delivery-company">Деловые линии</div>
          <div className="delivery-company">Автотрейдинг</div>
          <div className="delivery-company">ЖелДорЭкспедиция</div>
          <a href="#">подробнее о компании</a>
        </section>
        <section className="company-contacts-right">
          <h3>контакты</h3>
          <div className="paragraph">Вы можете забрать товар сами,<br />
            заехав в наш офис:
          </div>
          <button className="button-pop-up-map"><img src="./img/background/small map.jpg" alt="превью карты" /></button>
          <button className="button-write-us">заблудились? напишите нам!</button>
        </section>
        <section id="pop-up-map" className="pop-up-map-section">
          <div className="wrapper-pop-up-map-big">
            <img className="big-map-img" src="./img/background/big map2.jpg" alt="большая карта" />
            <button id="button-pop-up-big-map-close" className="button-close" value="Закрыть большую карту"></button>
        </div>
          
        </section>
        <form id="form-write-us" className="pop-up-write-us-form">
          <div className="wrapper-write-us-form">
            <div className="wrapper-pop-up-write-us-up">
              <button id="button-pop-up-write-us-form-close" className="button-close" value="Закрыть форму отправки сообщения"></button>
              <div className="pop-up-write-us-up-left">
                Ваше имя:
                <input className="input-pop-up-write-us-name" id="name" placeholder="Представьтесь, пожалуйста" />
              </div>
              <div className="pop-up-write-us-up-right">
                Ваш e-mail:
                <input className="input-pop-up-write-us-email"  id="email" placeholder="Для отправки ответа" />
              </div>
            </div>
            <div className="wrapper-pop-up-write-us-middle">
              Текст письма:
              <textarea className="input-pop-up-write-us-text" placeholder="В свободной форме"></textarea>
            </div>
            <div className="wrapper-pop-up-write-us-down">
              <button className="button-pop-up-write-us-send">ОТПРАВИТЬ</button>
            </div>
          </div> 
        </form>
      </div>
    </main>
   )

  }

export default Main;