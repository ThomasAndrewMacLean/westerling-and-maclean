import React from 'react';
import T from './Translation';
import styled from 'styled-components';
import { CtaButton } from '../styles/button';
import { scrollToContactForm } from '../utils';

const Info = ({ pic, text, imageLeft, white }) => {
  return (
    <Section white={white} imageLeft={imageLeft}>
      {pic && <Image loading="lazy" white={white} src={pic}></Image>}
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

  background: white;

  @media (max-width: 850px) {
    flex-direction: ${(props) =>
      props.imageLeft ? 'column-reverse' : 'column-reverse'};
  }
`;

export const Image = styled.img`
  width: 50%;
  height: auto;
  object-fit: cover;
  padding: 3rem;
  @media (max-width: 850px) {
    width: 100%;
    margin-top: -6rem;
  }
`;

const Left = styled.div`
  width: 50%;
  padding: 3rem;
  transform: translateX(${(props) => ` ${-15 * (4 * props.ratio - 4)}px`});
  transition: transform 250ms ease;

  display: flex;
  flex-direction: column;
  justify-content: center;

  ${CtaButton} {
    margin: 2rem auto;
    display: flex;
  }
  @media (max-width: 850px) {
    width: 100%;
  }

  @media (max-width: 500px) {
    padding: 3rem 1rem;
  }
  @media (min-width: 850px) {
    min-height: 100vh;
  }
`;

export default Info;
