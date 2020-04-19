import React from 'react';
import T from '../components/Translation';
import styled from 'styled-components';
import { CtaButton } from '../styles/button';

const Hero = () => {
  return (
    <HeroSection>
      <T id="title"></T>

      <CtaButton>
        <T id="cta"></T>
      </CtaButton>
      <img src="lady-red.png" />
    </HeroSection>
  );
};

const HeroSection = styled.div`
  background-color: var(--background-light);
  position: relative;
  padding-bottom: 3rem;
  @media (max-width: 850px) {
    margin-bottom: 6rem;
  }

  h1 {
    font-size: 9vw;
    padding: 3rem;
    margin-bottom: 0;
    text-shadow: 0 0 10px var(--background-light);
  }
  ${CtaButton} {
    font-size: 3rem;
    margin: 0 3rem;
  }

  img {
    position: absolute;
    top: -50px;

    right: 1%;
    height: 100vh;
    transform: rotateY(180deg);

    @media (max-width: 1000px) {
      right: -25%;
    }
    @media (max-width: 850px) {
      right: -5%;
      height: 120%;
      top: 0;
    }

    @media (max-width: 630px) {
      position: relative;
      width: 100%;
      top: 0;
      height: auto;
    }
  }
`;

export default Hero;
