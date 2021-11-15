import OptionMultipleToggler from '../../components/optionMultipleToggler';
import { MODES } from '../../common/constants/modes';
import { useCurrentMode } from '../../common/utils/useCurrentMode';
import { DAY_OPTIONS } from '../../common/constants/dayOptions';
import { ScheduleDayTogglerContainer } from './scheduleDayToggler.style';

const ScheduleDayToggler = ({handler}) => {
  const mode = useCurrentMode();
  return (
    mode && mode !== MODES.BIG ?
      <ScheduleDayTogglerContainer>
        <OptionMultipleToggler initialValue={DAY_OPTIONS[mode] && DAY_OPTIONS[mode][0].value} onOptionChange={handler} options={DAY_OPTIONS[mode]}/>
      </ScheduleDayTogglerContainer> :
      null
  );
};

export default ScheduleDayToggler;