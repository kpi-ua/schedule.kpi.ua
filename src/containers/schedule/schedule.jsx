import React from 'react';
import Grid from '@material-ui/core/Grid';
import {
  GridWrapper,
  WeekDay,
  TimeWrapper,
  DayWrapper,
} from './schedule.style';
import ScheduleColumn from '../scheduleColumn';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Paper from '@material-ui/core/Paper';
import Radio from '@material-ui/core/Radio';
import Divider from '@material-ui/core/Divider';

import styled from 'styled-components';

const TimePaper = styled(Paper)({
  marginRight: 'auto',
  marginLeft: 'auto',
  textAlign: 'center',
  width: '4.4rem',
  padding: '0.6rem 0',
  background: '#141518',
  borderRadius: '42px',
  fontFamily: 'Montserrat',
  fontStyle: 'normal',
  fontWeight: '600',
  fontSize: '16px',
  lineHeight: '20px',
  color: ' #FFFFFF',
});

const StyledDivider = styled(Divider)({
  backgroundColor: 'rgba(0, 0, 0, 0)',
  backgroundImage:
    'linear-gradient(to right, #000 10%, rgba(255, 255, 255, 0) 35%)',
  backgroundPosition: 'left',
  backgroundSize: '12px 1.5px',
  backgroundRepeat: 'repeat-x',
});

const Schedule = ({ scheduleData, group, week, isMobile }) => {
  const schedule =
    week === 'first'
      ? scheduleData.scheduleFirstWeek
      : scheduleData.scheduleSecondWeek;

  //for mobile
  const [spacing, setSpacing] = React.useState(2);
  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  return isMobile ? (
    <Grid container>
      <Grid item>
        <RadioGroup
          name='spacing'
          aria-label='spacing'
          value={spacing.toString()}
          onChange={handleChange}
          row
        >
          {['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'].map((value) => (
            <FormControlLabel
              key={value}
              value={value.toString()}
              control={<Radio />}
              label={value.toString()}
            />
          ))}
        </RadioGroup>
      </Grid>
    </Grid>
  ) : (
    <GridWrapper>
      <TimeWrapper>
        <Grid style={{ margin: '0' }} container direction='column'>
          {['08:30', '10:25', '12:20', '14:15', '16:10', '18:30'].map(
            (time) => (
              <Grid
                style={{ paddingBottom: '11rem' }}
                container
                item
                alignItems='center'
              >
                <Grid item xs={1}>
                  <TimePaper>{time}</TimePaper>
                </Grid>
                <Grid item xs={11}>
                  <StyledDivider />
                </Grid>
              </Grid>
            )
          )}
        </Grid>
      </TimeWrapper>
      <DayWrapper>
        <Grid container justifyContent='center' spacing={8}>
          {[
            'Понеділок',
            'tuesday',
            'wednesday',
            'thursday',
            'friday',
            'saturday',
          ].map((weekDay) => (
            <Grid
              style={{ width: '16vw' }}
              container
              direction='column'
              item
              xs={12}
              sm={2}
              spacing={2}
            >
              <WeekDay>{weekDay}</WeekDay>
              <ScheduleColumn
                dayData={schedule.find((obj) => obj.day === weekDay)}
              />
            </Grid>
          ))}
        </Grid>
      </DayWrapper>
    </GridWrapper>
  );
};

export default Schedule;
