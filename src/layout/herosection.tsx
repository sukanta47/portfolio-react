import { RefObject } from "react";
import Badge from "../components/Badge";

interface HeroProps {
    showCapsule: boolean;
    heroRef: RefObject<HTMLDivElement>;
  }
  
  const HeroSection: React.FC<HeroProps> = ({ showCapsule, heroRef }) => (
    <section
      ref={heroRef}
      className="relative h-screen bg-gradient-to-br from-white to-blue-50 flex flex-col justify-center items-center"
    >
      <h1 className="text-5xl font-bold mb-6">Hi, I'm Al Pacino</h1>
      <h2 className="text-3xl font-semibold mb-10 text-blue-700">Frontend Engineer</h2>
  
      {showCapsule && (
        <div className="transition-all duration-500 ease-in-out">
          <Badge text="Lead UI Developer" />
        </div>
      )}
    </section>
  );
  
  export default HeroSection;
  