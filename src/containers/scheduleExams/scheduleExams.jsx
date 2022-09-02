import { useEffect, useState } from 'react';

import { useGroupContext } from 'common/context/groupContext';

import { GridWrapper, Header, WordAccent } from './scheduleWrapper.style';
import Exam from 'components/examComponent';

const ScheduleExamsWrapper = ({getData}) => {
  const [data, setData] = useState(null);

  const {group} = useGroupContext();

  useEffect(() => {
    const contextValue = group;

    if (contextValue) {
      getData(contextValue.id).then((res) => setData(res.data));
    } else {
      setData(null);
    }
  }, [group]);

  // TODO dynamic exam table
  return (
    data ?
      <div style={{overflow: 'hidden'}}>
        <GridWrapper>
          <Header>
            Розклад сесії для групи <WordAccent>{group.name}</WordAccent><br/>
            на <WordAccent>перший семестр{' '}</WordAccent>
          </Header>
          {data && data.map((d, idx) => <Exam key={idx} data={d}/>)}
        </GridWrapper>
      </div> : null
  );
};

export default ScheduleExamsWrapper;
