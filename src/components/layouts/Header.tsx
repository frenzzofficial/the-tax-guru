import Link from "next/link";
import { appConfig } from "@/packages/configs/app.config";
import { NavigationLogo } from "../ui";

const Header = () => {
  return (
    <header className="w-full h-20 sticky top-0 bg-background/90 px-5 py-1 backdrop-blur-sm z-99">
      <div className="flex justify-between items-center gap-5">
        <NavigationLogo />
        <nav className="flex justify-between gap-5">
          {" "}
          {appConfig.navigation.header.main.map((item) => {
            return (
              <Link key={`{item.label}-${item.label}`} href={item.href}>
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Header;
