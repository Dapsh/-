import { Phone, MapPin, Instagram, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contacts" className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          <div>
            <h3 className="text-2xl font-bold">Crystal Clinic</h3>
            <p className="mt-4 text-gray-400">
              Наша главная цель — обеспечить индивидуальный подход к каждому клиенту: сохранить крепкое здоровье, душевное равновесие и уверенность в себе на долгие годы. Это залог высокого качества и эффективности нашей работы.
            </p>
            <p className="mt-4 text-gray-400">
              Мы не боимся гарантировать результат, так как уверены в опыте наших специалистов.
            </p>
            <p className="mt-4 text-gray-400">
              Будьте здоровы!
            </p>
          </div>

          <div className="lg:col-span-2 lg:ml-auto">
            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <h4 className="text-lg font-semibold">Контакты</h4>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a href="tel:+79934600859" className="flex items-center space-x-2 text-gray-400 hover:text-white">
                      <Phone className="h-5 w-5" />
                      <span>+7 (993) 460-08-59</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://yandex.ru/maps/-/CDaWjX8I" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-400 hover:text-white">
                      <MapPin className="h-5 w-5" />
                      <span>Ерошевского, 18, Самара</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://instagram.com/crystal_clinic" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-400 hover:text-white">
                      <Instagram className="h-5 w-5" />
                      <span>crystal_clinic</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://crystal-clinic.clients.site" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-400 hover:text-white">
                      <Globe className="h-5 w-5" />
                      <span>crystal-clinic.clients.site</span>
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold">Лицензия</h4>
                <p className="mt-4 text-sm text-gray-400">
                  Предоставлена лицензия "Олимп" на осуществление медицинской деятельности от 01 марта 2021 г. № ЛО-63-01-005785.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-center text-sm text-gray-400">
            © {new Date().getFullYear()} Crystal Clinic. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}