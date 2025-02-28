import { useState } from 'react';

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const validatePhone = (phone: string) => {
    const phoneRegex = /^\+7\s?\(?\d{3}\)?\s?\d{3}[-\s]?\d{2}[-\s]?\d{2}$/;
    return phoneRegex.test(phone);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Валидация
    if (!formData.fullName.trim()) {
      setErrorMessage('Пожалуйста, введите ваше ФИО');
      return;
    }
    
    if (!validatePhone(formData.phone)) {
      setErrorMessage('Пожалуйста, введите корректный номер телефона в формате +7 (XXX) XXX-XX-XX');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycby9QRTgBItKZSFELbe1SjzEYWZJCkuMbqbjHa4mooCNRbk45Utgu0tkIUV5sHkTlnvl/exec', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const data = await response.json();

      if (data.result === 'success') {
        setStatus('success');
        setFormData({ fullName: '', phone: '' });
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        throw new Error('Ошибка при отправке данных');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Произошла ошибка при отправке формы. Пожалуйста, попробуйте позже.');
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 0) {
      value = '+7' + value.substring(1);
      if (value.length > 2) value = value.slice(0, 2) + ' (' + value.slice(2);
      if (value.length > 7) value = value.slice(0, 7) + ') ' + value.slice(7);
      if (value.length > 12) value = value.slice(0, 12) + '-' + value.slice(12);
      if (value.length > 15) value = value.slice(0, 15) + '-' + value.slice(15);
    }
    setFormData(prev => ({ ...prev, phone: value }));
  };

  return (
    <section id="registration-form" className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-primary">Записаться на приём</h2>
          <p className="mt-4 text-lg text-gray-600">
            Оставьте свои контактные данные, и мы свяжемся с вами для подтверждения записи
          </p>
        </div>

        <div className="mt-12 mx-auto max-w-md">
          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-md">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                ФИО
              </label>
              <input
                type="text"
                id="fullName"
                value={formData.fullName}
                onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="Иванов Иван Иванович"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Номер телефона
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={handlePhoneChange}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="+7 (999) 999-99-99"
              />
            </div>

            {errorMessage && (
              <p className="text-red-600 text-sm">{errorMessage}</p>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className={`w-full rounded-md bg-primary px-4 py-2 text-white hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                status === 'loading' ? 'opacity-75 cursor-not-allowed' : ''
              }`}
            >
              {status === 'loading' ? 'Отправка...' : 'Отправить'}
            </button>

            {status === 'success' && (
              <p className="text-green-600 text-sm text-center">
                Спасибо! Мы свяжемся с вами в ближайшее время.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}