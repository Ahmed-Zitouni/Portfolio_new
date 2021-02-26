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

export default function Hero(props) {
  return (
    <Wrapper>
      <Container>
        <LeftContainer>
          <Subtitle>👋 Hey there</Subtitle>
          <Title>
            I am <Name>Ahmed Zitouni</Name>
            <br />
            I&#x27;m a Front End Developer
          </Title>
          <Paragraph>
            I have over a year of front end experience, specializing in
            developing exceptionally modern websites, applications and
            everything in between!
          </Paragraph>
          <ButtonsContainer>
            <OutlineButton href="" target="_blank">
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
