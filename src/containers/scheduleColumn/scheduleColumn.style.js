import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

export const ScheduleGrid = styled(Grid)`
  padding: 0.6rem 0 0.6rem;
  min-height: 240px;
  min-width: 150px;
`;

export const SchedulePaper = styled(Paper)`
  padding: 20px 16px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 16px;
  min-height: 220px;
  min-width: 150px;
  display: ${props => props.isPresent ? 'block' : 'none'}
`
