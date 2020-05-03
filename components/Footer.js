import React from 'react';
import T from '../components/Translation';
import styled from 'styled-components';
import { getImageUrl } from '../utils';
import PropTypes from 'prop-types';

const Footer = ({ pics }) => {
  return (
    <FooterSection>
      <div className="copy">
        Made with ❤️ {new Date().getFullYear()} ©
        <a href="https://westerling-maclean.be">
          Westerling&nbsp;&amp;&nbsp;MacLean
        </a>
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
            <a href="#facebook">
              Facebook
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-facebook"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
          </li>
          <li>
            <a href="#linkedin">
              Linkedin
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </li>
          <li>
            <a href="#instagram">
              Instagram
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-instagram"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </FooterSection>
  );
};

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
    color: #ffffffaa;
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

    a {
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
      padding: 0.3rem 0.6rem 0.3rem 1rem;
      transition: all 350ms ease;
    }
    a:hover {
      color: var(--colour-black);
      background: var(--colour-focus);
      border-radius: 3px;
    }

    svg {
      margin-left: 1rem;
    }

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
Footer.propTypes = {
  pics: PropTypes.array.isRequired,
};
export default Footer;
