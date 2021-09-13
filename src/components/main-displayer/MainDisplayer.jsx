import TodayDisplayer from '../today-displayer/TodayDisplayer';
import ExtraInfoDisplayer from '../extra-info-displayer/ExtraInfoDisplayer';
import DateDisplayer from '../date-displayer/DateDisplayer';
import { Divider, Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({    
  dividerStyle:{
    margin:'20px 0'
  },
}));

export default function MainDisplayer({ current, city, changeCity }) {  
  const { dividerStyle } = useStyles()
  const { weather, temp } = current;
  const { icon, main } = weather[0];  

  return (
    <Grid container spacing={2} justifyContent="center">      
      <DateDisplayer city={city} changeCity={changeCity} />
      <TodayDisplayer icon={icon} main={main} temp={temp} />
      <Grid item xs={10}>
        <Divider className={dividerStyle} />
      </Grid>
      <ExtraInfoDisplayer current={current} />
      <Grid item xs={10}>
        <Divider className={dividerStyle} />
      </Grid>
    </Grid>
  );
}
