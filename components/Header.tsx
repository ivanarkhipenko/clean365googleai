import React from 'react';

const Header: React.FC = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-secondary cursor-pointer" onClick={() => scrollTo('hero')}>
          Clean <span className="text-primary">365</span>
        </div>
        <nav className="hidden md:flex space-x-8 items-center">
          <a onClick={() => scrollTo('services')} className="text-gray-600 hover:text-primary transition-colors duration-300 cursor-pointer">Услуги</a>
          <a onClick={() => scrollTo('calculator')} className="text-gray-600 hover:text-primary transition-colors duration-300 cursor-pointer">Калькулятор</a>
          <a onClick={() => scrollTo('benefits')} className="text-gray-600 hover:text-primary transition-colors duration-300 cursor-pointer">Преимущества</a>
          <a onClick={() => scrollTo('faq')} className="text-gray-600 hover:text-primary transition-colors duration-300 cursor-pointer">FAQ</a>
        </nav>
        <button onClick={() => scrollTo('calculator')} className="bg-primary hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5">
          Заказать уборку
        </button>
      </div>
    </header>
  );
};

export default Header;
