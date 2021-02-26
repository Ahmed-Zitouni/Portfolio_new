import React, { useEffect, useState } from "react";
import {
  Wrapper,
  Container,
  Navigation,
  Logo,
  NavItem,
  BurgerMenu,
  NavButton,
  NavOverlay,
  LogoTag,
} from "./Styles";
import Hamburger from "hamburger-react";

export default function NavBar(props) {
  const [isOpen, setOpen] = useState(false);

  const [windowDimension, setWindowDimension] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowDimension(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (windowDimension > 990) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  }, [windowDimension]);

  return (
    <Wrapper>
      <NavOverlay />
      <Container>
        <LogoTag>
          <Logo src="/Initals.svg" />
        </LogoTag>

        <Navigation burger={isOpen} isMobile={isMobile}>
          <NavItem href="#Skills">Skills</NavItem>
          <NavItem href="#Projects">Projects</NavItem>
          <NavButton href="mailto: ahmedzitouni802@gmail.com">
            Let&#x27;s Talk
          </NavButton>
        </Navigation>
        <BurgerMenu>
          <Hamburger
            color="white"
            toggled={isOpen}
            toggle={setOpen}
            size={25}
          />
        </BurgerMenu>
      </Container>
    </Wrapper>
  );
}
