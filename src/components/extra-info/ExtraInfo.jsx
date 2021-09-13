import { Grid, Typography } from '@material-ui/core';

export default function ExtraInfo({ icon, info, description }) {

  return (    
    <Grid container direction="column" alignItems="center">
      <img src={icon} alt={description} />
      <Typography>{info}</Typography>
      <Typography>{description}</Typography>
    </Grid>    
  );
}
