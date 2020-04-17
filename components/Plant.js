import React from 'react';
import T from '../components/Translation';
import styled from 'styled-components';
import { CtaButton } from '../styles/button';

const Plant = ({ pic }) => {
  return (
    <Section pic={pic}>
      <Left>
        <T id="lorem"></T>

        <CtaButton>
          <T id="test"></T>
        </CtaButton>
      </Left>
    </Section>
  );
};

const Section = styled.div`
  background: ${(props) => `url(${props.pic})`} no-repeat center center;
  background-size: cover;
  background-color: var(--background-light);
  /* background-blend-mode: luminosity; */
  /* filter: sepia(1); */
  height: 100vh;
`;

const Left = styled.div`
  width: 50%;
  background: var(--background-light);
  height: 100%;
  margin-left: auto;
  padding: 3rem;
`;

export default Plant;
