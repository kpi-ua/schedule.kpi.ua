import { GridWrapper, Header, WordAccent } from './scheduleWrapper.style';
import Exam from '../../components/examComponent';
import { useGroupContext } from '../../common/context/groupContext';
import { useWeekContext } from '../../common/context/weekContext';
import { useEffect, useState } from 'react';

const SchededuleExamsWrapper = ({getData}) => {
  const [data, setData] = useState(null);

  const {group} = useGroupContext();
  const { currentWeek } = useWeekContext();

  useEffect(() => {
    const contextValue = group;

    if (contextValue) {
      getData(contextValue.id).then((res) => setData(res.data));
    } else {
      setData(null);
    }
  }, [group, getData]);

  console.log(data);

  return (
    data ?
      <div style={{overflow: 'hidden'}}>
        <GridWrapper>
          <Header>
            Розклад сесії для групи <WordAccent>{group.name}</WordAccent><br/>
            на <WordAccent>{currentWeek === "firstWeek" ? "перший семестр" : "другий семестр"}</WordAccent>
          </Header>
          {data && data.map((d, idx) => <Exam key={idx} data={d}/>)}
        </GridWrapper>
      </div> : null
  );
};

export default SchededuleExamsWrapper;
