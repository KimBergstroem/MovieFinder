import { Outlet, Link } from "react-router-dom";
import {
  LayoutContainer,
  Header,
  Nav,
  NavLink,
  Main,
} from "@/assets/css/layout.styles";

const Layout = () => {
  return (
    <LayoutContainer>
      <Header>
        <Nav>
          <NavLink as={Link} to="/">
            Home
          </NavLink>
        </Nav>
      </Header>
      <Main>
        <Outlet />
      </Main>
    </LayoutContainer>
  );
};

export default Layout;
