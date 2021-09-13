import { useEffect, useReducer, useState } from 'react';
import { getWeatherInfo, getWeatherInfoByCity } from './api/OpenWeather';
import MainDisplayer from './components/main-displayer/MainDisplayer';
import getCityName from './api/ReverseGeoLocalization';
import WeeklyTemperaturesDisplayer from './components/weekly-temperatures-displayer/WeeklyTemperatures';
import BackgroundImage from './images/weather.png'
import { CircularProgress, Grid, makeStyles } from '@material-ui/core';
import ModalError from './components/modal-error/ModalError'

const useStyles = makeStyles(() => ({    
  root:{
    textAlign:'center'
  },
  rootLoader:{
    height:'100vh',
    textAlign:'center'
  },
  img:{
    backgroundImage: `url(${BackgroundImage})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: '300px',
    marginBottom:'10px'
  },  
}));

const FETCH_SUCCESS = 'FETCH_SUCCESS';
const FETCH_ERROR = 'FETCH_ERROR';

const initialState = {
  loading: true,  
  error: '',
  info: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return {
        loading: false,        
        info: action.payload,
        error: '',
      };
    case FETCH_ERROR:
      return {
        loading: false,        
        info: {},
        error: 'Something went wrong!',
      };  
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [city, setCity] = useState(null);
  const [loadingForCity, setLoadingForCity] = useState(false);
  const { img, root, rootLoader, loading } = useStyles()
  const [ openModa, setOpenModal ] = useState(false)

  useEffect(() => {    
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        getWeatherInfo(position.coords.latitude, position.coords.longitude)
        .then((response) => {            
          dispatch({ type: FETCH_SUCCESS, payload: response.data });
          getCityName(response.data.lat, response.data.lon)
          .then((response) => {
            setCity(response.data.locality) })
          .catch((error) => console.log(error));
        })          
        .catch((response) =>
          dispatch({ type: FETCH_ERROR, payload: response.data })
        );
      },
      (error) => {
        console.log(error.message);
      }
     );
  }, []);

  const changeCity = (newCity) => {
    setCity(newCity)
    setLoadingForCity(true)
    getWeatherInfoByCity(newCity)
    .then((response) => {
      getWeatherInfo(response.data.coord.lat, response.data.coord.lon)
        .then((response) => {          
          dispatch({ type: FETCH_SUCCESS, payload: response.data });
          setLoadingForCity(false)
        })
        .catch((response) => {
          setOpenModal(true)
          dispatch({ type: FETCH_ERROR, payload: response.data })
        });
    })
    .catch((error) => {
      setOpenModal(true)
      setLoadingForCity(false)
    })
  }

  if (state.loading && !city) {
    return (
      <Grid container className={rootLoader} alignContent="center">
        <Grid item xs={12}>
          <CircularProgress />
        </Grid>
      </Grid>
    )
  }
  return (
    <Grid container direction="column" justifyContent="center" className={root}>
      <header className={img} />
      {loadingForCity
      ? <Grid item xs={12}>
          <CircularProgress className={loading} />
        </Grid>
      : <>
        <MainDisplayer current={state.info.daily[0]} city={city} changeCity={changeCity} />
        <WeeklyTemperaturesDisplayer daily={state.info.daily} />
      </>
      }
      <ModalError 
        open={openModa}
        handleClose={() => setOpenModal(false)}
      />
    </Grid>
  );
};

export default App;
