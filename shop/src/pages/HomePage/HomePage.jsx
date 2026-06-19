import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

export default function HomePage() {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Пространство <br />
            <span>умных решений</span>
          </h1>
          <p className="hero-text">
            Откройте для себя коллекцию гаджетов и аксессуаров нового поколения. 
            Создано, чтобы менять привычный образ жизни.
          </p>
          
          <Link to="/products" className="hero-btn">
            Смотреть товары
            <svg 
              width="22" 
              height="22" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
          
        </div>
        
        <div className="features-card">
          <h2>Почему выбирают нас?</h2>
          <ul className="features-list">
            <li><span>✨</span> Премиальное качество материалов</li>
            <li><span>🚀</span> Бесплатная экспресс-доставка</li>
            <li><span>🛡️</span> Гарантия 2 года на всё</li>
            <li><span>💬</span> Поддержка 24/7 в Telegram</li>
            <li><span>🔄</span> 30 дней на обмен и возврат</li>
            <li><span>💳</span> Удобная оплата долями</li>
            <li><span>🌍</span> Экологичная упаковка</li>
            <li><span>⭐</span> Более 10,000 довольных клиентов</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
