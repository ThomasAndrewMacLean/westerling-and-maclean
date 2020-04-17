import React, { useContext } from 'react';
import Head from 'next/head';
import styled from 'styled-components';

import T from '../components/Translation';
import { PictureContext } from '../pages/_app';
import { getImageUrl } from '../utils';
import Plant from '../components/Plant';
import { CtaButton } from '../styles/button';

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
          <Hero>
            <h1>
              <T id="title"></T>
            </h1>
            <CtaButton>
              <T id="cta"></T>
            </CtaButton>
            <img src="lady-red.png" />
          </Hero>
        </Section>
      </div>
      <div className="snap">
        <Plant pic={getImageUrl(pics, 'hero')}></Plant>
      </div>
      <div className="snap">
        <Section>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia,
          facilis adipisci animi minima sit placeat nisi id quaerat! Dolores
          reprehenderit iste debitis! Officia, consectetur accusantium! Soluta
          ipsa nobis non optio.
        </Section>
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
    scroll-snap-align: start;
    height: 100vh;
    &:first-child {
      padding-top: 15px;
    }
    &:last-child {
      height: calc(100vh - 15px);
      margin-bottom: 15px;
    }
  }
`;

const Section = styled.div`
  background: ${(props) =>
    props.white ? 'var(--colour-white)' : 'var(--background-light)'};
  height: 100%;
`;
const Hero = styled.div`
  background-color: var(--background-light);
  position: relative;
  padding-bottom: 3rem;
  h1 {
    font-size: 9vw;
    padding: 3rem;
    text-shadow: 0 0 10px var(--background-light);
  }
  ${CtaButton} {
    font-size: 3rem;
    margin: 0 3rem;
  }

  img {
    position: absolute;
    top: 0;
    height: 100vh;
    transform: rotateY(180deg);
  }
`;

export default IndexPage;
