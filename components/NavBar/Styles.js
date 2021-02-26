import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100px;
  align-items: center;
  font-family: "Open Sans", sans-serif;
  position: fixed;
  z-index: 3;
  top: 0;
  background-color: ${(props) => props.theme.background};
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  font-family: inherit;
  margin-left: 60px;
  margin-right: 60px;
  max-width: 1100px;
  justify-content: space-between;
  @media ${(props) => props.theme.laptop} {
    margin-left: 50px;
    margin-right: 50px;
  }
  @media ${(props) => props.theme.tablet} {
    margin-left: 25px;
    margin-right: 25px;
  }
  @media ${(props) => props.theme.mobile} {
    margin-left: 10px;
    margin-right: 10px;
  }
`;

export const Logo = styled.img`
  width: 50px;
  cursor: pointer;
  z-index: 2;
`;

export const BurgerMenu = styled.div`
  display: none;
  background-color: ${(props) => props.theme.primary};
  border-radius: 50%;
  z-index: 2;
  @media ${(props) => props.theme.laptop} {
    display: flex;
  }
  @media ${(props) => props.theme.tablet} {
  }
  @media ${(props) => props.theme.mobile} {
  }
`;

export const LogoTag = styled.a`
  justify-content: center;
  display: flex;
  align-items: center;
  z-index: 2;
`;

export const ShowMenu = styled.button`
  height: 25px;
  border: none;
  background: white;
  font-size: 25px;
`;

export const Navigation = styled.nav`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  transition: all 300ms ease;
  z-index: ${(props) => (props.isMobile ? -2 : 2)};
  @media ${(props) => props.theme.laptop} {
    position: absolute;
    flex-direction: column;
    z-index: 0;
    left: 0px;
    right: 0px;
    transition: all 400ms ease 0s;
    top: ${(props) => (props.burger ? "100px" : "-300px")};
    padding-top: 0px;
    background-color: #fff;
    box-shadow: 0 50px 100px 0 rgba(0, 0, 0, 0.15);
    z-index: -2;
  }
`;

export const NavOverlay = styled.div`
  width: 100%;
  height: 100%;
  z-index: 1;
  position: absolute;
  background-color: ${(props) => props.theme.background};
`;

export const NavItem = styled.a`
  margin-right: 40px;
  padding-right: 0px;
  padding-left: 0px;
  -webkit-transition: -webkit-transform 300ms ease;
  transition: -webkit-transform 300ms ease;
  transition: transform 300ms ease;
  transition: transform 300ms ease, -webkit-transform 300ms ease;
  color: ${(props) => props.theme.text};
  font-size: 16px;
  font-weight: 600;
  text-decoration: unset;
  cursor: pointer;
  :hover {
    -webkit-transform: translate(0px, -3px);
    -ms-transform: translate(0px, -3px);
    transform: translate(0px, -3px);
    color: ${(props) => props.theme.primary};
  }
  @media ${(props) => props.theme.laptop} {
    margin-top: 20px;
    margin-right: 0px;
  }
`;

export const NavButton = styled.a`
  padding: 10px 30px;
  border-style: solid;
  border-width: 2px;
  border-color: ${(props) => props.theme.text};
  border-radius: 5px;
  background-color: #fff;
  -webkit-transition: color 300ms ease, border 300ms ease,
    -webkit-transform 300ms ease;
  transition: color 300ms ease, border 300ms ease, -webkit-transform 300ms ease;
  transition: color 300ms ease, border 300ms ease, transform 300ms ease;
  transition: color 300ms ease, border 300ms ease, transform 300ms ease,
    -webkit-transform 300ms ease;
  color: ${(props) => props.theme.text};
  font-size: 16px;
  font-weight: 600;
  text-decoration: unset;
  :hover {
    border-width: 2px;
    border-color: ${(props) => props.theme.text};
    -webkit-transform: translate(0px, -3px);
    -ms-transform: translate(0px, -3px);
    transform: translate(0px, -3px);
    color: ${(props) => props.theme.text};
  }
  @media ${(props) => props.theme.laptop} {
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;
