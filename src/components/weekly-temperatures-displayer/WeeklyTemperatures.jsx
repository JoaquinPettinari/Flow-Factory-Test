import { Grid } from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';
import DailyTemp from '../daily-temp/DailyTemp';

export default function WeeklyTemperaturesDisplayer({ daily }) {
  const days = daily.slice(1, 6);
  let plusDays = [1, 2, 3, 4, 5];
  return (
    <Grid container justifyContent="center">
      {days.map((day) => {
        return (
          <Grid item xs={4} sm={2}>
            <DailyTemp              
              key={uuidv4()}
              icon={day.weather[0].icon}
              plusDay={plusDays.shift()}
              max={day.temp.max}
              min={day.temp.min}
            />
          </Grid>
        );
      })}
    </Grid>
  );
}