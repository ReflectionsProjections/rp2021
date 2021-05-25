import React from 'react';

import { Typeahead } from 'react-bootstrap-typeahead';

const UISuggestiveSelect = ({ id, options, onChange, selected }) => {
  return (
    <Typeahead
      id={id}
      selected={selected}
      onChange={onChange}
      options={options}
    />
  );
};

export default UISuggestiveSelect;