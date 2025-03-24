import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/home.css';

const Home = () => {
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
        window.scrollTo(0, 0);
    };
    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        pauseOnHover: false,
        arrows: false
    };
    
    return (
        <div className="home">
            <section className="hero">
                <Slider {...sliderSettings} className="hero-slider">
                    <div className="slide slide1"></div>
                    <div className="slide slide2"></div>
                    <div className="slide slide3"></div>
                </Slider>
                <div className="hero-content">
                    <h1>PandaKey</h1>
                    <p>Профессиональные услуги по изготовлению ключей и автомобильной безопасности</p>
                    <Link to="/contacts" className="cta-button">Связаться с нами</Link>
                </div>
            </section>

            {/* Секция услуг */}
            <section className="services">
                <div className="container">
                    <h2>Наши услуги</h2>
                    <div className="services-grid">
    <div className="service-card">
        <i className="fas fa-key"></i>
        <h3>Изготовление ключей</h3>
        <p>Профессиональное изготовление всех видов ключей</p>
        <button onClick={() => handleNavigate('/keys')} className="learn-more-btn">
                        Узнать подробнее
                    </button>
    </div>
    <div className="service-card">
        <i className="fas fa-microchip"></i>
        <h3>Запись чипов</h3>
        <p>Программирование и дублирование чип-ключей</p>
        <button onClick={() => handleNavigate('/autochips')} className="learn-more-btn">
                        Узнать подробнее
                    </button>
    </div>
    <div className="service-card">
        <i className="fas fa-tools"></i>
        <h3>Ремонт замков</h3>
        <p>Ремонт и обслуживание любых типов замков</p>
        <button onClick={() => handleNavigate('/lostkeys')} className="learn-more-btn">
                        Узнать подробнее
                    </button>
    </div>
    <div className="service-card">
        <i className="fas fa-laptop-code"></i>
        <h3>Диагностика автомобиля</h3>
        <p>Компьютерная диагностика всех систем автомобиля</p>
        <button onClick={() => handleNavigate('/diagnostic')} className="learn-more-btn">
                        Узнать подробнее
                    </button>
    </div>
    <div className="service-card">
        <i className="fas fa-car-battery"></i>
        <h3>Ремонт иммобилайзера</h3>
        <p>Восстановление и ремонт системы иммобилайзера</p>
        <button onClick={() => handleNavigate('/immobilizer')} className="learn-more-btn">
                        Узнать подробнее
                    </button>
    </div>
    <div className="service-card">
        <i className="fas fa-shield-alt"></i>
        <h3>Ремонт подушек безопасности</h3>
        <p>Диагностика и ремонт системы безопасности SRS</p>
        <button onClick={() => handleNavigate('/airbag')} className="learn-more-btn">
                        Узнать подробнее
                    </button>
    </div>
    <div className="service-card">
        <i className="fas fa-car-side"></i>
        <h3>Вскрытие и ремонт автозамков</h3>
        <p>Профессиональное вскрытие и ремонт замков автомобиля</p>
        <button onClick={() => handleNavigate('/carlocks')} className="learn-more-btn">
                        Узнать подробнее
                    </button>
    </div>
    <div className="service-card">
        <i className="fas fa-vault"></i>
        <h3>Сейфы</h3>
        <p>Обслуживание, ремонт и вскрытие сейфов</p>
        <button onClick={() => handleNavigate('/safes')} className="learn-more-btn">
                        Узнать подробнее
                    </button>
    </div>
    <div className="service-card">
        <i className="fas fa-door-closed"></i>
        <h3>Дверные замки</h3>
        <p>Установка и ремонт дверных замков любой сложности</p>
        <button onClick={() => handleNavigate('/doorlocks')} className="learn-more-btn">
                        Узнать подробнее
                    </button>
    </div>
</div>
                </div>
            </section>

            {/* Секция преимуществ */}
            <section className="features">
                <div className="container">
                    <h2>Почему выбирают нас</h2>
                    <div className="features-grid">
                        <div className="feature">
                            <i className="fas fa-clock"></i>
                            <h3>Быстрое обслуживание</h3>
                            <p>Выполняем работу в кратчайшие сроки</p>
                        </div>
                        <div className="feature">
                            <i className="fas fa-star"></i>
                            <h3>Опытные мастера</h3>
                            <p>Команда профессионалов с многолетним опытом</p>
                        </div>
                        <div className="feature">
                            <i className="fas fa-shield-alt"></i>
                            <h3>Гарантия качества</h3>
                            <p>Предоставляем гарантию на все виды работ</p>
                        </div>
                        
                    </div>
                </div>
            </section>

            {/* Секция призыва к действию */}
            <section className="cta">
                <div className="container">
                    <h2>Нужна помощь?</h2>
                    <p>Свяжитесь с нами прямо сейчас!</p>
                    <div className="cta-buttons">
                        <Link to="/contacts" className="cta-button">Контакты</Link>
                        <a href="https://wa.me/77017266601" className="cta-button whatsapp">
                            <i className="fab fa-whatsapp"></i> WhatsApp
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;