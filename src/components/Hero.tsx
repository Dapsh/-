import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80"
          alt="Счастливая улыбка"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
        <div className="mt-32 max-w-2xl text-white">
          <h1 className="font-montserrat text-5xl font-bold leading-tight">
            Здоровье ваших зубов – наша забота!
          </h1>
          <p className="mt-6 text-xl">
            Лучшие стоматологические услуги в Самаре
          </p>
          <div className="mt-10">
            <button className="group flex items-center space-x-2 rounded-full bg-white px-8 py-3 text-primary transition-all hover:bg-secondary">
              <span className="font-semibold">Записаться на прием</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}