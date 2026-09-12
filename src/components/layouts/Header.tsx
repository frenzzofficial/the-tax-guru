import Navbar from "../features/navigation/navbar/Navbar";
import TopNavbar from "../features/navigation/navbar/TopNavbar";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/90 backdrop-blur-sm">
      {/* Topbar — desktop only */}
      <TopNavbar />
      {/* Main nav */}
      <Navbar />
    </header>
  );
};

export default Header;
