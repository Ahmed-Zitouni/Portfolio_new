import React, { useEffect, useState } from "react";
import {
  Container,
  ImageTag,
  Image,
  ProjectBody,
  ProjectItemContainer,
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
              functions for merchants based on the apps key functionality..
            </ProjectBody>
            <ProjectDetails>
              React - Next.js - Javascript - HTML/CSS - Shopify Liquid - AWS
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
            <ImageTag href="" target="_blank">
              <Image src="/Shopflow.png" loading="lazy" alt="" />
            </ImageTag>
            <ProjectTitle>Shopflow Website</ProjectTitle>
            <ProjectBody>
              Built a modern responsive landing page called Shopflow using React
              and Next.js.
            </ProjectBody>
            <ProjectDetails>
              React - Next.js - Javascript - HTML/CSS
            </ProjectDetails>
            <LinksContainer>
              <LinkImage href="" target="_blank">
                <AiFillGithub />
              </LinkImage>
              <LinkImage href="" target="_blank">
                <FiExternalLink />
              </LinkImage>
            </LinksContainer>
          </ProjectItemContainer>
          <ProjectItemContainer>
            <ImageTag href="" target="_blank">
              <Image src="/Buildpage.png" loading="lazy" alt="" />
            </ImageTag>
            <ProjectTitle>OutClass</ProjectTitle>
            <ProjectBody></ProjectBody>
            <ProjectDetails>
              React Native - Javascript - Puppateer - AWS
            </ProjectDetails>
            <LinksContainer>
              <LinkImage href="" target="_blank">
                <AiFillGithub />
              </LinkImage>
              {/* <LinkImage>
      <FiExternalLink />
      </LinkImage> */}
            </LinksContainer>
          </ProjectItemContainer>
        </ProjectsContainer>
      </Container>
    </Wrapper>
  );
}
