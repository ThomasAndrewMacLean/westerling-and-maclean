import React from 'react';
import T from '../components/Translation';
import styled from 'styled-components';
import { CtaButton } from '../styles/button';
// import { useIntersect } from '../hooks/useIntersect';
// const buildThresholdArray = () => Array.from(Array(2).keys(), (i) => i / 2);

const Plant = ({ pic, text, imageLeft, white }) => {
  // const [hasBeenLoaded, setHasBeenLoaded] = useState(false);
  // const [ref, entry] = useIntersect({
  //   threshold: buildThresholdArray(),
  // });

  // useEffect(() => {
  //   if (entry.intersectionRatio > 0.4) {
  //     setHasBeenLoaded(true);
  //   }
  // }, [entry.intersectionRatio]);
  return (
    <>
      <Section imageLeft={imageLeft}>
        <Image white={white} pic={pic}></Image>
        <Left white={white}>
          {/* <Left ref={ref} ratio={hasBeenLoaded ? 1 : entry.intersectionRatio}> */}
          <T id={text}></T>

          <CtaButton>
            <T id="test"></T>
          </CtaButton>
        </Left>
      </Section>
    </>
  );
};

const Section = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.imageLeft ? 'row' : 'row-reverse')};
  /* min-height: 100vh; */
  cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>☘️</text></svg>"),
    auto;

  @media (max-width: 850px) {
    flex-direction: ${(props) =>
      props.imageLeft ? 'column-reverse' : 'column-reverse'};
  }
`;

const Image = styled.div`
  width: 100%;
  background: ${(props) => `url(${props.pic})`} no-repeat center center;
  background-size: cover;
  background-color: var(--colour-black);
  background-blend-mode: ${(props) => props.white && 'luminosity'};

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

  @media (max-width: 850px) {
    background: ${(props) =>
      props.white ? `var(--colour-white)` : 'var(--background-light)'};
  }

  @media (max-width: 500px) {
    padding: 3rem 1rem;
  }
  @media (min-width: 850px) {
    min-height: 100vh;
  }
`;

export default Plant;
