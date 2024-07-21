import "./switch.scss";
import { useTheme } from "styled-components";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { getLocalStorageItem } from "../../common/utils/parsedLocalStorage";

const Switch = ({ onChange }: { onChange: (state: any | null) => void }) => {
  const theme = useTheme();

  const [checked, setChecked] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const localStorageTheme = getLocalStorageItem("theme");
    const prefersLight = window.matchMedia(
      "(prefers-color-scheme: light)"
    ).matches;
    if (localStorageTheme) {
      setChecked(localStorageTheme === "light");
    } else {
      setChecked(prefersLight);
    }
  }, []);

  const onCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newState = event.target.checked;
    setChecked(event.target.checked);

    onChange(newState);
  };

  return (
    <>
      <label className="switch">
        <input
          onChange={onCheckboxChange}
          checked={checked === undefined ? true : checked}
          type="checkbox"
        />
        <span
          style={{ backgroundColor: (theme as any).bgOptions }}
          className={clsx(
            { "slider round": true },
            { hidden: checked === undefined }
          )}
        />
        <span
          className={clsx({ checker: true }, { hidden: checked === undefined })}
        />
      </label>
    </>
  );
};

export default Switch;
