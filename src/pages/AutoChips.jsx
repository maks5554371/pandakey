import React from 'react';
import '../styles/style-page.css';

const AutoChips = () => {
    return (
        <div className="chips-page">
            <div className="service-header-chips">
                <h1>Чипы для автозапуска</h1>
            </div>
            
            <div className="container">
                <div className="service-content">
                    <div className="service-description">
                        <p className="lead">
                        В условиях холодных зим установка автозапуска стала необходимостью. Однако использование оригинального ключа в обходчике создает риск угона автомобиля. Мы предлагаем безопасное решение - изготовление отдельного чипа для автозапуска.
                        </p>
                        <p>
                        <strong>Важно знать:</strong> С 1998 года большинство автомобилей оснащены иммобилайзером, требующим наличие чипа-транспондера в ключе для запуска двигателя. Мы рекомендуем использовать только чип в обходчике сигнализации, без металлической части ключа, что значительно повышает безопасность вашего автомобиля.
                        </p>
                    </div>

                    <div className="service-features">
                        <h2>Преимущества использования отдельного чипа:</h2>
                        <div className="features-grid">
                            <div className="feature-card">
                                <i className="fas fa-shield-alt"></i>
                                <h3>Безопасность</h3>
                                <p>Защита от угона даже при доступе к обходчику</p>
                            </div>
                            <div className="feature-card">
                                <i className="fas fa-car-alt"></i>
                                <h3>Универсальность</h3>
                                <p>Подходит для большинства марок автомобилей</p>
                            </div>
                            <div className="feature-card">
                                <i className="fas fa-tools"></i>
                                <h3>Профессионализм</h3>
                                <p>Изготовление чипов на специальном оборудовании</p>
                            </div>
                            <div className="feature-card">
                                <i className="fas fa-check-circle"></i>
                                <h3>Гарантия</h3>
                                <p>Проверка работоспособности перед выдачей</p>
                            </div>
                        </div>
                    </div>

                    <div className="service-cta">
                        <h2>Нужен чип для автозапуска?</h2>
                        <p>Свяжитесь с нами для консультации и заказа услуги</p>
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

export default AutoChips;