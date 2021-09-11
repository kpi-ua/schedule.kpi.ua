import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

export const ScheduleGrid = styled(Grid)`
  justify-content: center;
  padding: 0.6rem 0 0.6rem;
  margin-bottom: 5px;

  min-height: 210px;
  max-height: 210px;
  min-width: ${(props) =>
    document.body.clientWidth >= 1300
      ? props.columnwidth - 2 + 'vw'
      : props.columnwidth - 3 + 'vw'};
`;

export const SchedulePaper = styled(Paper)`
  margin: 0 auto 0 auto;
  padding: 20px 16px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 16px;
  min-height: 190px;
  max-height: 190px;
  min-width: ${(props) =>
    document.body.clientWidth >= 1300
      ? props.columnwidth - 2 + 'vw'
      : props.columnwidth - 3 + 'vw'};
  display: ${(props) => (props.ispresent === 'true' ? 'block' : 'none')};
`;
