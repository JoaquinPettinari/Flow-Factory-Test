import ExtraInfo from '../extra-info/ExtraInfo';
import { getHours } from '../../utils/Time';
import humidityIcon from '../../images/icons/027-humidity.png'
import barometerIcon from '../../images/icons/050-barometer.png'
import windIcon from '../../images/icons/001-wind-1.png'
import sunriseIcon from '../../images/icons/008-sunrise.png'
import sunsetIcon from '../../images/icons/007-sunset.png'
import daytimeIcon from '../../images/icons/daytime.png'
import { Grid } from '@material-ui/core';

export default function ExtraInfoDisplayer({ current }) {
  const { dt, sunrise, sunset, humidity, pressure, wind_speed } = current;

  return (
    <Grid container spacing={3} justifyContent="center" alignItems="center" alignContent="center">
      <Grid item xs={4}>
        <ExtraInfo
          className="humidity"
          icon={humidityIcon}
          info={humidity}
          description="humidity"
        />
      </Grid>
      <Grid item xs={4}>
        <ExtraInfo
          icon={barometerIcon}
          info={pressure}
          description="pressure"
        />
      </Grid>
      <Grid item xs={4}>
        <ExtraInfo
          icon={windIcon}
          info={wind_speed}
          description="wind"
        />
      </Grid>
      <Grid item xs={4}>
        <ExtraInfo
          icon={sunriseIcon}
          info={getHours(sunrise) + ' am'}
          description="sunrise"
        />
      </Grid>
      <Grid item xs={4}>
        <ExtraInfo
          icon={sunsetIcon}
          info={getHours(sunset) + ' pm'}
          description="sunset"
        />
      </Grid>
      <Grid item xs={4}>
        <ExtraInfo
          icon={daytimeIcon}
          info={getHours(dt)}
          description="day time"
        />
      </Grid>
    </Grid>    
  );
}
