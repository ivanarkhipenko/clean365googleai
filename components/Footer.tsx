import React from 'react';

const Footer: React.FC = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    
  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold cursor-pointer" onClick={scrollToTop}>
              Clean <span className="text-primary">365</span>
            </h3>
            <p className="text-gray-400 mt-2">Идеальная чистота круглый год.</p>
          </div>
          
          {/* Contacts */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="tel:+79991234567" className="hover:text-primary transition-colors">+7 (999) 123-45-67</a></li>
              <li><a href="mailto:info@clean365.ru" className="hover:text-primary transition-colors">info@clean365.ru</a></li>
              <li>г. Новосибирск, ул. Чистоты, д. 1</li>
            </ul>
          </div>
          
          {/* Working Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Время работы</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Пн-Вс: 09:00 - 21:00</li>
              <li>Прием заявок на сайте — круглосуточно</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Clean 365. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
