
export const DateStamp = (timestamp) => {
  timestamp = new Date(timestamp);
  let hours = timestamp.getHours();
  if(hours === 0){
    hours+=12
  } else if (hours>12){
    hours-=12
  }
  return {
    dateString:timestamp.toDateString(),
    hours,
    minutes:(`0${timestamp.getMinutes()}`).slice(-2),
    meridiem: this.hours<12?'AM':'PM',
  }
}
