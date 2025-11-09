import React from 'react';

const Hero: React.FC = () => {
    const scrollToCalculator = () => {
        document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' });
    };
  
  return (
    <section id="hero" className="relative bg-light pt-20 pb-20 md:pt-32 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{backgroundImage: "url('https://picsum.photos/seed/cleaning/1920/1080')"}}></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold text-secondary leading-tight mb-4 animate-fade-in-down">
          Идеальная чистота в вашем доме в Новосибирске.
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 animate-fade-in-up">
          Профессиональная уборка квартир, домов и офисов. Закажите уборку онлайн за 2 минуты и наслаждайтесь свободным временем!
        </p>
        <button onClick={scrollToCalculator} className="bg-accent hover:bg-yellow-500 text-secondary font-bold py-4 px-10 rounded-lg text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
          Рассчитать стоимость
        </button>
      </div>
    </section>
  );
};

export default Hero;
