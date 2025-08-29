import styled from 'styled-components';
import LastSyncDate from '../LastSyncDate';
import { LessonsCount, SubjectTypeBadge } from '../SubjectTypeBadge/SubjectTypeBadge';
import { SubjectType } from '../../models/Pair';
import { SUBJECT_TYPES } from '../../common/constants/subjectTypes';
import { getValueFromTheme } from '../../common/utils/getValueFromTheme';
import dayjs from 'dayjs';

const LegendWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 12px;
  gap: 16px;
`;

const LegendHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LegendHeader = styled.div`
  font-size: 16px;
  font-weight: 600;
`;

const LegendContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const LegendItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
`;

const LessonsCountStyleProvider = styled.div`
  --accent-color: ${getValueFromTheme('otherPurple')};

  & > span {
    padding-top: 2px;
    padding-bottom: 2px;
  }
`;

export const Legend = () => {
  return (
    <LegendWrapper>
      <LegendHeaderWrapper>
        <LegendHeader>Легенда</LegendHeader>
        <LastSyncDate />
      </LegendHeaderWrapper>
      <LegendContent>
        <LegendItem>
          <SubjectTypeBadge
            type={SubjectType.Lecture}
            // To always keep same value in badge
            dates={['1900-01-01', dayjs().format('YYYY-MM-DD'), '9999-12-31']}
          >
            {SUBJECT_TYPES.lec}
          </SubjectTypeBadge>
          <span>Непостійний тип заняття</span>
        </LegendItem>
        <LegendItem>
          <LessonsCountStyleProvider>
            <LessonsCount>1/3</LessonsCount>
          </LessonsCountStyleProvider>
          <span>Серія непостійних занять</span>
        </LegendItem>
      </LegendContent>
    </LegendWrapper>
  );
};
