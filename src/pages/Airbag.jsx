import React from 'react';
import '../styles/style-page.css';

const Airbag = () => {
    return (
        <div className="airbag-page">
            <div className="service-header-airbag">
                <h1>Ремонт подушек безопасности</h1>
            </div>
            
            <div className="container">
                <div className="service-content">
                    <div className="service-description">
                        <p className="lead">
                            После срабатывания подушки безопасности во внутренней памяти прописывается информация о столкновении и загорается датчик подушки безопасности. Система не будет работать, пока ошибка не будет устранена.
                        </p>
                        <p>
                            <strong>Важно:</strong> Если на панели горит лампочка подушки безопасности, ваша система сигнализирует о ошибке Airbag и требует диагностики.
                        </p>
                    </div>

                    <div className="service-features">
                        <h2>Наши услуги включают:</h2>
                        <div className="features-grid">
                            <div className="feature-card">
                                <i className="fas fa-tools"></i>
                                <h3>Ремонт Airbag</h3>
                                <p>Восстановление и ремонт подушек безопасности</p>
                            </div>
                            <div className="feature-card">
                                <i className="fas fa-microchip"></i>
                                <h3>Ремонт SRS</h3>
                                <p>Диагностика и ремонт блоков SRS</p>
                            </div>
                            <div className="feature-card">
                                <i className="fas fa-laptop-code"></i>
                                <h3>Диагностика</h3>
                                <p>Компьютерная диагностика системы безопасности</p>
                            </div>
                            <div className="feature-card">
                                <i className="fas fa-sync"></i>
                                <h3>Перепрошивка</h3>
                                <p>Перепрошивка и сброс памяти Airbag SRS</p>
                            </div>
                        </div>
                    </div>

                    <div className="service-cta">
                        <h2>Проблемы с подушками безопасности?</h2>
                        <p>Доверьте ремонт профессионалам</p>
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

export default Airbag;