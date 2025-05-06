import Badge from "./Badge";
interface NavbarProps {
    showCapsule: boolean;
}
const NavbarNew: React.FC<NavbarProps> = ({ showCapsule }) => (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow px-6 py-4 flex justify-between items-center">
      <div className="text-lg font-bold text-blue-700">🔷 Al Pacino</div>
      {showCapsule && (
        <div className="transition-all duration-500 ease-in-out">
          <Badge text="Lead UI Developer" />
        </div>
      )}
    <ul className="flex gap-6 font-medium text-gray-700">
      <li>Home</li>
      <li>About</li>
      <li>Skills</li>
      <li>Projects</li>
      <li>Contact</li>
    </ul>
  </nav>
  );

  export default NavbarNew;