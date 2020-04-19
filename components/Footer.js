import React from 'react';
import T from '../components/Translation';
import styled from 'styled-components';
import { CtaButton } from '../styles/button';

const Footer = ({ pic }) => {
  return (
    <FooterSection pic={pic}>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam error
      necessitatibus molestiae sint vel optio. Eum, voluptas provident quis
      rerum recusandae iure hic dicta distinctio animi esse culpa tenetur neque?
    </FooterSection>
  );
};

const FooterSection = styled.footer`
  /* background: ${(props) => `url(${props.pic})`} no-repeat center center;
  background-size: cover; */
  background-color: var(--colour-black-light);
  background-blend-mode: luminosity;

  color: var(--background-light);
  padding: 3rem 1rem;
`;

export default Footer;
