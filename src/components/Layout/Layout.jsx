import { Outlet, Link } from "react-router-dom";
import logo from "@/assets/img/movie-logo.svg";
import {
  LayoutContainer,
  Header,
  Nav,
  NavLink,
  Main,
  Footer,
  FooterLogo,
  Paragraph,
} from "@/assets/css/layout.styles";

const Layout = () => {
  return (
    <LayoutContainer>
      <Header>
        <Nav>
          <NavLink as={Link} to="/">
            Home
          </NavLink>
          <NavLink as={Link} to="/contact">
            Contact
          </NavLink>
        </Nav>
      </Header>
      <Main>
        <Outlet />
      </Main>
      <Footer>
        <FooterLogo src={logo} alt="Movie-Api-logo" />
        <Paragraph>Movies are fetched from TMDB!</Paragraph>
      </Footer>
    </LayoutContainer>
  );
};

export default Layout;
