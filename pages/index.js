import React, { useContext } from 'react';
import Head from 'next/head';
import styled from 'styled-components';

import { PictureContext } from '../pages/_app';
import { getImageUrl } from '../utils';
import Plant from '../components/Plant';
import Quote from '../components/Quote';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

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
      <div className="snap">
        <Section white>
          <Hero></Hero>
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
      <div className="snap plant">
        <Plant text="lorem" pic={getImageUrl(pics, 'hero')}></Plant>
      </div>
      <div className="snap not-full-height">
        <Footer bgColor="dark">hello</Footer>
      </div>
    </Main>
  );
};

const Main = styled.main`
  overflow: scroll;
  height: 100vh;
  background: var(--colour-white);
  padding: 0 15px;

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
      padding-top: 15px;
    }
    &:last-child {
      @media (min-width: 850px) {
        /* height: calc(100vh - 15px); */
      }

      margin-bottom: 15px;
    }
  }

  .snap.plant {
    scroll-padding-top: 15px;
  }
`;

const Section = styled.div`
  background: ${(props) =>
    props.white ? 'var(--colour-white)' : 'var(--background-light)'};
  height: 100%;
`;

export default IndexPage;
