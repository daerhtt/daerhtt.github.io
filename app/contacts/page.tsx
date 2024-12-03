import Image from "next/image";
import "./index.css"
export default function Home() {
  return (
 <div className="container">
        <h1 className="main-title">Контакты</h1>
        <div className="contact-info">
            <h2>Свяжитесь со мной</h2>
            <p>Я всегда рада вашим вопросам и предложениям!</p>
            <p><strong>Email:</strong> daerhtt@gmail.com</p>
            <p><strong>Телеграм:</strong> t.me/daerhtt</p>
        </div>
        <div className="contact-form">
            <h2>Напишите мне</h2>
            <label htmlFor="name">Имя:</label><br/>
            <input type="text" id="name" name="name" required/>
            <br/>
            <br/>
            <label htmlFor="email">Email:</label><br/>
            <input type="email" id="email" name="email" required/>
            <br/><br/>
            <label htmlFor="message">Сообщение:</label><br/>
            <textarea id="message" name="message" required></textarea><br/><br/>
            <button type="submit">Отправить</button>
        </div>
    </div>
  );
}
