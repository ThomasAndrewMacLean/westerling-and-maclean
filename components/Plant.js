import React from 'react';
import T from '../components/Translation';
import styled from 'styled-components';
import { CtaButton } from '../styles/button';
import { scrollToContactForm } from '../utils';

const Plant = ({ pic, text, imageLeft, white }) => {
  return (
    <Section imageLeft={imageLeft}>
      {pic && <Image white={white} pic={pic}></Image>}
      {text && (
        <Left white={white}>
          <T id={text}></T>

          <CtaButton onClick={scrollToContactForm}>
            <T id="contactUs"></T>
          </CtaButton>
        </Left>
      )}
    </Section>
  );
};

export const Section = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.imageLeft ? 'row' : 'row-reverse')};
  /* cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>☘️</text></svg>"),
    auto; */

  @media (max-width: 850px) {
    flex-direction: ${(props) =>
      props.imageLeft ? 'column-reverse' : 'column-reverse'};
  }
`;

export const Image = styled.div`
  width: 100%;
  min-height: 450px;
  background: ${(props) => `url(${props.pic})`} no-repeat center center;
  background-size: cover;
  /* background-color: var(--colour-black);
  background-blend-mode: ${(props) => props.white && 'luminosity'}; */
  filter: ${(props) => props.white && 'grayscale(0.5)'};
  padding: 3rem;
  @media (max-width: 500px) {
    padding: 3rem 1rem;
  }
  @media (max-width: 850px) {
    height: 450px;
  }
`;

const Left = styled.div`
  width: 100%;
  background: ${(props) =>
    props.white ? `var(--gradient-left-bottom)` : 'var(--gradient-right-top)'};

  padding: 3rem;
  transform: translateX(${(props) => ` ${-15 * (4 * props.ratio - 4)}px`});
  transition: transform 250ms ease;

  ${CtaButton} {
    margin: 2rem auto;
    display: flex;
  }
  @media (max-width: 850px) {
    background: ${(props) =>
      props.white ? `var(--colour-white)` : 'var(--colour-white)'};
  }

  @media (max-width: 500px) {
    padding: 3rem 1rem;
  }
  @media (min-width: 850px) {
    min-height: 100vh;
  }
`;

export default Plant;
