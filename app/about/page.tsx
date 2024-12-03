import Image from "next/image";
import "./index.css"
export default function Home() {
  return (
  <>
<div className="container">
        <h1 className="main-title">Обо мне</h1>
        <h2 className="section-title">Кто я?</h2>
        <p className="description">Дратути, меня зовут Нюта и мне 17 лет, я учусь на веб-разработчика.</p>

        <h2 className="section-title">Мои увлечения</h2>
        <p className="description">Я увлекаюсь вязанием, люблю компьютерные игры и шоппинг.</p>

        <h2 className="section-title">Интересные факты</h2>
        <ul className="description">
            <li>В Японии есть остров, обитатели которого – коты.</li>
            <li>В Австралии есть запрет на продажу хинкали.</li>
            <li>В Бельгии есть специальный закон, который защищает картофель фри как национальное блюдо.</li>
        </ul>
    </div>
</>
  );
}
