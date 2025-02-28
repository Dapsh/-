import { Shield, Clock, Award, HeartPulse } from 'lucide-react';

const advantages = [
  {
    icon: Shield,
    title: 'Гарантия качества',
    description: 'Предоставляем гарантию на все виды лечения. Используем только сертифицированные материалы ведущих производителей.',
  },
  {
    icon: Clock,
    title: 'Современное оборудование',
    description: 'Наша клиника оснащена новейшим оборудованием от мировых производителей для максимально точной диагностики и лечения.',
  },
  {
    icon: Award,
    title: '15 лет опыта',
    description: 'Более 15 лет успешной работы и тысячи довольных пациентов. Постоянное повышение квалификации врачей.',
  },
  {
    icon: HeartPulse,
    title: 'Забота о пациентах',
    description: 'Индивидуальный подход к каждому пациенту. Комфортное лечение без боли и стресса.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-montserrat text-4xl font-bold text-primary">О клинике</h2>
          <p className="mt-4 text-lg text-gray-600">
            Мы создаем красивые улыбки и дарим уверенность нашим пациентам
          </p>
        </div>

        <div className="mt-16">
          <div className="relative">
            <div className="aspect-[16/9] w-full overflow-hidden rounded-2xl">
              <img
                src="https://i.postimg.cc/26DpB4jP/IMG-7373.webp"
                alt="Интерьер клиники"
                className="h-full w-full object-cover"
              />
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent rounded-2xl" />
            
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h3 className="text-2xl font-semibold">Crystall Clinic</h3>
              <p className="mt-2">
                Современная стоматологическая клиника в центре Самары
              </p>
            </div>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {advantages.map((advantage) => (
              <div key={advantage.title} className="rounded-lg bg-white p-6 shadow-lg">
                <advantage.icon className="h-12 w-12 text-primary" />
                <h3 className="mt-4 font-montserrat text-xl font-semibold text-primary">
                  {advantage.title}
                </h3>
                <p className="mt-2 text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}