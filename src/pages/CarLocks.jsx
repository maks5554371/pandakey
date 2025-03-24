import React from 'react';
import '../styles/style-page.css';

const CarLocks = () => {
    return (
        <div className="carlocks-page">
            <div className="service-header-carlocks">
                <h1>Вскрытие и ремонт автозамков</h1>
            </div>
            
            <div className="container">
                <div className="service-content">
                    <div className="service-description">
                        <p className="lead">
                            В современном ритме жизни случаются ситуации, когда вы не можете открыть дверь или провернуть замок зажигания. Не пытайтесь решить проблему самостоятельно – доверьте это профессионалам.
                        </p>
                        <p>
                            <strong>Важно:</strong> Самостоятельные попытки вскрытия могут привести к серьезным повреждениям замка и увеличению стоимости ремонта.
                        </p>
                    </div>

                    <div className="service-features">
                        <h2>Наши услуги:</h2>
                        <div className="features-grid">
                            <div className="feature-card">
                                <i className="fas fa-door-open"></i>
                                <h3>Вскрытие авто</h3>
                                <p>Профессиональное вскрытие автомобиля без повреждений</p>
                            </div>
                            <div className="feature-card">
                                <i className="fas fa-key"></i>
                                <h3>Ремонт замков</h3>
                                <p>Ремонт замков дверей и зажигания</p>
                            </div>
                            <div className="feature-card">
                                <i className="fas fa-tools"></i>
                                <h3>Замена замков</h3>
                                <p>Установка новых замков при необходимости</p>
                            </div>
                            <div className="feature-card">
                                <i className="fas fa-clock"></i>
                                <h3>Срочный выезд</h3>
                                <p>Оперативный выезд специалиста на место</p>
                            </div>
                        </div>
                    </div>

                    <div className="warning-block">
                        <h3>⚠️ Не пытайтесь вскрыть автомобиль самостоятельно!</h3>
                        <p>
                            Использование подручных средств (отвертки, пилки, шпильки) может привести к:
                        </p>
                        <ul>
                            <li>Повреждению замка</li>
                            <li>Царапинам на кузове</li>
                            <li>Увеличению стоимости ремонта</li>
                        </ul>
                    </div>

                    <div className="service-cta">
                        <h2>Не можете открыть автомобиль?</h2>
                        <p>Мы готовы помочь в любое время!</p>
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

export default CarLocks;