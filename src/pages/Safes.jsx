import React from 'react';
import '../styles/style-page.css';

const Safes = () => {
    return (
        <div className="safes-page">
            <div className="service-header-safes">
                <h1>Обслуживание сейфов</h1>
            </div>
            
            <div className="container">
                <div className="service-content">
                    <div className="service-description">
                        <p className="lead">
                            Предоставляем полный спектр услуг по обслуживанию сейфов любой сложности. От смены кодов до аварийного вскрытия - мы готовы помочь в любой ситуации.
                        </p>
                    </div>

                    <div className="service-features">
                        <h2>Наши услуги:</h2>
                        <div className="features-grid">
                            <div className="feature-card">
                                <i className="fas fa-key"></i>
                                <h3>Работа с кодами</h3>
                                <p>Смена кодов на электронных и механических сейфах</p>
                            </div>
                            <div className="feature-card">
                                <i className="fas fa-copy"></i>
                                <h3>Дубликаты ключей</h3>
                                <p>Изготовление копий и восстановление утерянных ключей</p>
                            </div>
                            <div className="feature-card">
                                <i className="fas fa-lock"></i>
                                <h3>Замена замков</h3>
                                <p>Изменение конфигурации и установка новых замков</p>
                            </div>
                            <div className="feature-card">
                                <i className="fas fa-door-open"></i>
                                <h3>Вскрытие</h3>
                                <p>Аварийное вскрытие при утере ключей и кодов</p>
                            </div>
                        </div>
                    </div>

                    <div className="service-buyout">
                        <h2>Выкуп сейфов</h2>
                        <p>Мы покупаем:</p>
                        <ul className="buyout-list">
                            <li>Неисправные сейфы</li>
                            <li>Сейфы с утерянными ключами и кодами</li>
                            <li>Ненужные сейфы</li>
                        </ul>
                        <p className="buyout-note">
                            <i className="fas fa-truck"></i> Вывоз осуществляем самостоятельно
                        </p>
                    </div>

                    <div className="service-cta">
                        <h2>Нужна помощь с сейфом?</h2>
                        <p>Свяжитесь с нами для консультации</p>
                        <div className="cta-buttons">
                            <a href="tel:+77017266601" className="cta-button phone">
                                <i className="fas fa-phone"></i> Позвонить
                            </a>
                            <a href="https://wa.me/77017266601" className="cta-button whatsapp">
                                <i className="fab fa-whatsapp"></i> WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Safes;