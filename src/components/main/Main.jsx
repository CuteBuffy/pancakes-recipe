export default function Main() {
  return (
    <>
      <section className="description">
        <div className="container description__container">
          <h1 className="description__title">опис страви</h1>
          <span>
            Розпочати день із пухких яскраво-зелених панкейків зі{" "}
            <a href="https://rud.ua/products/frozen/vegetables/shpynat-podribnenyi/">
              шпинатом
            </a>{" "}
            означає отримати заряд енергії та настрою на цілий день.
          </span>
          <span>
            Замініть звичні бутерброди цими пишними оладками — завдяки шпинату й
            особливій пористій текстурі, що дозволяє добре вбирати соуси, вони
            неймовірно соковиті та смачні. А їхній насичений аромат і приємний
            «весняний» колір так і вабить до столу.
          </span>
          <span>
            Ситні панкейки зі шпинатом легко стануть частиною здорового меню,
            адже листя шпинату містить велику кількість вітамінів, білків,
            клітковини, заліза та зберігає свої корисні властивості навіть після
            теплової обробки.
          </span>
          <span>
            Для рівномірного кольору панкейків шпинат подрібнюють у блендері до
            однорідності. Борошно додають невеликими порціями, аби уникнути
            утворення грудочок та домогтися бажаної консистенції тіста. Воно
            повинно бути в міру густим, але при цьому досить швидко стікати з
            ложки.
          </span>
        </div>
      </section>

      <section className="main">
        <div className="container main__container">
          <h1 className="main__title">рум'яно-зелені панкейки зі шпинатом</h1>
          <span>
            Довго смажити шпинатні панкейки не потрібно — щойно на поверхні
            з'являться бульбашки, перевертайте й підсмажуйте з іншого боку.
            Легка золотиста скоринка означає, що панкейки готові.
          </span>
          <span>
            Подавайте зі сметаною, вершковим соусом чи густим йогуртом.
            Доповнити страву можна свіжими овочами, м'ясом або шматочком
            слабосоленої сьомги.
          </span>
          <div className="main__cook-info">
            <div className="clock">
              <svg
                width={"70px"}
                height={"70px"}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"
                  fill="#f39135"
                ></path>
              </svg>
              <p>30 хвилин</p>
            </div>
            <div className="mitten">
              <svg
                width={"70px"}
                height={"70px"}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  d="M351.1 416H63.99c-17.6 0-31.1 14.4-31.1 31.1l.0026 31.1C31.1 497.6 46.4 512 63.1 512h288c17.6 0 32-14.4 32-31.1l-.0049-31.1C383.1 430.4 369.6 416 351.1 416zM425 206.9c-27.25-22.62-67.5-19-90.13 8.25l-20.88 25L284.4 111.8c-18-77.5-95.38-125.1-172.8-108C34.26 21.63-14.25 98.88 3.754 176.4L64 384h288l81.14-86.1C455.8 269.8 452.1 229.5 425 206.9z"
                  fill="#f39a35"
                ></path>
              </svg>
              <p>легко</p>
            </div>
            <div className="bell">
              <svg
                width={"70px"}
                height={"70px"}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  d="M280 145.3V112h16C309.3 112 320 101.3 320 88S309.3 64 296 64H215.1C202.7 64 192 74.75 192 87.1S202.7 112 215.1 112H232v33.32C119.6 157.3 32 252.4 32 368h448C480 252.4 392.4 157.3 280 145.3zM488 400h-464C10.75 400 0 410.7 0 423.1C0 437.3 10.75 448 23.1 448h464c13.25 0 24-10.75 24-23.1C512 410.7 501.3 400 488 400z"
                  fill="#f39135"
                ></path>
              </svg>
              <p>сніданок</p>
            </div>
          </div>
        </div>
      </section>

      <section className="recipe">
        <div className="container recipe__container">
          <div className="recipe__ingiridients-container">
            <img src="./imgs/pancake.jpg" alt="" />
            <div className="table__container">
              <h3 className="recipe__ingridients">інгредієнти</h3>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <a href="https://rud.ua/products/frozen/vegetables/shpynat-podribnenyi/">
                        Шпинат ТМ «Рудь»
                      </a>
                    </td>
                    <td>150 г</td>
                  </tr>
                  <tr>
                    <td>Борошно пшеничне</td>
                    <td>250 г</td>
                  </tr>
                  <tr>
                    <td>Яйця</td>
                    <td>2 шт.</td>
                  </tr>
                  <tr>
                    <td>
                      <a href="https://rud.ua/products/dairy/milk/moloko-490g/">
                        Молоко ТМ «Рудь»
                      </a>
                    </td>
                    <td>150 мл</td>
                  </tr>
                  <tr>
                    <td>Рослинна олія</td>
                    <td>1 ст. л.</td>
                  </tr>
                  <tr>
                    <td>Сіль</td>
                    <td>0,5 ч. л.</td>
                  </tr>
                  <tr>
                    <td>Цукор</td>
                    <td>1 ч. л.</td>
                  </tr>
                  <tr>
                    <td>
                      <a href="https://rud.ua/products/dairy/sour_cream/smetana-zhyrna-250g/">
                        Сметана ТМ «Рудь»
                      </a>
                    </td>
                    <td>200 г</td>
                  </tr>
                  <tr>
                    <td>Сода</td>
                    <td>дрібка</td>
                  </tr>
                  <tr>
                    <td>Розпушувач</td>
                    <td>1 ч. л.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="recipe__preparing">
            <h2 className="recipe__preparing-title">приготування</h2>
            <span>
              1. У великій посудині перемішуємо сметану, яйця, олію, сіль та
              цукор.
            </span>
            <span>
              2.{" "}
              <a href="https://rud.ua/products/frozen/vegetables/shpynat-podribnenyi/">
                Шпинат
              </a>{" "}
              розморожуємо, збиваємо у блендері до однорідності, разом із
              молоком додаємо до яєчно-сметанної маси.
            </span>
            <span>
              3. Просіюємо борошно, змішуємо з розпушувачем та дрібкою соди.
              Додаємо до шпинатної суміші.
            </span>
            <span>
              4. На розігріту сковороду невеликими острівцями викладаємо тісто.
              Підсмажуємо з двох боків до готовності.
            </span>
            <i className="recipe__preparing-final">
              Готові панкейки викладаємо на тарілки, даємо кілька хвилин
              охолонути. Поливаємо сметанкою та смакуємо теплими.
            </i>
          </div>
        </div>
      </section>
    </>
  );
}