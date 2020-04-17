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
    z-index: 1;
  }
  &::after {
    content: '';
    position: absolute;
    display: block;
    width: 107%;
    height: 25%;
    left: -10px;
    bottom: 0;
    background: var(--colour-focus);
    transition: height 300ms ease;
  }

  &:hover::after {
    height: 100%;
  }
`;
