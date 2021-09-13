import moment from 'moment-timezone';

const tz = 'America/Argentina/Buenos_Aires';

export function getHours(unixtime) {
  return moment.tz(unixtime, tz).format('h:mm');
}

export function getDate() {
  const date = moment.now();
  return moment.tz(date, tz).format('dddd, DD MMM YYYY,  h:mm a');
}

export function getDay(plusDays) {
  const date = moment.now();
  return moment.tz(date, tz).add(plusDays, 'day').format('dddd, DD ');
}
