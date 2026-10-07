import type { Metadata } from 'next';
import dayjs from 'dayjs';
import ExamSchedule from '../../../components/ExamSchedule';
import { ScheduleGrid } from '../../../containers/ScheduleWrapper/ScheduleWrapper';
import { unwrapAction } from '../../../lib/unwrapAction';
import { getAllGroupsAction } from '../../../actions/group.actions';
import { getExamsByGroupAction } from '../../../actions/exams.actions';

interface PageProps {
  searchParams: Promise<{ groupId?: string }>;
}

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const { groupId } = await searchParams;
  const group = groupId
    ? (await unwrapAction(getAllGroupsAction())).find(({ id }) => String(id) === groupId)
    : undefined;

  const title = group
    ? `Розклад сесії групи ${group.name} | Розклад КПІ`
    : 'Розклад сесії | Розклад КПІ ім. Ігоря Сікорського';

  return {
    title,
    description: 'Розклад сесії для академічної групи.',
    openGraph: { title, type: 'website' },
  };
}

export default async function ScheduleExamsPage({ searchParams }: PageProps) {
  const { groupId } = await searchParams;

  const [group, examsResponse] = await Promise.all([
    groupId ? (await unwrapAction(getAllGroupsAction())).find(({ id }) => String(id) === groupId) : undefined,
    groupId ? unwrapAction(getExamsByGroupAction({ groupId })) : undefined,
  ]);

  const exams = examsResponse?.slice().sort((a, b) => dayjs(a.date).unix() - dayjs(b.date).unix());

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
}
