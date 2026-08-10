import { RadioGroup } from '../../components/RadioGroup';
import { useScreenSize } from '../../common/hooks/useScreenSize';
import { DAY_OPTIONS, DaysRange } from '../../common/constants/dayOptions';
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
    <div className="m-4">
      <RadioGroup value={convertSlice(slice)} options={options} onChange={handleChange} fullWidth rounded />
    </div>
  );
};

export default ScheduleDayToggler;
