import Letters from "@/featurers/home/component/letters";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Letters />
      {children}
    </div>
  );
};

export default Layout;
