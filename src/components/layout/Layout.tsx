import { PropsWithChildren } from "react";
import Header from "./header";
import Footer from "./footer";
import Content from "./content";

type LayoutProps = PropsWithChildren & {};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </div>
  );
};

export default Layout;
