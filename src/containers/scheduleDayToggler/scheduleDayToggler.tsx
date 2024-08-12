import OptionMultipleToggler from "../../components/optionMultipleToggler";
import { MODES } from "../../common/constants/modes";
import { useCurrentMode } from "../../common/utils/useCurrentMode";
import { DAY_OPTIONS } from "../../common/constants/dayOptions";
import { ScheduleDayTogglerContainer } from "./scheduleDayToggler.style";
import { useCurrentDateParams } from "../../common/utils/useCurrentDateParams";

const ScheduleDayToggler = ({ handler }: { handler: any }) => {
  const mode = useCurrentMode();
  const { currentDay } = useCurrentDateParams();

  const getDayOption = () => {

    if (!currentDay || currentDay === 6 || currentDay < 0) {
      return 0;
    }

    if (mode === MODES.EXTRA_SMALL) {
      return currentDay;
    } else if (mode === MODES.SMALL) {
      return Math.floor(currentDay / 2);
    } else if (mode === MODES.MEDIUM) {
      return Math.floor(currentDay / 3);
    }

    return 0;
  };

  return mode && mode !== MODES.BIG ? (
    <ScheduleDayTogglerContainer>
      <OptionMultipleToggler
        initialValue={
          DAY_OPTIONS[mode] && DAY_OPTIONS[mode][getDayOption()].value
        }
        onOptionChange={handler}
        options={DAY_OPTIONS[mode]}
      />
    </ScheduleDayTogglerContainer>
  ) : null;
};

export default ScheduleDayToggler;
