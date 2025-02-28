import { Phone } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToRegistration = () => {
    const element = document.getElementById('registration-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-primary">Crystal Clinic</h1>
        </div>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li><a href="#services" className="text-primary hover:text-primary/80">Услуги</a></li>
            <li><a href="#about" className="text-primary hover:text-primary/80">О клинике</a></li>
            <li><a href="#doctors" className="text-primary hover:text-primary/80">Врачи</a></li>
            <li><a href="#contacts" className="text-primary hover:text-primary/80">Контакты</a></li>
          </ul>
        </nav>

        <div className="flex items-center space-x-4">
          <a href="tel:+79934600859" className="flex items-center space-x-2">
            <Phone className="h-5 w-5 text-primary" />
            <span className="font-semibold text-primary">+7 (993) 460-08-59</span>
          </a>
          <button 
            onClick={scrollToRegistration}
            className="rounded-full bg-primary px-6 py-2 text-white hover:bg-primary/90"
          >
            Записаться
          </button>
        </div>
      </div>
    </header>
  );
}