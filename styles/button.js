import styled from 'styled-components';

export const CtaButton = styled.button`
  font-size: inherit;
  font-family: inherit;
  font-weight: inherit;
  background: none;
  outline: none;
  border: none;
  display: inline-block;
  cursor: pointer;
  position: relative;
  p {
    position: relative;
    line-height: inherit !important;
    margin-bottom: inherit !important;
    z-index: 1;

    @media (max-width: 500px) {
      font-size: 1.3rem;
    }
  }
  &::after {
    content: '';
    position: absolute;
    display: block;
    width: 108%;
    height: 25%;
    left: -4%;
    bottom: 0;
    background: var(--colour-focus);
    transition: height 300ms ease;
  }

  &:hover::after {
    height: 100%;
  }
`;
