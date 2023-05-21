import { useState } from "react";

import styles from "./About.module.css";

const About = () => {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [text, setText] = useState("Докладніше");

  const handleClick = () => {
    setIsDetailsOpen((prevState) => !prevState);
    setText((prevState) =>
      prevState === "Докладніше" ? "Показати менше" : "Докладніше"
    );
  };

  const isHidden = isDetailsOpen ? styles.details : null;

  return (
    <section>
      <div className={styles.container}>
        <article className={`${styles.article} ${isHidden}`}>
          <p>
            Інтернет-магазин дитячих товарів Бу-Бу - зона комфорту малюків і їх
            батьків. Наш асортимент розроблений в діапазоні "від народження до
            школи", завдяки чому кожен етап розвитку вашої дитини буде
            максимально правильним, а головне, цікавим і радісним.
          </p>
          <p>
            Товари для дітей - особлива категорія продукції, тому ми довіряємо
            тільки перевіреним виробникам та брендам, які давно і успішно
            представлені на світовому ринку. Магазин Бу-Бу є дистриб'ютором
            таких брендів: Anex, X-lander, Leonardo, Bebe Confort, Welldon,
            Huffy, Fun Time, Lexus Trike, Nino, Maltex, Ceba baby, X-rider, Play
            WOW, Miniland, Casato, Klups, Radir, Keenway, Adamex, Roan, Tako.
          </p>
          <p>
            На сайті інтернет магазину Бу-Бу ви можете купити товари для дітей
            абсолютно різних категорій, в залежності від потреб: дитячі коляски,
            дитяча кімната, стільці і шезлонги, все для годування, гігієна та
            догляд, автокрісла, дитячий транспорт, іграшки, дитячий одяг.
          </p>
        </article>
        <button className={styles.btn} onClick={handleClick}>
          {text}
        </button>
      </div>
    </section>
  );
};

export default About;
