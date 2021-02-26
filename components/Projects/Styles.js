import styled from "styled-components";

export const Wrapper = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-top: 160px;
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

export const ProjectsContainer = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  margin-top: 40px;
  -webkit-justify-content: space-around;
  -ms-flex-pack: distribute;
  justify-content: space-around;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-align-content: stretch;
  -ms-flex-line-pack: stretch;
  align-content: stretch;
`;
export const ImageTag = styled.a`
  overflow: hidden;
  border-radius: 5px;
  cursor: pointer;
`;

export const ProjectItemContainer = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 45%;
  margin-bottom: 40px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start;
  @media ${(props) => props.theme.tablet} {
    width: 100%;
  }
`;

export const Image = styled.img`
  border-radius: 5px;
  width: 100%;
  transition: transform 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95),
    -webkit-transform 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
  :hover {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }
`;

export const ProjectTitle = styled.h3`
  color: ${(props) => props.theme.text};
  font-size: 32px;
  font-weight: 700;
  margin-top: 20px;
`;

export const ProjectBody = styled.p`
  color: ${(props) => props.theme.text};
  font-size: 14px;
  margin-top: 10px;
  line-height: 20px;
`;

export const LinksContainer = styled.div`
  display: flex;
  margin-top: 30px;
`;

export const LinkImage = styled.a`
  margin-right: 20px;
  cursor: pointer;
  color: ${(props) => props.theme.text};
  opacity: 0.7;
  transition: 0.3s 0s ease-in-out;
  font-size: 35px;
  text-decoration: unset;
  :hover {
    opacity: 1;
    transform: scale(1.08, 1.08);
  }
`;

export const ProjectDetails = styled.h6`
  margin-top: 40px;
  color: ${(props) => props.theme.primary};
  font-weight: 600;
  line-height: 24px;
`;
