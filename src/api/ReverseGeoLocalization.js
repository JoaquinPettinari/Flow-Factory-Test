import Axios from 'axios';

export default function getCityName(lat, long) {
  return Axios.get(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${long}&localityLanguage=en`
  );
}
