import React from 'react';
import { StarIcon } from './Icons';

const testimonials = [
  {
    name: 'Анна В.',
    service: 'Генеральная уборка',
    comment: 'Это просто волшебство! Квартира сияет чистотой, как никогда раньше. Клинер была очень вежливой и аккуратной. Обязательно закажу еще!',
    avatar: 'https://picsum.photos/seed/person1/100/100',
    rating: 5,
  },
  {
    name: 'Михаил П.',
    service: 'Уборка после ремонта',
    comment: 'После ремонта был просто хаос и тонны пыли. Команда Clean 365 справилась на отлично, я даже не ожидал такого результата. Спасибо!',
    avatar: 'https://picsum.photos/seed/person2/100/100',
    rating: 5,
  },
  {
    name: 'Елена и Сергей',
    service: 'Поддерживающая уборка',
    comment: 'Пользуемся услугами каждую неделю. Всегда вовремя, чисто и профессионально. Освободили нам кучу времени на выходных.',
    avatar: 'https://picsum.photos/seed/person3/100/100',
    rating: 5,
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary">Что говорят наши клиенты</h2>
          <p className="text-lg text-gray-600 mt-2">Мы гордимся нашей репутацией</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-light p-8 rounded-xl shadow-lg flex flex-col">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => <StarIcon key={i} className="h-5 w-5 text-accent" />)}
              </div>
              <p className="text-gray-600 mb-6 flex-grow">"{testimonial.comment}"</p>
              <div className="flex items-center">
                <img src={testimonial.avatar} alt={testimonial.name} className="h-14 w-14 rounded-full mr-4"/>
                <div>
                  <p className="font-bold text-secondary">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.service}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
