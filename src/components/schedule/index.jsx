import React from 'react';
import { ScheduleItem } from '../scheduleItem';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'rgba(255, 255, 255, 0.5)',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.05)',
    borderRadius: '40px',
    padding: '48px 24px',
    margin: '36px 48px 0'
  },
  paper: {
    padding: '20px 16px',
    color: theme.palette.text.secondary,
    background: 'rgba(255, 255, 255, 0.9)',
    borderRadius: '16px',
  },
  columnItem: {
    padding: '0.6rem 0rem 0.6rem',
  }
}));

export const Schedule = () => {
  const classes = useStyles();

  const FormColumn = () => (
    <div>
      <Grid item className={classes.columnItem}>
        <Paper className={classes.paper}>
          <ScheduleItem />
        </Paper>
      </Grid>
      <Grid item className={classes.columnItem}>
        <Paper className={classes.paper}>
          <ScheduleItem />
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
    </div>
  );
};

export default Schedule;
