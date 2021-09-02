import React from 'react';
import Grid from '@material-ui/core/Grid';
import { GridWrapper } from './schedule.style';
import ScheduleColumn from '../scheduleColumn';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';

const Schedule = ({scheduleData, group, week, isMobile}) => {
  const schedule = week === 'first' ? scheduleData.scheduleFirstWeek : scheduleData.scheduleSecondWeek;

  //for mobile
  const [spacing, setSpacing] = React.useState(2);
  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  return isMobile ? (
    <Grid container>
      <Grid item>
        <RadioGroup
          name="spacing"
          aria-label="spacing"
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
    </Grid> ) : (
    <GridWrapper>
      <Grid container justifyContent='space-between' spacing={3}>
        <Grid container direction='column' item xs={12} sm={2}
          spacing={2}>
          <ScheduleColumn dayData={schedule.find(obj => obj.day === 'monday')}/>
        </Grid>
        <Grid container direction='column' item xs={12} sm={2}
          spacing={2}>
          <ScheduleColumn dayData={schedule.find(obj => obj.day === 'tuesday')}/>
        </Grid>
        <Grid container direction='column' item xs={12} sm={2}
          spacing={2}>
          <ScheduleColumn dayData={schedule.find(obj => obj.day === 'wednesday')}/>
        </Grid>
        <Grid container direction='column' item xs={12} sm={2}
          spacing={2}>
          <ScheduleColumn dayData={schedule.find(obj => obj.day === 'thursday')}/>
        </Grid>
        <Grid container direction='column' item xs={12} sm={2}
          spacing={2}>
          <ScheduleColumn dayData={schedule.find(obj => obj.day === 'friday')}/>
        </Grid>
        <Grid container direction='column' item xs={12} sm={2}
          spacing={2}>
          <ScheduleColumn dayData={schedule.find(obj => obj.day === 'saturday')}/>
        </Grid>
      </Grid>
    </GridWrapper>
  );
};

export default Schedule;
