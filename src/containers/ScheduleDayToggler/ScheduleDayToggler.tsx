import { RadioGroup } from '../../components/RadioGroup';
import { useScreenSize } from '../../common/hooks/useScreenSize';
import { DAY_OPTIONS, DaysRange } from '../../common/constants/dayOptions';
import { ScheduleDayTogglerContainer } from './ScheduleDayToggler.style';
import { Slice, useSliceOptionsContext } from '../../common/context/SliceOptionsContext';

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
      <RadioGroup value={convertSlice(slice)} options={options} onChange={handleChange} fullWidth rounded />
    </ScheduleDayTogglerContainer>
  );
};

export default ScheduleDayToggler;
