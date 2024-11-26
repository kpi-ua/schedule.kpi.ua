import './themeSwitch.scss';
import { useTheme } from 'styled-components';
import { Theme } from '../../types/Theme';

interface ThemeSwitchProps {
  value?: Theme;
  onChange: (value: Theme) => void;
}

const ThemeSwitch = ({ value, onChange }: ThemeSwitchProps) => {
  const theme = useTheme();

  const onCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked ? 'light' : 'dark');
  };

  return (
    <>
      <label className="switch">
        <input onChange={onCheckboxChange} checked={value === 'light'} type="checkbox" />
        <span style={{ backgroundColor: (theme as any).bgOptions }} className="slider round" />
        <span className="checker" />
      </label>
    </>
  );
};

export default ThemeSwitch;
