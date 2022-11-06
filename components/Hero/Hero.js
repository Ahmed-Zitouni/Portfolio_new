import React, { useEffect, useState } from "react";
import {
  Container,
  Wrapper,
  LeftContainer,
  Subtitle,
  Title,
  Name,
  Paragraph,
  ButtonsContainer,
  OutlineButton,
  FillButton,
  SocialText,
  SocialIconsContainer,
  SocialImg,
} from "./Styles";
import { AiFillGithub } from "react-icons/ai";
import { hotjar } from "react-hotjar";

export default function Hero(props) {
  useEffect(() => {
    hotjar.initialize("2268499", 6);
  }, []);
  return (
    <Wrapper>
      <Container>
        <LeftContainer>
          <Subtitle>👋 Hey there</Subtitle>
          <Title>
            I am <Name>Ahmed Zitouni</Name>
            <br />
            I&#x27;m a Software Engineer
          </Title>
          <Paragraph>
            I have over 3 years of professional experience, specializing in
            web development with Full Stack knowledge.
            I have built exceptionally modern websites, applications and
            everything in between!
          </Paragraph>
          <ButtonsContainer>
            <OutlineButton href="/Ahmed_Zitouni_Resume.pdf" target="_blank">
              View Resume
            </OutlineButton>
            <FillButton href="mailto: ahmedzitouni802@gmail.com">
              Hire me!
            </FillButton>
          </ButtonsContainer>
          {/* <SocialText>Check out my Github:</SocialText>
          <SocialIconsContainer>
            <SocialImg href="https://github.com/Ahmed-Zitouni" target="_blank">
              <AiFillGithub />
            </SocialImg>
          </SocialIconsContainer> */}
        </LeftContainer>
      </Container>
    </Wrapper>
  );
}
