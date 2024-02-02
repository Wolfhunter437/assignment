import './App.scss';
import './responsive.scss'
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Section2 from './Components/Section2';
import Section3 from './Components/Section3';

function App() {
  const mobile = window.matchMedia('(max-width: 768px)').matches;

  if (mobile) {
    const elements = document.querySelectorAll('.fade-in');

    elements.forEach(function (element) {
      const elementPosition = element.getBoundingClientRect().top;
      element.classList.add('visible');
    });
  }
  else {
    window.addEventListener('scroll', function () {
      const elements = document.querySelectorAll('.fade-in');

      elements.forEach(function (element) {
        const elementPosition = element.getBoundingClientRect().top;

        if (elementPosition < window.innerHeight - 100) {
          element.classList.add('visible');
        }
      });
    });
  }
  return (
    <>
      <Navbar />
      <Header />
      <Section2 />
      <Section3 />
    </>
  );
}

export default App;
