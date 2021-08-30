import React from 'react';
import Grid from '@material-ui/core/Grid';
import { GridWrapper } from './schedule.style';


export const Schedule = () => {
  return (
    <GridWrapper>
      <Grid container justifyContent='space-between' spacing={3}>
        <Grid container direction='column' item xs={12} sm={2}
          spacing={2}>
          <FormColumn/>
        </Grid>
        <Grid container direction='column' item xs={12} sm={2}
          spacing={2}>
          <FormColumn/>
        </Grid>
        <Grid container direction='column' item xs={12} sm={2}
          spacing={2}>
          <FormColumn/>
        </Grid>
        <Grid container direction='column' item xs={12} sm={2}
          spacing={2}>
          <FormColumn/>
        </Grid>
        <Grid container direction='column' item xs={12} sm={2}
          spacing={2}>
          <FormColumn/>
        </Grid>
        <Grid container direction='column' item xs={12} sm={2}
          spacing={2}>
          <FormColumn/>
        </Grid>
      </Grid>
    </GridWrapper>
  );
};

export default Schedule;
