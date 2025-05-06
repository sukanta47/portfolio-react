// import { useEffect, useRef, useState } from "react";
// import NavbarNew from "../components/NavbarNew";
// import Badge from "../components/Badge";

import { useEffect, useRef, useState } from "react";
import NavbarNew from "../components/NavbarNew";
import HeroSection from "./herosection";
import WeatherCard from "../features/WeatherCard/WeatherCard";

// const Layout = () => {
//     const heroRef = useRef<HTMLElement | null>(null);
//     const capsuleRef = useRef<HTMLDivElement | null>(null);
//     const [isPinned, setIsPinned] = useState(false);
//     const [capsuleStyle, setCapsuleStyle] = useState({});

//     useEffect(() => {
//       const handleScroll = () => {
//         if (!heroRef.current || !capsuleRef.current) return;

//         const heroBottom = heroRef.current.getBoundingClientRect().bottom;
//         const capsuleRect = capsuleRef.current.getBoundingClientRect();

//         if (heroBottom <= 80 && !isPinned) {
//           // Lock it in the navbar
//           setIsPinned(true);
//           setCapsuleStyle({
//             position: "fixed",
//             top: "1rem",
//             left: "9rem", // adjust to align with navbar
//             transition: "all 0.4s ease-in-out",
//           });
//         } else if (heroBottom > 80 && isPinned) {
//           // Return it to hero
//           setIsPinned(false);
//           setCapsuleStyle({
//             position: "absolute",
//             top: "2.5rem",
//             left: "2.5rem",
//             transition: "all 0.4s ease-in-out",
//           });
//         }
//       };

//       window.addEventListener("scroll", handleScroll);
//       return () => window.removeEventListener("scroll", handleScroll);
//     }, [isPinned]);
//   return (
//     <>
//       <NavbarNew isCapsulePinned={isCapsulePinned} />
//       <main className="pt-20">
//         {/* Capsule always rendered, position is controlled via scroll */}
//         <div ref={capsuleRef} style={capsuleStyle}>
//           <Badge text="Lead UI Developer" />
//         </div>

//         <Hero heroRef={heroRef} />
//         <section className="h-[200vh] bg-gray-50 p-10">
//           <h2 className="text-2xl font-semibold">Scroll down and watch the capsule shift 🪄</h2>
//         </section>
//       </main>
//     </>
//   );
// };
// export default Layout;
//-----------------------------------------------------------------
// import { useEffect, useRef, useState } from "react";
// import NavbarNew from "../components/NavbarNew";
// import Badge from "../components/Badge";
// import Hero from "../components/Hero";
// import HeroSection from "./herosection";

// const Layout: React.FC = () => {
//   const heroRef = useRef<HTMLElement | null>(null);
//   const capsuleRef = useRef<HTMLDivElement | null>(null);
//   const [isPinned, setIsPinned] = useState(false);
//   const [capsuleStyle, setCapsuleStyle] = useState({});

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!heroRef.current || !capsuleRef.current) return;

//       const heroBottom = heroRef.current.getBoundingClientRect().bottom;
//       const capsuleRect = capsuleRef.current.getBoundingClientRect();

//       if (heroBottom <= 80 && !isPinned) {
//         // Lock it in the navbar
//         setIsPinned(true);
//         setCapsuleStyle({
//           position: "fixed",
//           top: "1rem",
//           left: "9rem", // adjust to align with navbar
//           transition: "all 0.4s ease-in-out",
//         });
//       } else if (heroBottom > 80 && isPinned) {
//         // Return it to hero
//         setIsPinned(false);
//         setCapsuleStyle({
//           position: "absolute",
//           top: "2.5rem",
//           left: "2.5rem",
//           transition: "all 0.4s ease-in-out",
//         });
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [isPinned]);

//   return (
//     <>
//       <NavbarNew />
//       <main className="pt-20">
//         {/* Capsule always rendered, position is controlled via scroll */}
//         <div ref={capsuleRef} style={capsuleStyle}>
//           <Badge text="Lead UI Developer" />
//         </div>

//         <HeroSection heroRef={heroRef} />
//         <section className="h-[200vh] bg-gray-50 p-10">
//           <h2 className="text-2xl font-semibold">Scroll down and watch the capsule shift 🪄</h2>
//         </section>
//       </main>
//     </>
//   );
// };

const Layout: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isCapsuleInNavbar, setIsCapsuleInNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const heroBottom = heroRef.current.getBoundingClientRect().bottom;

      if (heroBottom <= 80) {
        setIsCapsuleInNavbar(true);
      } else {
        setIsCapsuleInNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <NavbarNew showCapsule={isCapsuleInNavbar} />
      <main className="pt-20">
        <div className="absolute top-0 right-0 hidden sm:hidden md:block lg:block xl:block">
          <WeatherCard />
        </div>
        <HeroSection showCapsule={!isCapsuleInNavbar} heroRef={heroRef} />
        <section className="h-[200vh] p-10 bg-gray-50">
          <h2 className="text-2xl font-semibold">
            Scroll down to move the capsule ⬆️
          </h2>
        </section>
      </main>
    </>
  );
};

export default Layout;
