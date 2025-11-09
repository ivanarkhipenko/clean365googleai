import React, { useState } from 'react';
import { ChevronDownIcon } from './Icons';

const faqData = [
  {
    question: 'Нужно ли мне быть дома во время уборки?',
    answer: 'Не обязательно. Вы можете оставить нам ключи, и мы позаботимся обо всем. Многие наши клиенты доверяют нам свои дома и квартиры.',
  },
  {
    question: 'Вы привозите свои средства и оборудование?',
    answer: 'Да, наши клинеры приезжают со всем необходимым профессиональным оборудованием и сертифицированными моющими средствами.',
  },
  {
    question: 'Как происходит оплата?',
    answer: 'Оплата производится после того, как вы примете работу. Мы принимаем наличные, банковские карты и онлайн-переводы.',
  },
  {
    question: 'Что если у меня есть домашние животные?',
    answer: 'Мы любим животных! Просто предупредите нас заранее, чтобы клинер был готов. Мы используем безопасные для питомцев средства.',
  },
  {
    question: 'Вы работаете в выходные и праздничные дни?',
    answer: 'Да, мы работаем 7 дней в неделю, включая выходные и праздники, чтобы уборка была для вас максимально удобной.',
  },
];

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left py-5 px-6 focus:outline-none"
      >
        <span className="text-lg font-semibold text-secondary">{question}</span>
        <ChevronDownIcon
          className={`h-6 w-6 text-primary transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`}
        />
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
         <div className="px-6 pb-5 text-gray-600">
           {answer}
         </div>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary">Частые вопросы</h2>
          <p className="text-lg text-gray-600 mt-2">Ответы на все, что вы хотели знать</p>
        </div>
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          {faqData.map((item, index) => (
            <AccordionItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
