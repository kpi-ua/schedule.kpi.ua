import styled from 'styled-components';

export const GridWrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  border-radius: 40px;
  padding: 48px 24px 7rem 24px;
  margin: 36px 24px 64px;
`;

export const WeekDay = styled.div`
  width: 91px;
  height: 20px;
  margin-bottom: 2.95rem;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height */

  color: #141518;
`;
export const TimeWrapper = styled.div`
  position: relative;
  top: 3rem;
  left: 0;
`;

export const DayWrapper = styled.div`
  position: absolute;
  top: 13rem;
  left: 12rem;
`;
