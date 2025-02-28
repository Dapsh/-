import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const doctors = [
  {
    name: 'Камо Манучарян ',
    position: 'Главный врач',
    image: 'https://i.postimg.cc/d3j8nKYq/IMG-7315.webp',
    description: 'Опытный хирург-имплантолог, специализирующийся на современных методах дентальной имплантации. Использует передовые технологии для восстановления функций и эстетики зубов, обеспечивая комфортное и безопасное лечение.',
  },
  {
    name: 'Антон Аблеков',
    position: 'Стоматолог-терапевт',
    image: 'https://i.postimg.cc/fbYkYfZs/IMG-7427.webp',
    description: 'Стоматолог-терапевт, специализируется на лечении кариеса и заболеваний зубов с применением современных методик. В своей работе делает акцент на безболезненность, комфорт и сохранение естественности',
  },
  {
    name: 'Бехруз Бабирович',
    position: 'Стоматолог-имплантолог',
    image: 'https://i.postimg.cc/vmpn7ZpR/IMG-7438.webp',
    description: 'Специалист по дентальной имплантации. Проводит сложные операции по костной пластике и синус-лифтингу.',
  },
  {
    name: 'Доминик Торетто',
    position: 'Ортодонт',
    image: 'https://i.postimg.cc/25YLcK0y/IMG-7435.webp',
    description: 'Эксперт по исправлению прикуса. Работает со всеми современными системами брекетов и элайнеров.',
  },
];

export default function Doctors() {
  return (
    <section id="doctors" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-montserrat text-4xl font-bold text-primary">Наши специалисты</h2>
          <p className="mt-4 text-lg text-gray-600">
            Команда опытных врачей, которые заботятся о здоровье ваших зубов
          </p>
        </div>

        <div className="mt-16">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="!pb-12"
          >
            {doctors.map((doctor) => (
              <SwiperSlide key={doctor.name}>
                <div className="rounded-lg bg-white p-6 shadow-lg">
                  <div className="aspect-[3/4] overflow-hidden rounded-lg">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="mt-6">
                    <h3 className="font-montserrat text-xl font-semibold text-primary">
                      {doctor.name}
                    </h3>
                    <p className="mt-1 text-primary/80">{doctor.position}</p>
                    <p className="mt-1 text-sm text-gray-500">{doctor.experience}</p>
                    <p className="mt-4 text-gray-600">{doctor.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}