import { ListOption } from '../../types/ListOption';
import { RadioGroupOption, RadioGroupWrapper } from './RadioGroup.style';

interface RadioGroupProps<T> {
  options: ListOption<T>[];
  onChange: (value: T) => void;
  value: T;
  fullWidth?: boolean;
  rounded?: boolean;
}

export const RadioGroup = <T extends string | number>({
  options,
  onChange,
  value,
  fullWidth,
  rounded,
}: RadioGroupProps<T>) => (
  <RadioGroupWrapper fullWidth={fullWidth} rounded={rounded}>
    {options.map((item) => (
      <RadioGroupOption
        key={item.value}
        active={value === item.value}
        onClick={() => onChange(item.value)}
        data-text={item.label}
        rounded={rounded}
      >
        {item.label}
      </RadioGroupOption>
    ))}
  </RadioGroupWrapper>
);
