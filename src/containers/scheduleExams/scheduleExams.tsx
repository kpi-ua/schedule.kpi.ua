import { ExamsListWrapper, Header, WordAccent } from './scheduleWrapper.style';
import { useEffect, useState } from 'react';

import { Exam } from '../../models/Exam';
import ExamSchedule from '../../components/examSchedule';
import { GridWrapper } from '../scheduleWrapper/scheduleWrapper.style';
import { getExamsByGroup } from '../../api/schedule';
import { useStore } from '../../store';
import { useWeekStore } from '../../store/weekStore';

const SchededuleExamsWrapper = () => {
  const [exams, setExams] = useState<Exam[]>([]);

  const group = useStore((state) => state.group);

  const { currentWeek } = useWeekStore();

  const groupId = group?.id;

  useEffect(() => {
    if (groupId) {
      getExamsByGroup(groupId).then((res) => setExams(res.data));
    } else {
      setExams([]);
    }
  }, [groupId]);

  return (
    <GridWrapper>
      <Header>
        Розклад сесії для групи&nbsp;<WordAccent>{group?.name}</WordAccent>
        <br />
        на&nbsp;
        <WordAccent>{currentWeek === 'firstWeek' ? 'перший семестр' : 'другий семестр'}</WordAccent>
      </Header>
      <ExamsListWrapper>
        {exams.map((exam) => (
          <ExamSchedule key={exam.id} exam={exam} />
        ))}
      </ExamsListWrapper>
    </GridWrapper>
  );
};

export default SchededuleExamsWrapper;
