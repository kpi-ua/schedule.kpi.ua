import {TogglerOption, TogglerWrapper} from "./optionMultipleToggler.style";
import {useState} from "react";

const OptionMultipleToggler = ({options, onOptionChange, initialValue}) => {
  const [selectedItem, selectItem] = useState(initialValue);

  const optionChangeHandler = value => () => {
    selectItem(state => {
      if (state !== value) {
        onOptionChange(value);
        return value;
      }

      return state;
    });

  }

  const togglerOptions = (options || []).map(item => {
    return (
        <TogglerOption key={item.value}
                       active={selectedItem === item.value}
                       onClick={optionChangeHandler(item.value)}>
          {item.label}
        </TogglerOption>
    )
  })

  return (
      <TogglerWrapper>
        {togglerOptions}
      </TogglerWrapper>
  )
}

export default OptionMultipleToggler