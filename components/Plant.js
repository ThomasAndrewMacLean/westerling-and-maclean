import React from 'react';
import T from '../components/Translation';
import styled from 'styled-components';
import { CtaButton } from '../styles/button';
// import { useIntersect } from '../hooks/useIntersect';
// const buildThresholdArray = () => Array.from(Array(2).keys(), (i) => i / 2);

const Plant = ({ pic }) => {
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
    <Section pic={pic}>
      <Left>
        {/* <Left ref={ref} ratio={hasBeenLoaded ? 1 : entry.intersectionRatio}> */}
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
  /* margin-bottom: 15px;
  margin-top: 15px; */
  /* height: calc(100vh - 30px); */
  height: 100vh;
  cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>☘️</text></svg>"),
    auto;
`;

const Left = styled.div`
  width: 50%;
  background: var(--background-light);
  height: 100%;
  margin-left: auto;
  padding: 3rem;
  transform: translateX(${(props) => ` ${-15 * (4 * props.ratio - 4)}px`});
  transition: transform 250ms ease;
`;

export default Plant;
