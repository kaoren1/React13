import React from "react";
import './Footer.css';

const Footer = () => {
    return (
        <div className="Footer">
            <div className="sb_footer section_padding">
                <div className="sb_footer-links">
                    <div className="sb_footer-links_div">
                        <h4>Сайт</h4>
                        <a href="http://localhost:3000/">
                            <p>Главная</p>
                        </a>
                        <a href="http://localhost:3000/catalog">
                            <p>Каталог</p>
                        </a>
                        <a href="http://localhost:3000/favotites">
                            <p>Избранное</p>
                        </a>
                        <a href="http://localhost:3000/basket">
                            <p>Корзина</p>
                        </a>
                    </div>
                    <div className="sb_footer-links_div">
                        <h4>Интересные статьи</h4>
                        <a href="https://delta-game.ru/news/kompyuter-dlya-gray-zone-warfare/">
                            <p>Компьютер для Gray Zone Warfare</p>
                        </a>
                        <a href="https://delta-game.ru/news/kompyuter-dlya-frostpunk-2/">
                            <p>Компьютер для Frostpunk 2</p>
                        </a>
                        <a href="https://delta-game.ru/news/kompyuter-dlya-sandland/">
                            <p>Компьютер для Sandland</p>
                        </a>
                        <a href="https://delta-game.ru/news/kompyuter-dlya-indika/">
                            <p>Компьютер для INDIKA</p>
                        </a>
                    </div>

                    <div className="sb_footer-below">
                        <div className="sb_footer-copyright">
                            <p>
                              © 2002–2024 Компания Computer Shop. Все права защищены (но это не точно).
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
