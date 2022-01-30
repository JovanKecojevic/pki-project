import React from 'react';
import './Button.scss';
import PropTypes from 'prop-types';

export default function Button(props) {
  return (
    <div className={`custom-button${props.dark ? ' dark' : ''}`} onClick={props.onClick}>
        {props.text}
    </div>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  dark: PropTypes.bool
};

Button.defaultProps = {
  dark: false
}