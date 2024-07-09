const yearInSecond: number = 31536000;
const monthInSecond: number = 2592000;
const dayInSecond: number = 86400;
const hourInSecond: number = 3600;
const minuteInSecond: number = 60;

export default function timeAgo(date: Date): string {
  date = new Date(date);
  const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);

  let interval = Math.floor(seconds / yearInSecond);
  if (interval > 1) {
    return interval + " ans";
  }
  interval = Math.floor(seconds / monthInSecond);
  if (interval > 1) {
    return interval + " mois";
  }
  interval = Math.floor(seconds / dayInSecond);
  if (interval > 1) {
    return interval + " jours";
  }
  interval = Math.floor(seconds / hourInSecond);
  if (interval > 1) {
    return "il y a " + interval + " heures";
  }
  interval = Math.floor(seconds / minuteInSecond);
  if (interval > 1) {
    return "il y a " + interval + " minutes";
  }
  return "il y a quelques secondes";
}
