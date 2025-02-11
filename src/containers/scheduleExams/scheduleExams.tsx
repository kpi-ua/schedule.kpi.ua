import dayjs from 'dayjs';
import { useMemo } from 'react';
import { ExamsListWrapper, Header, WordAccent } from './scheduleWrapper.style';
import ExamSchedule from '../../components/examSchedule';
import { GridWrapper } from '../scheduleWrapper/scheduleWrapper.style';
import { useExamsSchedule } from '../../queries/useExamsSchedle';
import { useStore } from '../../store';

const SchededuleExamsWrapper = () => {
  const group = useStore((state) => state.group);

  const { data: examsResponse } = useExamsSchedule(group?.id);

  const exams = useMemo(
    () => examsResponse?.data.sort((a, b) => dayjs(a.date).unix() - dayjs(b.date).unix()),
    [examsResponse],
  );

  return (
    <GridWrapper>
      <Header>
        {exams && exams.length > 0 ? (
          <>
            Розклад сесії для групи <WordAccent>{group?.name}</WordAccent>
          </>
        ) : (
          <>
            Ще немає актуального розкладу сесії для групи <WordAccent>{group?.name}</WordAccent>
          </>
        )}
      </Header>
      <ExamsListWrapper>
        {exams?.map((exam) => <ExamSchedule key={exam.id} exam={exam} />)}
      </ExamsListWrapper>
    </GridWrapper>
  );
};

export default SchededuleExamsWrapper;
