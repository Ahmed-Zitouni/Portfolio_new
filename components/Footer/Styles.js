import styled from "styled-components";

export const Wrapper = styled.footer`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-top: 100px;
  padding-top: 15px;
  padding-bottom: 15px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  background-color: ${(props) => props.theme.background};
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

export const Text = styled.p`
  color: ${(props) => props.theme.text};
  text-align: center;
  font-size: 14px;
`;
