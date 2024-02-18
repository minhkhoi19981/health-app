import { PropsWithChildren } from "react";
import Header from "./header";

type LayoutProps = PropsWithChildren & {};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
