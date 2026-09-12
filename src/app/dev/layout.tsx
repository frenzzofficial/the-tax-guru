import { notFound } from "next/navigation";

type DevLayoutPageProps = {
  children: React.ReactNode;
};

const DevLayoutPage = ({ children }: DevLayoutPageProps) => {
  if (process.env.NODE_ENV === "production") {
    notFound();
  }

  return <>{children}</>;
};

export default DevLayoutPage;
