import styled, { css } from 'styled-components';
import { getValueFromTheme } from '../../common/utils/getValueFromTheme';
import React from 'react';
import { SubjectType } from '../../models/Pair';
import CalendarBlank from '../../assets/icons/calendar-blank.svg?react';
import dayjs from 'dayjs';

interface WrapperProps {
  $type: SubjectType;
}

const WrapperBase = styled.div<WrapperProps>`
  padding: 3px 10px;
  text-align: center;
  border-radius: 8px;
  color: ${getValueFromTheme('invertedFontColor')};
  font-weight: 500;

  ${(props) =>
    props.$type === SubjectType.Lab &&
    css`
      --accent-color: ${getValueFromTheme('otherOrange')};
    `}

  ${(props) =>
    props.$type === SubjectType.Practice &&
    css`
      --accent-color: ${getValueFromTheme('otherRed')};
    `}

  ${(props) =>
    props.$type === SubjectType.Lecture &&
    css`
      --accent-color: ${getValueFromTheme('otherPurple')};
    `}
`;

export const IrregularSubjectWrapper = styled(WrapperBase)<WrapperProps>`
  padding: 3px 3px 3px 6px;
  display: flex;
  gap: 6px;
  align-items: center;
  outline: 1px solid;
  outline-offset: -1px;

  color: var(--accent-color);
  outline-color: var(--accent-color);
  border-color: var(--accent-color);
`;

const RegularSubjectWrapper = styled(WrapperBase)`
  background-color: var(--accent-color);
`;

export const LessonsCount = styled.span`
  padding: 0px 10px;
  border-radius: 6px;
  color: ${getValueFromTheme('invertedFontColor')};
  background-color: var(--accent-color);
  font-weight: 500;
  align-self: stretch;
`;

type Props = {
  children: React.ReactNode;
  type: SubjectType;
  dates: string[];
};

const getCurrentLesson = (dates: string[]) => {
  return dates.reduce((acc, date) => {
    return dayjs().isAfter(date, 'date') || dayjs().isSame(date, 'date') ? acc + 1 : acc;
  }, 0);
};

export const SubjectTypeBadge = ({ dates, type, children }: Props) => {
  if (dates.length) {
    return (
      <IrregularSubjectWrapper $type={type}>
        <CalendarBlank />
        {children}
        <LessonsCount>
          {getCurrentLesson(dates)}/{dates.length}
        </LessonsCount>
      </IrregularSubjectWrapper>
    );
  }
  return <RegularSubjectWrapper $type={type}>{children}</RegularSubjectWrapper>;
};
