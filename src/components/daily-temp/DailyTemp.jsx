import { getDay } from '../../utils/Time';
import WeatherIcon from '../weatherIcon/WeatherIcon';
import upIcon from '../../images/icons/up.png'
import downIcon from '../../images/icons/down.png'
import { Grid, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({    
  colorDate:{
    color:'#444444'
  },
  maxMin:{    
    color:'#999999',
    fontSize: '12px',
    fontWeight: '400',
  }
}));

export default function DailyTemp({ icon, plusDay, max, min }) {
  const { maxMin, colorDate } = useStyles()
  return (
    <Grid container direction="column" justifyContent="center" alignItems="center" >
      <WeatherIcon icon={icon} />
      <div className={colorDate}>{getDay(plusDay)}</div>
      <Grid item xs={6}>
        <Typography className={maxMin}>
          {max}°C
          <img src={upIcon} alt="up icon" />
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography className={maxMin}>
          {min}°C
          <img src={downIcon} alt="down icon" />
        </Typography>
      </Grid>
    </Grid>    
  );
}
