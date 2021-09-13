import React from 'react';
import WeatherIcon from '../weatherIcon/WeatherIcon';
import { Grid, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  dayText:{
    fontSize: '64px',
    fontWeight: '200',
  },
  colorText: {
    color:'#666666',
  },
  iconStyle:{
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center'
  }
}));

export default function TodayDisplayer({ icon, main, temp, city }) {
  const { dayText, iconStyle, colorText } = useStyles();
  let { day, max, min } = temp;
  day = Math.trunc(day);
  max = Math.trunc(max);
  min = Math.trunc(min);
  return (
    <Grid container justifyContent="space-evenly" alignContent="center" alignItems="center">
      <Grid item xs={6} sm={4} className={iconStyle} >
        <WeatherIcon icon={icon} />
        <p>{main}</p>
      </Grid>

      <Grid item xs={6} sm={4}>        
        <Typography variant="h1" className={dayText}>
          {day}
          <sup>°C</sup>
        </Typography>        
      </Grid>

      <Grid item xs={6} sm={4} className={colorText}>
        <p>{max}°C</p>
        <p>{min}°C</p>
      </Grid>
    </Grid>
  );
}
