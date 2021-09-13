import { useState } from 'react';
import { getDate } from '../../utils/Time';
import { Button, Grid, makeStyles, Typography } from '@material-ui/core';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles(() => ({
  dateText:{
    textAlign:'center'
  },
  textFieldDiv:{
    display:'flex',
    justifyContent:'center'
  },
  buttonStyle:{
    marginLeft:'20px'
  }
}));

const REQUIRED_ERROR = "This field is required"

export default function DateDisplayer({ city, changeCity }) {
  const { dateText, textFieldDiv, buttonStyle } = useStyles();
  const [ cityToLook, setCityToLook ] = useState(city)

  const onChange = (e) => {
    setCityToLook(e.target.value)
  }  

  return (
    <Grid container alignItems="center" justifyContent="center">
        <Grid item xs={12} sm={4}>          
          <Typography className={dateText} >
            {getDate()}
          </Typography>
        </Grid>        
        <Grid item xs={12} sm={4} >
          <ValidatorForm onSubmit={() => changeCity(cityToLook)}>
            <Grid item xs={12} className={textFieldDiv}>
              <TextValidator
                fullWidth
                value={cityToLook || city}
                validators={['required']}
                errorMessages={[ REQUIRED_ERROR ]}
                onChange={onChange}                
              />
              <Button
                type="submit"
                variant="outlined"
                startIcon={<LocationOnIcon />}
                color="primary"
                className={buttonStyle}
              >
                Search
              </Button>
            </Grid>
          </ValidatorForm>
        </Grid>          
      </Grid>
  );
}
