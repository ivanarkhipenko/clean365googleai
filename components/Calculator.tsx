import React, { useState, useMemo } from 'react';

type ServiceType = 'maintenance' | 'general' | 'post-renovation';

const BASE_PRICES: Record<ServiceType, number> = {
  maintenance: 1500,
  general: 3000,
  // FIX: Property keys with hyphens must be quoted in object literals.
  'post-renovation': 5000,
};

const PRICE_PER_ROOM = 500;
const PRICE_PER_BATHROOM = 700;

const EXTRA_SERVICES: { id: string; label: string; price: number }[] = [
  { id: 'windows', label: 'Помыть окна', price: 1500 },
  { id: 'fridge', label: 'Уборка внутри холодильника', price: 500 },
  { id: 'oven', label: 'Уборка внутри духовки', price: 600 },
  { id: 'ironing', label: 'Погладить белье (1 час)', price: 800 },
];

const Calculator: React.FC = () => {
  const [serviceType, setServiceType] = useState<ServiceType>('maintenance');
  const [rooms, setRooms] = useState(1);
  const [bathrooms, setBathrooms] = useState(1);
  const [extras, setExtras] = useState<Set<string>>(new Set());

  const handleExtraChange = (id: string) => {
    setExtras(prev => {
      const newExtras = new Set(prev);
      if (newExtras.has(id)) {
        newExtras.delete(id);
      } else {
        newExtras.add(id);
      }
      return newExtras;
    });
  };
  
  const totalPrice = useMemo(() => {
    let price = BASE_PRICES[serviceType];
    price += (rooms - 1) * PRICE_PER_ROOM;
    price += (bathrooms - 1) * PRICE_PER_BATHROOM;
    extras.forEach(extraId => {
      const service = EXTRA_SERVICES.find(s => s.id === extraId);
      if (service) {
        price += service.price;
      }
    });
    return price;
  }, [serviceType, rooms, bathrooms, extras]);

  return (
    <section id="calculator" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary">Рассчитайте стоимость уборки</h2>
          <p className="text-lg text-gray-600 mt-2">Это займет не больше минуты</p>
        </div>

        <div className="max-w-4xl mx-auto bg-light rounded-2xl shadow-xl p-6 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column: Options */}
            <div>
              {/* Service Type */}
              <div className="mb-6">
                <h3 className="font-bold text-lg mb-3 text-secondary">Тип уборки</h3>
                <div className="grid grid-cols-3 gap-2">
                  <button onClick={() => setServiceType('maintenance')} className={`p-3 rounded-lg text-sm transition ${serviceType === 'maintenance' ? 'bg-primary text-white shadow-md' : 'bg-white hover:bg-gray-100'}`}>Поддерживающая</button>
                  <button onClick={() => setServiceType('general')} className={`p-3 rounded-lg text-sm transition ${serviceType === 'general' ? 'bg-primary text-white shadow-md' : 'bg-white hover:bg-gray-100'}`}>Генеральная</button>
                  <button onClick={() => setServiceType('post-renovation')} className={`p-3 rounded-lg text-sm transition ${serviceType === 'post-renovation' ? 'bg-primary text-white shadow-md' : 'bg-white hover:bg-gray-100'}`}>После ремонта</button>
                </div>
              </div>

              {/* Rooms & Bathrooms */}
              <div className="mb-6">
                 <h3 className="font-bold text-lg mb-3 text-secondary">Количество комнат</h3>
                 <div className="flex space-x-2">
                    {[1, 2, 3, 4].map(num => (
                        <button key={num} onClick={() => setRooms(num)} className={`w-12 h-12 rounded-lg transition ${rooms === num ? 'bg-primary text-white shadow-md' : 'bg-white hover:bg-gray-100'}`}>{num}</button>
                    ))}
                 </div>
              </div>
              <div className="mb-6">
                 <h3 className="font-bold text-lg mb-3 text-secondary">Количество санузлов</h3>
                 <div className="flex space-x-2">
                    {[1, 2, 3].map(num => (
                        <button key={num} onClick={() => setBathrooms(num)} className={`w-12 h-12 rounded-lg transition ${bathrooms === num ? 'bg-primary text-white shadow-md' : 'bg-white hover:bg-gray-100'}`}>{num}</button>
                    ))}
                 </div>
              </div>
              
            </div>

            {/* Right Column: Extras & Total */}
            <div className="bg-white rounded-xl p-6 shadow-inner">
                 <h3 className="font-bold text-lg mb-4 text-secondary">Дополнительные услуги</h3>
                 <div className="space-y-3">
                    {EXTRA_SERVICES.map(({ id, label, price }) => (
                      <label key={id} htmlFor={id} className="flex items-center justify-between cursor-pointer p-3 rounded-lg hover:bg-light transition">
                        <div>
                          <input type="checkbox" id={id} checked={extras.has(id)} onChange={() => handleExtraChange(id)} className="mr-3 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"/>
                          <span className="text-secondary">{label}</span>
                        </div>
                        <span className="font-semibold text-primary">+{price} ₽</span>
                      </label>
                    ))}
                 </div>
            </div>
          </div>
          
          {/* Total & CTA */}
          <div className="mt-10 border-t border-gray-200 pt-6 flex flex-col md:flex-row items-center justify-between">
            <div>
                <p className="text-lg text-gray-600">Итоговая стоимость:</p>
                <p className="text-4xl md:text-5xl font-extrabold text-secondary">{totalPrice.toLocaleString('ru-RU')} ₽</p>
            </div>
            <button className="w-full md:w-auto mt-6 md:mt-0 bg-accent hover:bg-yellow-500 text-secondary font-bold py-4 px-10 rounded-lg text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                Заказать уборку
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;