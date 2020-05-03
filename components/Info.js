import React from 'react';
import T from './Translation';
import styled from 'styled-components';
import { CtaButton } from '../styles/button';
import { scrollToContactForm } from '../utils';
import PropTypes from 'prop-types';

const Info = ({ pic, text }) => {
  return (
    <Section>
      {pic && <Image src={pic} alt="picture of boy in hoody"></Image>}
      {text && (
        <Left>
          <T id={text}></T>

          <div className="big">
            <CtaButton onClick={scrollToContactForm}>
              <T id="contactUs"></T>
            </CtaButton>
          </div>
        </Left>
      )}
    </Section>
  );
};

export const Section = styled.div`
  display: flex;
  flex-direction: row;

  background: white;

  .big {
    font-size: 2rem;
  }

  @media (max-width: 850px) {
    flex-direction: column-reverse;
  }
`;

export const Image = styled.img`
  width: 50%;
  height: auto;
  object-fit: contain;
  padding: 3rem 0;
  @media (max-width: 850px) {
    width: 100%;
    margin-top: -6rem;
  }
`;

const Left = styled.div`
  width: 50%;
  padding: 3rem;
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

Info.propTypes = {
  pic: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Info;
