import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/projects/Projects';
import Skills from './components/Skills/Skills';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { ThemeProvider } from './context/ThemeContext';
import { useAppSelector } from './app/hooks';
import WeatherCard from './features/WeatherCard/WeatherCard';

function App() {
  const [isScrolledToShowTitle, setIsScrolledToShowTitle] = React.useState(false);
  const _isScrolledToShowTitle = useAppSelector(state=>state.scroll.isScrolledToShowTitle);
  useEffect(() => {
    // Update document title
    document.title = 'Sukanta Biswas | Lead UI Developer';
    setIsScrolledToShowTitle(_isScrolledToShowTitle)
    // ScrollReveal effect
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add('active');
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [_isScrolledToShowTitle]);

  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Hero scrolledToShowTitle={isScrolledToShowTitle}/>
          <About />
          <Skills />
          <Projects />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;