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
  interval = seconds / monthInSecond;
  if (interval > 1) {
    return Math.floor(interval) + " mois";
  }
  interval = seconds / dayInSecond;
  if (interval > 1) {
    return Math.floor(interval) + " jours";
  }
  interval = seconds / hourInSecond;
  if (interval > 1) {
    return "il y a " + Math.floor(interval) + " heures";
  }
  interval = seconds / minuteInSecond;
  if (interval > 1) {
    return "il y a " + Math.floor(interval) + " minutes";
  }
  return "il y a quelques secondes";
}
