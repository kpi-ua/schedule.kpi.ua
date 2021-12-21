import { GridWrapper, Header, WordAccent } from './scheduleWrapper.style';
import Exam from '../../components/examComponent';
import { useGroupContext } from '../../common/context/groupContext';
import { useEffect, useState } from 'react';

const SchededuleExamsWrapper = ({getData}) => {
  const [data, setData] = useState(null);

  const {group} = useGroupContext();

  useEffect(() => {
    const contextValue = group;

    if (contextValue) {
      getData(contextValue).then((res) => setData(res.data));
    } else {
      setData(null);
    }
  }, [group]);

  return (
    data ?
      <div style={{overflow: 'hidden'}}>
        <GridWrapper>
          <Header>
            Розклад сесії для групи <WordAccent>{group}</WordAccent><br/>
            на <WordAccent>перший семестр{' '}</WordAccent>
          </Header>
          {data && data.map((d, idx) => <Exam key={idx} data={d}/>)}
        </GridWrapper>
      </div> : null
  );
};

export default SchededuleExamsWrapper;
