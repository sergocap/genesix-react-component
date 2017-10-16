'use strict';

import React from 'react';

const BreakView = (props) => {
  const label = props.breakLabel;
  const className = props.breakClassName || 'break';

  return (
    <span className={className}>
      {label}
    </span>
  );
}

export default BreakView;
