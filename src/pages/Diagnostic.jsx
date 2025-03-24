import React from 'react';
import '../styles/style-page.css';

const Diagnostics = () => {
    return (
        <div className="diagnostic-page">
            <div className="service-header-diagnostic">
                <h1>Компьютерная диагностика</h1>
            </div>
            
            <div className="container">
                <div className="service-content">
                    <div className="service-description">
                        <p className="lead">
                            Компьютерная диагностика двигателя автомобиля и других узлов позволяет точно определить причину неисправности и устранить ее с минимальными затратами. Она также выявляет проблемы, которые пока не дают о себе знать, но приведут к неполадкам в будущем.
                        </p>
                    </div>

                    <div className="service-features">
                        <h2>Мы проводим диагностику:</h2>
                        <div className="features-grid">
                            <div className="feature-card">
                                <i className="fas fa-car-battery"></i>
                                <h3>Двигателя</h3>
                                <p>Полная диагностика всех систем двигателя</p>
                            </div>
                            <div className="feature-card">
                                <i className="fas fa-shield-alt"></i>
                                <h3>Подушек безопасности</h3>
                                <p>Проверка систем безопасности автомобиля</p>
                            </div>
                            <div className="feature-card">
                                <i className="fas fa-cog"></i>
                                <h3>АКПП</h3>
                                <p>Диагностика автоматической коробки передач</p>
                            </div>
                            <div className="feature-card">
                                <i className="fas fa-thermometer-half"></i>
                                <h3>Дополнительных систем</h3>
                                <p>Круиз-контроль, климат-контроль, парковочные системы</p>
                            </div>
                        </div>
                    </div>

                    <div className="service-cta">
                        <h2>Нужна диагностика автомобиля?</h2>
                        <p>Свяжитесь с нами для консультации и записи</p>
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

export default Diagnostics;