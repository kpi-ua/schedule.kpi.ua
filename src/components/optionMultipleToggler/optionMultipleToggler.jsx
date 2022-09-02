import { useEffect, useState } from 'react';

import { TogglerOption, TogglerWrapper } from './optionMultipleToggler.style';

const OptionMultipleToggler = ({options, onOptionChange, initialValue}) => {
  const [selectedItem, selectItem] = useState(initialValue);

  useEffect(() => {
    selectItem(initialValue);

    return () => onOptionChange(null);
  }, [initialValue]);

  useEffect(() => {
    onOptionChange(selectedItem);
  }, [selectedItem]);

  const optionChangeHandler = (value, item) => () => {
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