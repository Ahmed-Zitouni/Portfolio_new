import React from "react";
import {
  Container,
  Subtitle,
  Wrapper,
  Title,
  AboutContainer,
  LeftContainer,
  Paragraph,
  List,
  ListItem,
  BulletPoint,
  ListItemText,
  RightContainer,
  ImageContainer,
  ImageOverlay,
  ImageCornerBlock,
  Image,
} from "./Styles";

export default function About(props) {
  return (
    <Wrapper id="Skills">
      <Container>
        <Subtitle>WHAT I DO</Subtitle>
        <Title>I specialize on Web Development</Title>
        <AboutContainer>
          <LeftContainer>
            <Paragraph>
              I'm a front end developer based in New York, NY. I am passionate
              about creating amazing experiences on the web whether it be a
              website, application or anything else in between.
              <br />
              <br />
              On every project I work on, I strive to build products that
              provide pixel-perfect, optimized, performant experiences. <br />
              <br />
              Here are a few technologies I&#x27;ve been working with recently:
            </Paragraph>
          </LeftContainer>
          <RightContainer>
            <List>
              <ListItem>
                <BulletPoint src="/Bullet-Point.svg" />
                <ListItemText>React / React Native</ListItemText>
              </ListItem>
              <ListItem>
                <BulletPoint src="/Bullet-Point.svg" />
                <ListItemText>HTML &amp; (S)CSS</ListItemText>
              </ListItem>
              <ListItem>
                <BulletPoint src="/Bullet-Point.svg" />
                <ListItemText>Next.JS</ListItemText>
              </ListItem>
              <ListItem>
                <BulletPoint src="/Bullet-Point.svg" />
                <ListItemText>Javascript (ES6+)</ListItemText>
              </ListItem>
              <ListItem>
                <BulletPoint src="/Bullet-Point.svg" />
                <ListItemText>GraphQL</ListItemText>
              </ListItem>
              <ListItem>
                <BulletPoint src="/Bullet-Point.svg" />
                <ListItemText>SQL / NoSQL</ListItemText>
              </ListItem>
              <ListItem>
                <BulletPoint src="/Bullet-Point.svg" />
                <ListItemText>Node.JS</ListItemText>
              </ListItem>
              <ListItem>
                <BulletPoint src="/Bullet-Point.svg" />
                <ListItemText>AWS</ListItemText>
              </ListItem>
            </List>
          </RightContainer>
        </AboutContainer>
      </Container>
    </Wrapper>
  );
}
