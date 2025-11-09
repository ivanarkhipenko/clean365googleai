import React from 'react';

const steps = [
  {
    number: '1',
    title: 'Оставьте заявку',
    description: 'Рассчитайте стоимость уборки в онлайн-калькуляторе и выберите удобное время.',
  },
  {
    number: '2',
    title: 'Встречайте клинера',
    description: 'Наш специалист приедет вовремя со всем необходимым оборудованием и средствами.',
  },
  {
    number: '3',
    title: 'Наслаждайтесь чистотой',
    description: 'Примите работу и оплатите результат удобным для вас способом.',
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 bg-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary">Как это работает</h2>
          <p className="text-lg text-gray-600 mt-2">Всего 3 простых шага к чистоте</p>
        </div>
        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-primary/30 transform -translate-y-1/2"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <div key={index} className="text-center relative bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary text-white font-bold text-2xl mx-auto mb-6 border-4 border-light">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
