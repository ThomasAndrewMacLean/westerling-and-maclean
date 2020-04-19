import React, { useContext } from 'react';
import Head from 'next/head';
import styled from 'styled-components';

import { PictureContext } from '../pages/_app';
import { getImageUrl } from '../utils';
import Plant from '../components/Plant';
import Quote from '../components/Quote';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Contact from '../components/Contact';

const IndexPage = () => {
  const pics = useContext(PictureContext);

  return (
    <Main>
      <Head>
        <title>Westerling & MacLean</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </Head>
      <div className="snap hero">
        <Section white>
          <Hero pic={getImageUrl(pics, 'hero-image', true)}></Hero>
        </Section>
      </div>
      <div className="snap plant">
        <Plant
          white
          imageLeft
          text="lorem"
          pic={getImageUrl(pics, 'wireframe')}
        ></Plant>
      </div>

      <div className="snap not-full-height">
        <Quote quoteId="quote1"></Quote>
      </div>

      <Contact
        imageLeft
        pic={getImageUrl(pics, 'contact-image', true)}
      ></Contact>

      <div className="snap not-full-height">
        <Footer></Footer>
      </div>
    </Main>
  );
};

const Main = styled.main`
  overflow: scroll;
  width: 100vw;
  overflow-x: hidden;
  height: 100vh;
  background: var(--colour-white);
  padding: 0 1rem;
  .hero {
    min-height: 70vh;
  }
  @media (max-width: 500px) {
    padding: 0;
  }

  scroll-snap-type: y proximity;
  .snap {
    @media (min-width: 850px) {
      scroll-snap-align: start;

      min-height: 100vh;
    }
    &.not-full-height {
      min-height: auto !important;
    }
    &:first-child {
      padding-top: 1rem;
      @media (max-width: 500px) {
        padding-top: 0;
      }
    }
    &:last-child {
      margin-bottom: 1rem;
      @media (max-width: 500px) {
        margin-bottom: 0;
      }
    }
  }

  .snap.plant {
    scroll-padding-top: 1rem;
  }
`;

const Section = styled.div`
  background: ${(props) =>
    props.white ? 'var(--colour-white)' : 'var(--background-light)'};
  height: 100%;
`;

export default IndexPage;
