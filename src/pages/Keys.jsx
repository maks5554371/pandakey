import React from 'react';
import '../styles/style-page.css';

const Keys = () => {
    return (
        <div className="keys-page">
            <div className="service-header-key">
                <h1>Изготовление ключей</h1>
            </div>
            
            <div className="container">
                <div className="service-content">
                    <div className="service-description">
                        <p className="lead">
                            Мы предлагаем Вам изготовление ключей различной сложности. Мы используем копировальные машины итальянской компании <strong>Silca</strong>, а также <strong>заготовки</strong> этого производителя, что <b>гарантирует</b> хорошее качество получаемых копий ключей.
                        </p>
                        <p>
                            По вашему желанию будет выполнена копия ключа, либо произведено изготовление нового ключа по замку, в случае утери оригинала ключа.
                        </p>
                    </div>

                    <div className="service-features">
                        <h2>Наши услуги включают изготовление ключей для:</h2>
                        <div className="features-grid">
                            <div className="feature-card">
                                <i className="fas fa-home"></i>
                                <h3>Квартиры и дома</h3>
                                <p>Изготовление любых типов домашних ключей</p>
                            </div>
                            <div className="feature-card">
                                <i className="fas fa-car"></i>
                                <h3>Автомобиля</h3>
                                <p>Включая ключи с чипом</p>
                            </div>
                            <div className="feature-card">
                                <i className="fas fa-building"></i>
                                <h3>Офиса</h3>
                                <p>Для всех типов офисных замков</p>
                            </div>
                            <div className="feature-card">
                                <i className="fas fa-vault"></i>
                                <h3>Сейфа</h3>
                                <p>Изготовление ключей для сейфов любой сложности</p>
                            </div>
                        </div>
                    </div>

                    <div className="service-cta">
                        <h2>Нужен новый ключ?</h2>
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

export default Keys;