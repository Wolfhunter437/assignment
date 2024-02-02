import './App.scss';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Section2 from './Components/Section2';

function App() {

  window.addEventListener('scroll', function () {
    const elements = document.querySelectorAll('.fade-in');
  
    elements.forEach(function (element) {
      const elementPosition = element.getBoundingClientRect().top;
  
      if (elementPosition < window.innerHeight - 100) {
        element.classList.add('visible');
      }
    });
  });
  return (
    <>
    <Navbar />
    <Header />
    <Section2 />
    </>
  );
}

export default App;
