import ManNavigation from "./main-navigation";

function Layout(props) {
  return (
    <>
      <ManNavigation />
      <main>{props.children}</main>
    </>
  );
}

export default Layout;
