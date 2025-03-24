import React from 'react';
import '../styles/contacts.css';

const Contacts = () => {
    return (
        <div className="container-contact">
            <div className="row justify-content-center">
                <div className="col-md-7">
                    <div className="card shadow" style={{ border: '2px solid #000' }}>
                        <div className="card-body text-center">
                            <h2 className="card-title mb-4">Наши контакты</h2>
                            <div className="contact-info">
                                <p className="fs-5 mb-3">
                                    <i className="fas fa-phone me-2"></i>
                                    <a href="tel:+77017266601" className="text-decoration-none text-dark">+7 (701) 726 66 01</a>
                                    <br />
                                    <i className="fas fa-phone me-2"></i>
                                    <a href="tel:+77077372411" className="text-decoration-none text-dark">+7 (707) 737 24 11</a>
                                </p>
                                <p className="fs-5 mb-4">
                                    <i className="fas fa-map-marker-alt me-2"></i>
                                    г. Алматы, 12мкр 37г
                                </p>
                                <div className="social-buttons">
                                    <a 
                                        href="https://wa.me/77017266601?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20" 
                                        className="btn btn-success btn-lg whatsapp-btn me-3"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="fab fa-whatsapp me-2"></i>
                                        Написать в WhatsApp
                                    </a>
                                    <a 
                                        href="https://t.me/pandakey_kz" 
                                        className="btn btn-primary btn-lg telegram-btn"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="fab fa-telegram me-2"></i>
                                        Написать в Telegram
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;