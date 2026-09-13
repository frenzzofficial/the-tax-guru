import WhatsAppButton from "../ui/button/WhatsAppButton";
import Footer from "./Footer";
import Header from "./Header";

type AppClientLayoutProps = {
  children: React.ReactNode;
};

const AppClientLayout = ({ children }: AppClientLayoutProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default AppClientLayout;
