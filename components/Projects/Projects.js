import React, { useEffect, useState } from "react";
import {
  Container,
  ImageTag,
  Image,
  ProjectBody,
  ProjectItemContainer,
  Section,
  ProjectsContainer,
  ProjectTitle,
  Subtitle,
  Title,
  Wrapper,
  LinksContainer,
  LinkImage,
  ProjectDetails,
} from "./Styles";
import { AiFillGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";

export default function Projects(props) {
  return (
    <Wrapper id="Projects">
      <Container>
        <Subtitle>MY PROJECTS</Subtitle>
        <Title>Projects I've Worked On</Title>
        <ProjectsContainer>
          <Section Full>
            <ProjectItemContainer>
              <ImageTag
                href="https://apps.shopify.com/elevate-ab-testing"
                target="_blank"
              >
                <Image src="/ShopifyApp.png" loading="lazy" alt="" />
              </ImageTag>
              <ProjectTitle>Shopify App</ProjectTitle>
              <ProjectBody>
                Built an application listed on the Shopify app store from design
                to development. Utilizes the Shopify API to handle making
                functions for merchants based on the apps key functionality.
              </ProjectBody>
              <ProjectDetails>
                React - Next.js - HTML/CSS - Javascript - Graphql - NoSQL - AWS
              </ProjectDetails>
              <LinksContainer>
                {/* <LinkImage>
      <AiFillGithub />
      
      </LinkImage> */}
                <LinkImage
                  href="https://apps.shopify.com/elevate-ab-testing"
                  target="_blank"
                >
                  <FiExternalLink />
                </LinkImage>
              </LinksContainer>
            </ProjectItemContainer>
            <ProjectItemContainer>
              <ImageTag href="https://shopflow.vercel.app/" target="_blank">
                <Image src="/Shopflow.png" loading="lazy" alt="" />
              </ImageTag>
              <ProjectTitle>Shopflow</ProjectTitle>
              <ProjectBody>
                Built a modern responsive ecommerce website called Shopflow
                using React and Next.js. All typical eccomerce features are
                built in such as cart functionality and checkout processes.
              </ProjectBody>
              <ProjectDetails>
                React - Next.js - HTML/CSS - Javascript
              </ProjectDetails>
              <LinksContainer>
                <LinkImage
                  href="https://github.com/Ahmed-Zitouni/Shopflow"
                  target="_blank"
                >
                  <AiFillGithub />
                </LinkImage>
                <LinkImage href="https://shopflow.vercel.app/" target="_blank">
                  <FiExternalLink />
                </LinkImage>
              </LinksContainer>
            </ProjectItemContainer>
          </Section>
          <Section>
            <ProjectItemContainer>
              <ImageTag href="https://buildpage.vercel.app/" target="_blank">
                <Image src="/Buildpage.png" loading="lazy" alt="" />
              </ImageTag>
              <ProjectTitle>Buildpage</ProjectTitle>
              <ProjectBody>
                Built a modern responsive website called Buildpage using React
                and Next.js. A fully built out website displaying a software
                solution and its features across multiple pages.
              </ProjectBody>
              <ProjectDetails>
                React - Next.js - HTML/CSS - Javascript
              </ProjectDetails>
              <LinksContainer>
                <LinkImage
                  href="https://github.com/Ahmed-Zitouni/Buildpage"
                  target="_blank"
                >
                  <AiFillGithub />
                </LinkImage>
                <LinkImage href="https://buildpage.vercel.app/" target="_blank">
                  <FiExternalLink />
                </LinkImage>
              </LinksContainer>
            </ProjectItemContainer>
          </Section>
        </ProjectsContainer>
      </Container>
    </Wrapper>
  );
}
