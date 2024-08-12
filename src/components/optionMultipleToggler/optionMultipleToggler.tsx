import { TogglerOption, TogglerWrapper } from './optionMultipleToggler.style';
import React, { useEffect, useState } from 'react';

interface Props {
  options: {value: string, label: string}[],
  onOptionChange: (value: string | null) => void,
  initialValue: string | null,
}

const OptionMultipleToggler: React.FC<Props> = ({options, onOptionChange, initialValue}) => {
  const [selectedItem, selectItem] = useState(initialValue);

  useEffect(() => {
    selectItem(initialValue);

    return () => onOptionChange(null);
  }, [initialValue]);

  useEffect(() => {
    onOptionChange(selectedItem);
  }, [selectedItem]);

  const optionChangeHandler = (value: string) => () => {
    selectItem(state => {
      if (state !== value) {
        return value;
      }

      return state;
    });

  };

  const togglerOptions = (options || []).map(item => {
    return (
      <TogglerOption key={item.value}
                     active={selectedItem === item.value}
                     onClick={optionChangeHandler(item.value)}>
        {item.label}
      </TogglerOption>
    );
  });

  return (
    <TogglerWrapper>
      {togglerOptions}
    </TogglerWrapper>
  );
};

export default OptionMultipleToggler;