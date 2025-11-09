import React from 'react';
import { SparklesIcon, WindowIcon, SofaIcon, OfficeIcon } from './Icons';

const services = [
  {
    icon: <SparklesIcon className="h-10 w-10 text-primary" />,
    title: 'Поддерживающая уборка',
    description: 'Идеально для регулярного поддержания чистоты и порядка в вашем доме.',
  },
  {
    icon: <SparklesIcon className="h-10 w-10 text-accent" />,
    title: 'Генеральная уборка',
    description: 'Глубокая очистка всех поверхностей, удаление пыли из труднодоступных мест.',
  },
  {
    icon: <SparklesIcon className="h-10 w-10 text-primary" />,
    title: 'Уборка после ремонта',
    description: 'Устраним всю строительную пыль, грязь и мусор после ремонтных работ.',
  },
  {
    icon: <WindowIcon className="h-10 w-10 text-accent" />,
    title: 'Мытье окон',
    description: 'Кристально чистые окна, балконы и лоджии с обеих сторон.',
  },
  {
    icon: <SofaIcon className="h-10 w-10 text-primary" />,
    title: 'Химчистка мебели',
    description: 'Вернем вашей мягкой мебели и коврам свежий и опрятный вид.',
  },
  {
    icon: <OfficeIcon className="h-10 w-10 text-accent" />,
    title: 'Уборка офисов',
    description: 'Создадим чистую и здоровую рабочую атмосферу для ваших сотрудников.',
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary">Наши услуги</h2>
          <p className="text-lg text-gray-600 mt-2">Комплексные решения для идеальной чистоты</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-light p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-white mb-6 shadow-md">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
