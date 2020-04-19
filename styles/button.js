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

  &::before {
    content: '';
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    left: -1rem;
    padding: 1rem;
    top: -1rem;
  }

  @media (hover: hover) {
    &:hover::after {
      height: 100%;
    }
  }

  &:active::after {
    height: 100%;
  }

  &:active {
    color: #00000040;
  }
`;
