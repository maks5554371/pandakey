import React from 'react';
import '../styles/style-page.css';

const LostKeys = () => {
    return (
        <div className="lost-page">
            <div className="service-header-lost">
                <h1>Восстановление потерянных ключей</h1>
            </div>
            
            <div className="container">
                <div className="service-content">
                    <div className="service-description">
                        <p className="lead">
                            Потеря ключей от автомобиля может случиться с каждым. Не паникуйте - мы поможем решить эту проблему профессионально и оперативно.
                        </p>
                        <p>
                            <strong>Важное примечание:</strong> Для вашей безопасности услуга предоставляется только при наличии документов, подтверждающих право владения автомобилем.
                        </p>
                    </div>

                    <div className="service-features">
                        <h2>Наши услуги включают:</h2>
                        <div className="features-grid">
                            <div className="feature-card">
                                <i className="fas fa-car-side"></i>
                                <h3>Аварийное вскрытие</h3>
                                <p>Безопасное вскрытие автомобиля без повреждений</p>
                            </div>
                            <div className="feature-card">
                                <i className="fas fa-key"></i>
                                <h3>Изготовление ключа</h3>
                                <p>Создание нового ключа по замку автомобиля</p>
                            </div>
                            <div className="feature-card">
                                <i className="fas fa-microchip"></i>
                                <h3>Программирование чипа</h3>
                                <p>Настройка и программирование чип-ключа</p>
                            </div>
                            <div className="feature-card">
                                <i className="fas fa-tools"></i>
                                <h3>Ремонт замков</h3>
                                <p>Восстановление и ремонт замков при необходимости</p>
                            </div>
                        </div>
                    </div>

                    <div className="service-cta">
                        <h2>Потеряли ключи?</h2>
                        <p>Наши специалисты готовы помочь вам 24/7</p>
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

export default LostKeys;