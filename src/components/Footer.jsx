import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/footer.css';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h4>Контакты</h4>
                        <p>
                            <i className="fas fa-phone"></i> +7 (701) 726-66-01
                        </p>
                        <p>
                            <i className="fas fa-map-marker-alt"></i> г. Алматы, 12мкр 37г
                        </p>
                    </div>
                    
                    <div className="footer-section">
                        <h4>Навигация</h4>
                        <ul>
                            <li><Link to="/" onClick={scrollToTop}>Главная</Link></li>
                            <li><Link to="" onClick={scrollToTop}>Услуги</Link></li>
                            <li><Link to="/contacts">Контакты</Link></li>
                        </ul>
                    </div>
                    
                    <div className="footer-section">
                        <h4>Режим работы</h4>
                        <p>Пн-Сб: 9:00 - 18:00</p>
                        <p>Вс: Выходной</p>
                    </div>

                    <div className="footer-section">
                        <h4>Мы в соцсетях</h4>
                        <div className="social-links">
                            <a href="https://wa.me/77017266601?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-whatsapp"></i>
                            </a>
                            <a href="https://t.me/pandakey_kz" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-telegram"></i>
                            </a>
                        </div>
                    </div>
                </div>
                
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} PandaKey. Все права защищены.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;