import {LessThenMedium} from "../../common/styles/styles";
import OptionMultipleToggler from "../../components/optionMultipleToggler";
import {MODES} from "../../common/constants/modes";
import {getCurrentMode} from "../../common/utils/getCurrentMode";

const ScheduleDayToggler = ({handler, initialValue}) => {
  const togglerOptions = {
    [MODES.EXTRA_SMALL]: [
      {
        label: 'ПН',
        value: 'mon'
      },
      {
        label: 'ВТ',
        value: 'tue'
      },
      {
        label: 'СР',
        value: 'wed'
      },
      {
        label: 'ЧТ',
        value: 'thu'
      },
      {
        label: 'ПТ',
        value: 'fri'
      },
      {
        label: 'СБ',
        value: 'sat'
      },
    ],
    [MODES.SMALL]: [
      {
        label: 'ПН-ВТ',
        value: 'mon-tue'
      },
      {
        label: 'СР-ЧТ',
        value: 'wed-thu'
      },
      {
        label: 'ПТ-СБ',
        value: 'wed-sat'
      },
    ],
    [MODES.MEDIUM]: [
      {
        label: 'ПН-СР',
        value: 'mon-wed'
      },
      {
        label: 'ЧТ-СБ',
        value: 'thu-sat'
      },
    ]
  }

  const mode = getCurrentMode();

  return (
      <LessThenMedium>
        <OptionMultipleToggler initialValue={initialValue} onOptionChange={handler} options={togglerOptions[mode]}/>
      </LessThenMedium>
  )
}

export default ScheduleDayToggler;