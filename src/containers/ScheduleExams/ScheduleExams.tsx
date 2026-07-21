import dayjs from 'dayjs';
import { useMemo } from 'react';
import ExamSchedule from '../../components/ExamSchedule';
import { ScheduleGrid } from '../ScheduleWrapper/ScheduleWrapper';
import { useExamsSchedule } from '../../queries/useExamsSchedle';
import { useStore } from '../../store';

const ScheduleExams = () => {
  const group = useStore((state) => state.group);

  const { data: examsResponse } = useExamsSchedule(group?.id);

  const exams = useMemo(
    () => examsResponse?.sort((a, b) => dayjs(a.date).unix() - dayjs(b.date).unix()),
    [examsResponse],
  );

  return (
    <ScheduleGrid>
      <h1 className="mx-4 my-8 text-center text-2xl leading-8 font-semibold text-neutral-900 sm:mx-8 sm:my-16 sm:text-4xl sm:leading-10">
        {exams && exams.length > 0 ? (
          <>
            Розклад сесії для групи <span className="font-semibold text-black">{group?.name}</span>
          </>
        ) : (
          <>
            Ще немає актуального розкладу сесії для групи{' '}
            <span className="font-semibold text-black">{group?.name}</span>
          </>
        )}
      </h1>
      <div className="mx-4 mb-4 flex flex-col items-center gap-10 sm:mx-8 sm:mb-8">
        {exams?.map((exam) => <ExamSchedule key={exam.id} exam={exam} />)}
      </div>
    </ScheduleGrid>
  );
};

export default ScheduleExams;
