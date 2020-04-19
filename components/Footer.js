import React from 'react';
import T from '../components/Translation';
import styled from 'styled-components';
import { getImageUrl } from '../utils';

const Footer = ({ pics, insta }) => {
  console.log(insta);
  return (
    <FooterSection>
      <div className="copy">
        Made with ❤️ {new Date().getFullYear()} ©
        Westerling&nbsp;&amp;&nbsp;MacLean
      </div>
      <div className="Annouk">
        <T id="footerAnnouk"></T>
      </div>
      <div className="Thomas">
        <T id="footerThomas"></T>
      </div>
      <div className="socialmedia">
        <ul>
          <li>
            <a href="#">
              {/* <img
                className="logo"
                src={getImageUrl(pics, 'facebook', true)}
                alt="facebook logo"
              /> */}
              <Logo
                className="logo"
                pic={getImageUrl(pics, 'facebook', true)}
              ></Logo>
            </a>
          </li>
          <li>
            <a href="#">
              {/* <img
                className="logo"
                src={getImageUrl(pics, 'linkedin', true)}
                alt="linkedin logo"
              /> */}

              <Logo
                className="logo"
                pic={getImageUrl(pics, 'linkedin', true)}
              ></Logo>
            </a>
          </li>
          <li>
            <a href="#">
              {/* <img
                className="logo"
                src={getImageUrl(pics, 'instagram', true)}
                alt="instagram logo"
              /> */}
              <Logo
                className="logo"
                pic={getImageUrl(pics, 'instagram', true)}
              ></Logo>
            </a>
          </li>
        </ul>
      </div>
    </FooterSection>
  );
};

const Logo = styled.span`
  background: ${(props) => `url(${props.pic})`} no-repeat center center;
  background-size: cover;
  background-color: var(--colour-black-light);
  background-blend-mode: luminosity;
  width: 40px;
  height: 40px;
  display: flex;

  &:hover {
    background-blend-mode: inherit;
  }
  &:active {
    background-blend-mode: inherit;
  }
`;
const FooterSection = styled.footer`
  background-color: var(--colour-black-light);
  font-size: 0.9rem;
  color: var(--background-light);
  /* min-height: 300px; */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 0.5fr;
  padding: 2rem 2rem 0 2rem;
  gap: 1px 1px;
  grid-template-areas: 'Annouk socialmedia socialmedia' 'Thomas socialmedia socialmedia' 'copy copy copy';

  ul {
    margin-left: 0;
    list-style: none;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  .copy {
    grid-area: copy;
    color: white;
    text-align: center;
    margin: auto;
    padding-bottom: 1rem;
  }

  .Annouk {
    grid-area: Annouk;
  }

  .Thomas {
    grid-area: Thomas;
  }

  .socialmedia {
    text-align: right;
    display: flex;
    justify-content: flex-end;
    grid-area: socialmedia;

    @media (max-width: 500px) {
      ul {
        display: flex;
        justify-content: space-between;
        width: 100%;
      }
    }
  }

  @media (max-width: 500px) {
    grid-template-rows: 1fr 1fr 1fr 0.5fr;
    grid-template-areas: 'socialmedia socialmedia socialmedia' 'Annouk Annouk Annouk' 'Thomas Thomas Thomas' 'copy copy copy';

    .socialmedia {
      text-align: left;
    }
  }
`;

export default Footer;
