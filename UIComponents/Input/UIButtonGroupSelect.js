import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const buttonStyles = {
  fontWeight: 200
};
const selectedButtonStyles = {
  backgroundColor: '#0CBABB'
};

const UIButtonGroupSelect = ({ options, onSelect }) => {
  const [selected, setSelected] = useState('');

  const makeHandleClick = value => {
    return () => {
      onSelect(value);
      setSelected(value);
    };
  };

  const renderButton = ({ label, value }) => {
    return (
      <Button
        key={value}
        onClick={makeHandleClick(value)}
        style={
          value === selected
            ? { ...buttonStyles, ...selectedButtonStyles }
            : buttonStyles
        }
      >
        {label}
      </Button>
    );
  };

  return (
    <ButtonGroup>{options.map(option => renderButton(option))}</ButtonGroup>
  );
};
export default UIButtonGroupSelect;