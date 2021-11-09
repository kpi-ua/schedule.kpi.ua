import './switch.scss';
import { useTheme } from 'styled-components';
import { useState } from 'react';

const Switch = ({onChange}) => {
  const theme = useTheme();

  const [checked, setChecked] = useState(true);

  const onCheckboxChange = event => {
    const newState = event.target.checked;
    setChecked(event.target.checked);

    onChange(newState);
  };

  return (
    <>
      <label className="switch">
        <input onChange={onCheckboxChange} checked={checked} type="checkbox"/>
        <span style={{'backgroundColor': theme['bgOptions']}} className="slider round"/>
        <span className="checker"/>
      </label>
    </>
  );
};

export default Switch;