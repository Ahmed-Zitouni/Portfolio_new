import styled from "styled-components";

export const Wrapper = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-top: 140px;
  padding-top: 0px;
  padding-bottom: 0px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  background-color: #fff;
  @media ${(props) => props.theme.laptop} {
    margin-top: 60px;
    padding-top: 0px;
  }
  @media ${(props) => props.theme.tablet} {
    margin-top: 60px;
    padding-top: 0px;
  }
  @media ${(props) => props.theme.mobile} {
    margin-top: 60px;
    padding-top: 0px;
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
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
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

export const Subtitle = styled.h3`
  color: ${(props) => props.theme.primary};
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  letter-spacing: 1.5px;
`;

export const Title = styled.h2`
  width: 500px;
  line-height: 54px;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${(props) => props.theme.text};
  font-size: 42px;
  line-height: 48px;
  font-weight: 700;
  text-align: center;
  @media ${(props) => props.theme.tablet} {
    width: unset;
  }
  @media ${(props) => props.theme.mobile} {
    width: auto;
    font-size: 32px;
    line-height: 38px;
  }
`;

export const AboutContainer = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  margin-top: 40px;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  @media ${(props) => props.theme.tablet} {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
  }
`;

export const LeftContainer = styled.div`
  width: 50%;
  @media ${(props) => props.theme.tablet} {
    width: 100%;
  }
`;

export const Name = styled.span`
  color: ${(props) => props.theme.primary};
`;

export const Paragraph = styled.p`
  color: ${(props) => props.theme.text};
  font-size: 16px;
  line-height: 22px;
`;

export const List = styled.ul`
  display: -ms-grid;
  display: grid;
  width: 80%;
  margin-top: 20px;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  grid-auto-columns: 1fr;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  -ms-grid-columns: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  -ms-grid-rows: auto auto;
  grid-template-rows: auto auto;
  padding-left: 0px;
`;

export const ListItem = styled.li`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 10px;
  align-items: center;
`;

export const BulletPoint = styled.img`
  width: 11px;
`;

export const ListItemText = styled.h4`
  margin-left: 15px;
  color: ${(props) => props.theme.text};
  font-size: 16px;
  font-weight: 500;
`;

export const RightContainer = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 50%;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  @media ${(props) => props.theme.tablet} {
    width: 100%;
    margin-top: 40px;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  @media ${(props) => props.theme.mobile} {
    width: auto;
    height: auto;
    margin-right: 40px;
    margin-left: 40px;
  }
`;

export const Image = styled.img`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  border-radius: 5px;
`;

export const ImageOverlay = styled.div`
  position: absolute;
  left: 0%;
  top: 0%;
  right: 0%;
  bottom: auto;
  z-index: 2;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  background-color: rgba(69, 112, 224, 0.3);
  -webkit-transition: background-color 300ms ease;
  transition: background-color 300ms ease;
  :hover {
    background-color: transparent;
  }
`;

export const ImageCornerBlock = styled.div`
  position: absolute;
  left: 30px;
  top: 30px;
  right: 0%;
  bottom: auto;
  z-index: 0;
  width: 100%;
  height: 100%;
  border-style: solid;
  border-width: 10px;
  border-color: ${(props) => props.theme.primary};
  background-color: transparent;
`;
