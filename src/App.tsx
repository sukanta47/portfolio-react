import React, { lazy, Suspense, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import ScrollToTop from "./components/ScrollToTop";
import { ThemeProvider } from "./context/ThemeContext";
import { useAppSelector } from "./app/hooks";
import FallbackLoadingPage from "./components/Loading";

const Projects = lazy(() => import("./components/projects/Projects"));
const Skills = lazy(() => import("./components/Skills/Skills"));
const Testimonials = lazy(() => import("./components/Testimonials"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  const _isScrolledToShowTitle = useAppSelector(
    (state) => state.scroll.isScrolledToShowTitle
  );
  useEffect(() => {
    document.title = "Sukanta Biswas | Lead UI Developer";
    const handleScroll = () => {
      const reveals = document.querySelectorAll(".reveal");
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [_isScrolledToShowTitle]);

  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Hero scrolledToShowTitle={_isScrolledToShowTitle} />
          <About />
          <Suspense fallback={<FallbackLoadingPage />}>
            <Skills />
          </Suspense>
          <Suspense fallback={<FallbackLoadingPage />}>
            <Projects />
          </Suspense>
          <Suspense fallback={<FallbackLoadingPage />}>
            <Testimonials />
          </Suspense>
          <Suspense fallback={<FallbackLoadingPage />}>
            <Contact />
          </Suspense>
        </main>
        <Suspense fallback={<FallbackLoadingPage />}>
          <Footer />
        </Suspense>
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;
