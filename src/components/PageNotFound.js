import React, { PropTypes } from 'react';
import s from '../styles/pageNotFound.style';

const propTypes = {
  location: PropTypes.object.isRequired,
};

function PageNotFound({ location }) {
  return (
    <p style={s.p}>
      Page not found - the path, {s.code(location.pathname)}
    </p>
  );
}

PageNotFound.propTypes = propTypes;

export default PageNotFound;
