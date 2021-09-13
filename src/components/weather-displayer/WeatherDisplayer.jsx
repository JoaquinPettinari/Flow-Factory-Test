import MainDisplayer from '../main-displayer/MainDisplayer';

export default function WeatherDisplayer({ weatherInfo }) {
  const current = weatherInfo.current;

  return (
    <div>
      <MainDisplayer current={current} />
    </div>
  );
}
