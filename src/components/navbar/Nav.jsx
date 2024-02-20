
export default function Nav() {
  return(
    <>
      <nav className="navbar">
        <div className="container navbar__container">
          <a className="navbar__button" href="https://rud.ua/consumer/recipe/drugi-stravy/pankeiky-zi-shpynatom/#">всі матеріали</a>
          <ul className="navbar__links">
            <li><a href="https://rud.ua/consumer/recipe/">Рецепти</a></li>
            <li><a href="https://rud.ua/consumer/recipe/pershi-stravy/">Перші страви</a></li>
            <li><a href="https://rud.ua/consumer/recipe/drugi-stravy/">Другі страви</a></li>
            <li><a href="https://rud.ua/consumer/recipe/salaty-i-zakusky/">Салати та закуски</a></li>
            <li><a href="https://rud.ua/consumer/recipe/vupechka/">Випічка</a></li>
            <li><a href="https://rud.ua/consumer/recipe/tortu/">Торти</a></li>
            <li><a href="https://rud.ua/consumer/recipe/desertu/">Десерти</a></li>
            <li><a href="https://rud.ua/consumer/recipe/napitki/">Напої</a></li>
          </ul>
        </div>
      </nav>
    </>
  );
}