import React from 'react';
import T from '../components/Translation';
import styled from 'styled-components';

const Quote = ({ quoteId }) => {
  return (
    <QuoteSection>
      <T id={quoteId}></T>
    </QuoteSection>
  );
};

const QuoteSection = styled.div`
  width: 100%;
  padding: 5rem 0;
  background: var(--colour-black-light);
  color: var(--background-light);
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    width: 50%;
  }

  blockquote {
    /* font-family: monospace; */
    font-size: 1.5rem;
    /* font-weight: 300; */

    line-height: 3rem;
  }
  blockquote + p {
    font-weight: 400;
    font-family: monospace;
    margin-top: 1rem;
    /* font-family: 'Playfair Display', serif; */
  }

  @media (max-width: 1000px) {
    blockquote {
      line-height: 1.3rem;
      font-size: 1rem;
    }
    span {
      width: 75%;
    }
  }
`;

export default Quote;
