import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/style.css';

const Nav = () => {
    useEffect(() => {
        const handleClickOutside = (event) => {
            const navbarCollapse = document.getElementById('navbarNav');
            const navbarToggler = document.querySelector('.navbar-toggler');
            if (navbarCollapse && !navbarCollapse.contains(event.target) && navbarToggler && !navbarToggler.contains(event.target)) {
                if (navbarCollapse.classList.contains('show')) {
                    navbarToggler.click();
                }
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <NavLink className="navbar-brand" to="/">
                    <img src="/photos/logo-fotor-2025031022326.png" alt="Logo" height="50" style={{ borderRadius: '20px' }} />
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item dropdown">
                            <NavLink className={({ isActive }) =>
                                isActive ? "nav-link dropdown-toggle active" : "nav-link dropdown-toggle"
                            } to="/services" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Услуги
                            </NavLink>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li>
                                    <NavLink className={({ isActive }) =>
                                        isActive ? "dropdown-item active" : "dropdown-item"
                                    } to="/keys">
                                        Изготовление ключей
                                    </NavLink>
                                </li>
                                <li><NavLink className={({ isActive }) =>
                                    isActive ? "dropdown-item active" : "dropdown-item"
                                } to="/autochips">Запись Чипов</NavLink></li>
                                <li>
                                    <NavLink className={({ isActive }) =>
                                        isActive ? "dropdown-item active" : "dropdown-item"
                                    } to="/lostkeys">
                                        Восстановление Ключей и Чипов
                                        </NavLink>
                                </li>
                                <li> 
                                    <NavLink className={({ isActive}) => 
                                    isActive ? "dropdown-item active" : "dropdown-item"
                                } to="/diagnostic">
                                    Компьютерная Диагностика
                                </NavLink>
                                </li>
                                <li>
                                    <NavLink className={({ isActive}) => 
                                    isActive ? "dropdown-item active" : "dropdown-item"
                                } to="/immobilizer">
                                    Ремонт Иммобилайзера
                                </NavLink>
                                </li>
                                <li>
                                    <NavLink className={({ isActive}) => 
                                    isActive ? "dropdown-item active" : "dropdown-item"
                                } to="/airbag">
                                    Ремонт Подушек безопасности
                                </NavLink>
                                </li>   
                                <li>
                                    <NavLink className={({ isActive}) => 
                                    isActive ? "dropdown-item active" : "dropdown-item"
                                } to="/carlocks">
                                    Вскрытие и Ремонт Автозамков
                                </NavLink>
                                </li>
                                <li>
                                    <NavLink className={({ isActive}) => 
                                    isActive ? "dropdown-item active" : "dropdown-item"
                                } to="/safes">
                                    Сейфы
                                </NavLink>
                                </li>
                                <li>
                                    <NavLink className={({ isActive}) => 
                                    isActive ? "dropdown-item active" : "dropdown-item"
                                } to="/doorlocks">
                                    Дверные Замки
                                </NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/contacts"
                                className={({ isActive }) =>
                                    isActive ? "nav-link active" : "nav-link"
                                }
                            >
                                Контакты
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        
    );
}

export default Nav;