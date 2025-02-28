import { Bluetooth as Tooth, Stethoscope, Brush, Baby, Smile } from 'lucide-react';

const services = [

  {
    icon: Stethoscope,
    title: 'Имплантация',
    description: 'Установка зубных имплантов с гарантией и последующим протезированием.',
    details: 'Используем имплантаты ведущих производителей. Предоставляем пожизненную гарантию на установленные импланты.',
  },
  {
    icon: Brush,
    title: 'Профессиональная чистка',
    description: 'Комплексная гигиена полости рта и отбеливание зубов.',
    details: 'Безопасное отбеливание без повреждения эмали. Используем современные методики очистки зубов.',
  },
  {
    icon: Baby,
    title: 'Детская стоматология',
    description: 'Бережный уход за зубами ваших детей с особым подходом.',
    details: 'Создаем комфортную атмосферу для маленьких пациентов. Используем безболезненные методики лечения.',
  },
  {
    icon: Smile,
    title: 'Эстетическая стоматология',
    description: 'Создание красивой улыбки с помощью виниров и реставрации.',
    details: 'Индивидуальный дизайн улыбки. Используем только качественные материалы для долговечного результата.',
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-montserrat text-4xl font-bold text-primary">Наши услуги</h2>
          <p className="mt-4 text-lg text-gray-600">
            Предоставляем полный спектр стоматологических услуг
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="service-card">
              <service.icon className="h-12 w-12 text-primary" />
              <h3 className="mt-4 font-montserrat text-xl font-semibold text-primary">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-600">{service.description}</p>
              
              <div className="service-details">
                <p className="text-center">{service.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}