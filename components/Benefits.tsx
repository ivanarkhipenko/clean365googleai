import React from 'react';
import { UsersIcon, LeafIcon, CheckCircleIcon, ShieldCheckIcon } from './Icons';

const benefits = [
  {
    icon: <UsersIcon className="h-8 w-8 text-primary" />,
    title: 'Профессиональные клинеры',
    description: 'Все наши сотрудники проходят строгий отбор, обучение и проверку службы безопасности.',
  },
  {
    icon: <LeafIcon className="h-8 w-8 text-primary" />,
    title: 'Эко-средства',
    description: 'Используем только сертифицированные, гипоаллергенные и безопасные средства для вас и ваших питомцев.',
  },
  {
    icon: <CheckCircleIcon className="h-8 w-8 text-primary" />,
    title: 'Гарантия качества',
    description: 'Если вам не понравится результат, мы вернемся и бесплатно все исправим в течение 24 часов.',
  },
  {
    icon: <ShieldCheckIcon className="h-8 w-8 text-primary" />,
    title: 'Материальная ответственность',
    description: 'Наша ответственность застрахована. Ваше имущество в полной безопасности с нами.',
  },
];

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-20 bg-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary">Почему выбирают нас</h2>
          <p className="text-lg text-gray-600 mt-2">Ваше доверие — наш главный приоритет</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-xl text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mx-auto mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-bold text-secondary mb-2">{benefit.title}</h3>
              <p className="text-sm text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
