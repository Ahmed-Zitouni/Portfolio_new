import styled from "styled-components";

export const Wrapper = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-top: 0px;
  padding-top: 140px;
  padding-bottom: 100px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  background-color: ${(props) => props.theme.background};
  @media ${(props) => props.theme.tablet} {
    padding-top: 140px;
  }
`;

export const Container = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  max-width: 1100px;
  margin-right: 60px;
  margin-left: 60px;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  @media ${(props) => props.theme.laptop} {
    margin-right: 50px;
    margin-left: 50px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
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

export const LeftContainer = styled.div`
  width: 80%;
  margin-top: 60px;
  margin-right: auto;
  @media ${(props) => props.theme.tablet} {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
  }
  @media ${(props) => props.theme.laptop} {
    width: 100%;
    margin-top: 0px;
  }
`;

export const Subtitle = styled.h3`
  color: ${(props) => props.theme.primary};
  font-size: 28px;
  font-weight: 600;

  @media ${(props) => props.theme.tablet} {
    text-align: center;
  }
  @media ${(props) => props.theme.mobile} {
    font-size: 20px;
  }
`;

export const Title = styled.h1`
  margin-top: 30px;
  margin-bottom: 0px;
  color: ${(props) => props.theme.text};
  font-size: 60px;
  line-height: 66px;
  font-weight: 700;
  @media ${(props) => props.theme.tablet} {
    font-size: 42px;
    line-height: 48px;
    text-align: center;
  }
  @media ${(props) => props.theme.mobile} {
    font-size: 36px;
    line-height: 42px;
  }
`;

export const Name = styled.span`
  color: ${(props) => props.theme.primary};
`;

export const Paragraph = styled.p`
  margin-top: 30px;
  margin-bottom: 40px;
  color: ${(props) => props.theme.text};
  font-size: 20px;
  line-height: 30px;
  @media ${(props) => props.theme.tablet} {
    text-align: center;
  }
  @media ${(props) => props.theme.mobile} {
    margin-bottom: 20px;
    font-size: 14px;
    line-height: 20px;
  }
`;

export const ButtonsContainer = styled.div`
  margin-top: 40px;
  display: flex;
  @media ${(props) => props.theme.tablet} {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    -webkit-justify-content: space-around;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    -webkit-box-align: stretch;
    -webkit-align-items: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
  }
  @media ${(props) => props.theme.mobile} {
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-top: 0px;
  }
`;

export const OutlineButton = styled.a`
  padding: 13px 40px;
  border-style: solid;
  cursor: pointer;
  border-width: 1px;
  border-color: ${(props) => props.theme.text};
  border-radius: 5px;
  background-color: #fff;
  color: ${(props) => props.theme.text};
  font-size: 18px;
  font-weight: 600;
  margin-right: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  -webkit-transition: opacity 300ms ease, -webkit-transform 300ms ease;
  transition: opacity 300ms ease, -webkit-transform 300ms ease;
  transition: transform 300ms ease, opacity 300ms ease;
  transition: transform 300ms ease, opacity 300ms ease,
    -webkit-transform 300ms ease;
  text-decoration: unset;
  :hover {
    opacity: 0.9;
    -webkit-transform: scale(1.025);
    -ms-transform: scale(1.025);
    transform: scale(1.025);
  }
  @media ${(props) => props.theme.tablet} {
    margin-right: 0px;
  }
  @media ${(props) => props.theme.mobile} {
    margin-top: 20px;
    margin-right: 10px;
    padding-top: 15px;
    padding-bottom: 15px;
  }
`;

export const FillButton = styled.a`
  margin-top: 0px;
  padding: 20px 40px;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${(props) => props.theme.primary};
  -webkit-transition: opacity 300ms ease, -webkit-transform 300ms ease;
  transition: opacity 300ms ease, -webkit-transform 300ms ease;
  transition: transform 300ms ease, opacity 300ms ease;
  transition: transform 300ms ease, opacity 300ms ease,
    -webkit-transform 300ms ease;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  text-decoration: unset;
  :hover {
    background-color: ${(props) => props.theme.primary};
    opacity: 0.9;
    -webkit-transform: scale(1.025);
    -ms-transform: scale(1.025);
    transform: scale(1.025);
  }
  @media ${(props) => props.theme.mobile} {
    margin-top: 20px;
    padding-top: 15px;
    padding-bottom: 15px;
  }
`;

export const SocialText = styled.p`
  margin-top: 180px;
  margin-bottom: 20px;
  color: ${(props) => props.theme.text};
  font-size: 16px;
  @media ${(props) => props.theme.laptop} {
    margin-top: 60px;
  }
  @media ${(props) => props.theme.mobile} {
    margin-top: 40px;
    text-align: center;
  }
`;

export const SocialIconsContainer = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 300px;
  -webkit-justify-content: space-around;
  -ms-flex-pack: distribute;
  justify-content: space-between;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  @media ${(props) => props.theme.tablet} {
    justify-content: space-around;
  }
  @media ${(props) => props.theme.mobile} {
    width: 240px;
  }
`;
export const SocialImg = styled.a`
  /* width: 40px; */
  margin-right: 40px;
  font-size: 40px;
  cursor: pointer;
  color: ${(props) => props.theme.text};
  opacity: 0.7;
  transition: 0.3s 0s ease-in-out;
  :hover {
    opacity: 1;
    transform: scale(1.08, 1.08);
  }
  @media ${(props) => props.theme.tablet} {
    margin-right: 0px;
  }
`;
