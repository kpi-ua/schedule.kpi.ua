import React, { useState } from 'react'
import { withStyles } from '@material-ui/core/styles'
import FormGroup from '@material-ui/core/FormGroup'
import Switch from '@material-ui/core/Switch'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

export const CustomizedSwitch = withStyles((theme) => ({
  root: {
    width: 100,
    height: 32,
    padding: 0,
    margin: theme.spacing(1),
  },
  switchBase: {
    padding: 1,
    '&$checked': {
      transform: 'translateX(68px)',
      color: theme.palette.common.white,
      '& + $track': {
        backgroundColor: theme.palette.grey[200],
        opacity: 1,
        border: 'none',
      },
    },
  },
  thumb: {
    width: 30,
    height: 30,
  },
  track: {
    borderRadius: 30 / 2,
    backgroundColor: theme.palette.grey[200],
    opacity: 1,
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  )
})

export const WeekSwitch = ({ week, setWeek }) => {
  const checked = week === 'second'
  return (
    <FormGroup>
      <Typography component="div">
        <Grid component="label" container alignItems="center" spacing={1}>
          <Grid item>Перший тиждень</Grid>
          <Grid item>
            <CustomizedSwitch checked={checked} onChange={setWeek} />
          </Grid>
          <Grid item>Другий тиждень</Grid>
        </Grid>
      </Typography>
    </FormGroup>
  )
}

export default WeekSwitch
