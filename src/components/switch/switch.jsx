import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { useTheme } from 'styled-components';

import './switch.scss';

import { getLocalStorageItem } from 'common/utils/parsedLocalStorage';

const Switch = ({onChange}) => {
  const theme = useTheme();

  const [checked, setChecked] = useState(undefined);

  useEffect(() => {
    const localStorageTheme = getLocalStorageItem('theme');
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    if (localStorageTheme) {
      setChecked(localStorageTheme === 'light');
    } else {
      setChecked(prefersLight);
    }
  }, []);

  const onCheckboxChange = event => {
    const newState = event.target.checked;
    setChecked(event.target.checked);

    onChange(newState);
  };

  return (
    <>
      <label className="switch">
        <input onChange={onCheckboxChange} checked={checked === undefined ? true : checked} type="checkbox"/>
        <span style={{'backgroundColor': theme['bgOptions']}}
              className={clsx(
                {'slider round': true},
                {'hidden': checked === undefined}
              )}/>
        <span className={clsx(
          {'checker': true},
          {'hidden': checked === undefined}
        )}/>
      </label>
    </>
  );
};

export default Switch;