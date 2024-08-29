import OptionMultipleToggler from "../../components/optionMultipleToggler";
import { useScreenSize } from "../../common/hooks/useScreenSize";
import { DAY_OPTIONS, DaysRange } from "../../common/constants/dayOptions";
import { ScheduleDayTogglerContainer } from "./scheduleDayToggler.style";
import { Slice, useSliceOptionsContext } from '../../common/context/sliceOptionsContext';

const ScheduleDayToggler = () => {
  const { screenSize } = useScreenSize();
  const { slice, setSlice } = useSliceOptionsContext();

  const options = DAY_OPTIONS[screenSize];

  if (!options) {
    return null;
  }

  const handleChange = (value: DaysRange) => {
    const [start, end] = value.split('-');

    setSlice([+start, +end]);
  };

  const convertSlice = ([start, end]: Slice): DaysRange => `${start}-${end}`;

  return (
    <ScheduleDayTogglerContainer>
      <OptionMultipleToggler
        currentValue={convertSlice(slice)}
        onChange={handleChange}
        options={options}
      />
    </ScheduleDayTogglerContainer>
  );
};

export default ScheduleDayToggler;
