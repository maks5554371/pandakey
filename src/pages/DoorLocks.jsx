import React from 'react';
import '../styles/style-page.css';

const DoorLocks = () => {
    return (
        <div className="doorlocks-page">
            <div className="service-header-doorlocks">
                <h1>Установка и ремонт дверных замков</h1>
            </div>
            
            <div className="container">
                <div className="service-content">
                    <div className="service-description">
                        <p className="lead">
                            Современный рынок предлагает огромное разнообразие дверей и замков. Мы обеспечиваем индивидуальный подход к каждому клиенту, подбирая оптимальное решение для ваших потребностей.
                        </p>
                    </div>

                    <div className="service-features">
                        <h2>Наши услуги:</h2>
                        <div className="features-grid">
                            <div className="feature-card">
                                <i className="fas fa-door-closed"></i>
                                <h3>Установка замков</h3>
                                <p>Профессиональная установка замков любой сложности</p>
                            </div>
                            <div className="feature-card">
                                <i className="fas fa-tools"></i>
                                <h3>Ремонт замков</h3>
                                <p>Ремонт и обслуживание всех типов замков</p>
                            </div>
                            <div className="feature-card">
                                <i className="fas fa-key"></i>
                                <h3>Замена цилиндров</h3>
                                <p>Широкий выбор цилиндров разного качества и ценовой категории</p>
                            </div>
                            <div className="feature-card">
                                <i className="fas fa-question"></i>
                                <h3>Консультация</h3>
                                <p>Профессиональная консультация по выбору замков</p>
                            </div>
                        </div>
                    </div>

                    <div className="info-block">
                        <h2>О замене цилиндров</h2>
                        <p>
                            Благодаря единому стандарту размера цилиндра, принятому еще в 19 веке, современные цилиндры полностью взаимозаменяемы. Мы предлагаем широкий выбор цилиндров:
                        </p>
                        <ul className="price-range">
                            <li>Бюджетные решения от местных производителей</li>
                            <li>Цилиндры среднего класса от проверенных брендов</li>
                            <li>Премиальные цилиндры с повышенной взломостойкостью</li>
                            <li>Цилиндры с защитой от копирования ключей</li>
                        </ul>
                    </div>

                    <div className="service-cta">
                        <h2>Нужна консультация?</h2>
                        <p>Свяжитесь с нами для подбора оптимального решения</p>
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

export default DoorLocks;