import OptionMultipleToggler from '../../components/optionMultipleToggler';
import { useWeekContext } from '../../common/context/weekContext';
import { useEffect, useState } from 'react';

const WeekSwitch = () => {
  const [initialWeek, setInitialWeek] = useState(null);
  const {setCurrentWeek, currentWeek} = useWeekContext();

  useEffect(() => {
    setInitialWeek(currentWeek);
  }, []);

  const weeks = [
    {label: 'Перший тиждень', value: 'firstWeek'},
    {label: 'Другий тиждень', value: 'secondWeek'},
  ];
  return <OptionMultipleToggler initialValue={initialWeek} options={weeks} onOptionChange={setCurrentWeek}/>;
};

export default WeekSwitch;