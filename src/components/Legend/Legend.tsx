import LastSyncDate from '../LastSyncDate';
import { SubjectTypeBadge } from '../SubjectTypeBadge/SubjectTypeBadge';
import { SubjectType } from '../../models/Pair';
import { SUBJECT_TYPES } from '../../common/constants/subjectTypes';
import dayjs from 'dayjs';

export const Legend = () => {
  return (
    <div className="mt-3 flex flex-col gap-4">
      <div className="flex justify-between">
        <div className="text-base font-semibold">Легенда</div>
        <LastSyncDate />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-start gap-2">
          <SubjectTypeBadge
            type={SubjectType.Lecture}
            // To always keep same value in badge
            dates={['1900-01-01', dayjs().format('YYYY-MM-DD'), '9999-12-31']}
          >
            {SUBJECT_TYPES.lec}
          </SubjectTypeBadge>
          <span>Непостійний тип заняття</span>
        </div>
        <div className="flex items-center justify-start gap-2">
          <span className="self-stretch rounded-md bg-other-purple px-2.5 py-0.5 font-medium text-white">1/3</span>
          <span>Серія непостійних занять</span>
        </div>
      </div>
    </div>
  );
};
