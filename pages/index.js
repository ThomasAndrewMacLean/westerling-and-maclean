import React, { useContext, useEffect } from 'react';
import Head from 'next/head';
import styled from 'styled-components';

import { PictureContext } from '../pages/_app';
import { getImageUrl } from '../utils';
import { Info, Quote, Hero, Footer, Contact } from '../components';

const IndexPage = () => {
  const pics = useContext(PictureContext);

  useEffect(() => {
    const setResizeVariables = () => {
      // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
      let vh = window.innerHeight * 0.01;
      // Then we set the value in the --vh custom property to the root of the document
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    window.addEventListener('resize', setResizeVariables);
    setResizeVariables();
    return () => {
      window.removeEventListener('resize', setResizeVariables);
    };
  }, []);

  return (
    <Main>
      <Head>
        <title>Westerling &amp; MacLean</title>
        <meta name="theme-color" content="#f8e3c8"></meta>

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

      <div className="snap">
        <Info text="info" pic={getImageUrl(pics, 'info-image', true)}></Info>
      </div>

      <div className="snap not-full-height">
        <Quote quoteId="quote1"></Quote>
      </div>
      <div id="contact" className="snap">
        <Contact pic={getImageUrl(pics, 'contact-image', true)}></Contact>
      </div>

      <div className="snap not-full-height">
        <Footer pics={pics}></Footer>
      </div>
    </Main>
  );
};

const Main = styled.main`
  overflow: scroll;
  width: 100vw;
  overflow-x: hidden;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
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
`;

const Section = styled.div`
  background: ${(props) =>
    props.white ? 'var(--colour-white)' : 'var(--background-light)'};
  height: 100%;
`;

export default IndexPage;
