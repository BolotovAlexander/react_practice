import React from 'react';


function Footer(){

   
  return (
    <footer>
      <div className="footer-up">
        <nav className="footer-up-nav-up">
          <button id="technomart-link-down" className="technomart-link-footer">техномарт</button>
          <ul>
            <li><a href="#">Компания</a></li>
            <li><a href="#">Новости</a></li>
            <li><a href="#">Каталог</a></li>
            <li><a href="#">Доставка</a></li>
            <li><a href="#">Контакты</a></li>
          </ul>
        </nav>
        
        <nav className="footer-up-nav-down">
          <address className="footer-up-adress">
              г. Санкт-Петербург, ул. Б. Конюшенная, д. 19/8<br />
              <a className="input-tel" href="tel:+7(812)5550555">+7 (812) 555-05-55</a>
          </address>
          <ul>
            <li><a href="#">Материалы</a></li>
            <li><a href="#">Техника</a></li>
            <li><a href="#">Инструмент</a></li>
            <li><a href="#">Спецпредложения</a></li>
          </ul>
        </nav>
      </div>
      <div className="wrapper-footer-down">
        <div className="footer-down">
          <div className="footer-down-text">
            <p>&copy 2010-2017 Компания &laquoТехномарт&raquo<br/>
            Все права защищены</p>
          </div>
          <nav>
              <ul>
                <li className="social-network">
                  <a href="#vkontakte" style={{ color: 'white' }}>
                    <img src="%PUBLIC_URL%/src/styles/img/icon/icon_vk.png" alt="VK" />
                  </a>
                </li>
                <li className="social-network">
                  <a href="https://www.facebook.com/htmlacademy" style={{ color: 'white' }}>
                    <img src="./img/icon/icon_fb.png" alt="f" />
                  </a>
                </li>
                <li className="social-network">
                  <a href="https://www.instagram.com/htmlacademy/" style={{ color: 'white' }}>
                    <img src="./img/icon/icon_insta.png" alt="Inst" />
                  </a>
                </li>
              </ul>
              <div className="footer-mail-us">
                Обратная связь:<br />
                <a href="mailto:mail@htmlacademy.ru">mail@htmlacademy.ru</a>
              </div>
              <div className="footer-our-link">
                Разработано -<br />
                <a href="http://htmlacademy.ru">htmlacademy.ru</a>
              </div>
          </nav>
        </div>
      </div>
    </footer>
  )

 }

export default Footer;