import React, { useContext, useEffect, useState } from 'react';
import marked from 'marked';
import { TranslationContext } from '../pages/_app';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Translation = ({ id }) => {
  const [showKeys, setShowKeys] = useState(false);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (document.location.search.includes('showKeys')) {
        setShowKeys(true);
      }
    }
  }, []);
  const translationsFromContext = useContext(TranslationContext);
  const translation = translationsFromContext.find((t) => t.id === id);
  return (
    <Span
      className={showKeys ? 'showKeys' : ''}
      dangerouslySetInnerHTML={{
        __html: marked(translation && !showKeys ? translation.NL : id),
      }}
    ></Span>
  );
};

const Span = styled.span`
  p {
    line-height: 1.8rem;
    margin-bottom: 2rem;
  }
`;
Translation.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Translation;
