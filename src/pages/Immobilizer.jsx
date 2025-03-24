import React from 'react';
import '../styles/style-page.css';

const Immobilizer = () => {
    return (
        <div className="immobilizer-page">
            <div className="service-header-immobilizer">
                <h1>Ремонт иммобилайзера</h1>
            </div>
            
            <div className="container">
                <div className="service-content">
                    <div className="service-description">
                        <p className="lead">
                            Иммобилайзер - это неотъемлемая часть системы охраны любого современного автомобиля. Сегодня штатная электронная противоугонная система присутствует практически во всех современных авто.
                        </p>
                        <p>
                            Основная противоугонная функция простейшего иммобилайзера - это блокировка электрических цепей автомобиля. При несоответствии кода хотя бы в одном из блоков, машина не будет работать.
                        </p>
                    </div>

                    <div className="service-features">
                        <h2>Наши услуги включают:</h2>
                        <div className="features-grid">
                            <div className="feature-card">
                                <i className="fas fa-tools"></i>
                                <h3>Ремонт и восстановление</h3>
                                <p>Ремонт иммобилайзеров и восстановление синхронизации</p>
                            </div>
                            <div className="feature-card">
                                <i className="fas fa-key"></i>
                                <h3>Работа с ключами</h3>
                                <p>Прописывание ключей и перепрограммирование БУ ECU</p>
                            </div>
                            <div className="feature-card">
                                <i className="fas fa-microchip"></i>
                                <h3>Чип-ключи</h3>
                                <p>Воссоздание и копирование чип-ключей</p>
                            </div>
                            <div className="feature-card">
                                <i className="fas fa-cog"></i>
                                <h3>Программирование</h3>
                                <p>Раскодирование блоков управления и восстановление IMMO</p>
                            </div>
                        </div>
                    </div>

                    <div className="service-advice">
                        <h2>Важные советы:</h2>
                        <ul className="advice-list">
                            <li>Имейте два активных чип-ключа: один при себе, другой дома</li>
                            <li>При утере ключа срочно перекодируйте систему</li>
                            <li>Не вешайте чип-ключ на общую связку с ключами</li>
                            <li>Доверяйте ремонт только квалифицированным специалистам</li>
                        </ul>
                    </div>

                    <div className="service-cta">
                        <h2>Нужна помощь с иммобилайзером?</h2>
                        <p>Свяжитесь с нашими специалистами</p>
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

export default Immobilizer;