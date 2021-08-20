import React from 'react';
import style from './style.scss';
import { ScheduleItem } from '../scheduleItem';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: '2rem'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  columnItem: {
    padding: '0.6rem 0rem 0.6rem',

  }
}));

export const Schedule = ({scheduleData, isMobile, group, week}) => {
  const classes = useStyles();
  const schedule = week === 1 ? scheduleData.scheduleFirstWeek : scheduleData.scheduleSecondWeek;

  const FormColumn = () => (
    <div>
      <Grid item className={classes.columnItem}>
        <Paper className={classes.paper}>
          <ScheduleItem schedulItemData={schedule.find(obj => obj.day === 'monday')} />
        </Paper>
      </Grid>
      <Grid item className={classes.columnItem}>
        <Paper className={classes.paper}>
          <ScheduleItem schedulItemData={schedule.find(obj => obj.day === 'tuesday')} />
        </Paper>
      </Grid>
      <Grid item className={classes.columnItem}>
        <Paper className={classes.paper}>
          <ScheduleItem schedulItemData={schedule.find(obj => obj.day === 'wednesday')} />
        </Paper>
      </Grid>
      <Grid item className={classes.columnItem}>
        <Paper className={classes.paper}>
          <ScheduleItem schedulItemData={schedule.find(obj => obj.day === 'thursday')} />
        </Paper>
      </Grid>
      <Grid item className={classes.columnItem}>
        <Paper className={classes.paper}>
          <ScheduleItem schedulItemData={schedule.find(obj => obj.day === 'friday')} />
        </Paper>
      </Grid>
      <Grid item className={classes.columnItem}>
        <Paper className={classes.paper}>
          <ScheduleItem schedulItemData={schedule.find(obj => obj.day === 'saturday')} />
        </Paper>
      </Grid>
    </div>
  );


  return (
    <div className={classes.root}>
      <Grid container justifyContent='space-between' spacing={3}>
        <Grid container direction='column' item xs={12} sm={2} spacing={2}>
          <FormColumn />
        </Grid>
        <Grid container direction='column' item xs={12} sm={2} spacing={2}>
          <FormColumn />
        </Grid>
        <Grid container direction='column' item xs={12} sm={2} spacing={2}>
          <FormColumn />
        </Grid>
        <Grid container direction='column' item xs={12} sm={2} spacing={2}>
          <FormColumn />
        </Grid>
        <Grid container direction='column' item xs={12} sm={2} spacing={2}>
          <FormColumn />
        </Grid>
        <Grid container direction='column' item xs={12} sm={2} spacing={2}>
          <FormColumn />
        </Grid>
      </Grid>
      {JSON.stringify(scheduleData, null, 2)}
      {/* <ScheduleItem schedulItemData={scheduleData.monday[0]} /> */}
    </div>
  );
};

export default Schedule;
