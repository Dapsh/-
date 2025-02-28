import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Doctors from './components/Doctors';
import RegistrationForm from './components/RegistrationForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <About />
      <Doctors />
      <RegistrationForm />
      <Footer />
    </div>
  );
}