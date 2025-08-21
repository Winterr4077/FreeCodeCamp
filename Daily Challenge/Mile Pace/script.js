function milePace(miles, duration) {
  let parts = duration.split(":");
  let mins = parseInt(parts[0]);  
  let secs = parseInt(parts[1]);
  
  let totalDuration = mins * 60 + secs;
  let avgSeconds = totalDuration / miles;

  let minutes = Math.floor(avgSeconds / 60)
  let seconds = Math.floor(avgSeconds % 60)

  if (minutes < 10 ){
    minutes = "0" + minutes;
  } 
  if (seconds < 10){
    seconds = "0" + seconds;
  }

  miles = minutes + ":" + seconds;
  return miles;
}
