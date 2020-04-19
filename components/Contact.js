import React from 'react';
import T from '../components/Translation';
import styled from 'styled-components';
import { CtaButton } from '../styles/button';
const Contact = ({ pic }) => {
  return (
    <Section>
      <ContactWrap>
        <T id="contactTitle"></T>
        <ContactForm>
          <div className="wrap">
            <label htmlFor="email">
              <T id="contactEmail"></T>
            </label>
            <input
              className="input"
              type="email"
              name="email"
              id="email"
              required
            />
          </div>
          <div className="wrap">
            <label htmlFor="message">
              <T id="contactBoodschap"></T>
            </label>
            <textarea
              className="input"
              type="text"
              name="message"
              rows="5"
              id="message"
              required
            />
          </div>
          <div className="submit-wrap">
            <CtaButton>
              <T id="contactVerstuur"></T>
            </CtaButton>
          </div>
        </ContactForm>
      </ContactWrap>

      <img loading="lazy" src={pic} alt="background image with plants" />
    </Section>
  );
};

const Section = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  background: var(--gradient-bottom-top);
  min-height: 100vh;
  img {
    width: 50%;
  }
  @media (max-width: 850px) {
    flex-direction: column;
    img {
      width: 100%;
    }
  }
`;

const ContactWrap = styled.div`
  padding: 3rem;
  width: 100%;

  .input {
    /* max-width: 400px; */
    width: 100%;
    font-size: 1rem;
    line-height: 1.5rem;
    padding-left: 5px;
    font-weight: 300;
    border: none;
    box-shadow: 0px 2px 10px 0px #00000011;
    border-radius: 5px;
    font-family: inherit;
    outline: none;
  }
  .input:focus {
    box-shadow: 0px 2px 10px 0px var(--colour-black-light);
  }
  textarea {
    resize: none;
  }
  label {
    p {
      margin-bottom: 0;
    }
  }
  @media (max-width: 500px) {
    padding: 3rem 1rem;
  }
`;

const ContactForm = styled.form`
  .submit-wrap {
    padding-top: 1rem;
  }
  /* label {
    // font-size: 0.8rem;
  } */
`;
export default Contact;
