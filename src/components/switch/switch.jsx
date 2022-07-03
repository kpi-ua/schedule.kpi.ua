import './switch.scss';
import { useTheme } from 'styled-components';
import { useEffect, useState } from 'react';

const Switch = ({onChange}) => {
  const theme = useTheme();

  const [checked, setChecked] = useState(true);

  useEffect(() => {
    const localStorageTheme = localStorage.getItem("theme")
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    if(localStorageTheme){
      setChecked(localStorageTheme === 'light')
    }
    else{
      setChecked(prefersLight)
    }
  }, [])

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