// https://www.codewars.com/kata/53988ee02c2414dbad000baa

function toPretty(seconds){
  var minute = 60,
      hour = 3600,
      day = 86400,
      week = 604800;
  if (seconds === 0) return "just now";
  else if (Math.floor(seconds) === 1) return "a second ago";
  else if (seconds < minute) return Math.floor(seconds) + " seconds ago";
  else if (Math.floor(seconds/minute) === 1) return "a minute ago";
  else if (seconds < hour) return Math.floor(seconds/minute) + " minutes ago";
  else if (Math.floor(seconds/hour) === 1) return "an hour ago";
  else if (seconds < day) return Math.floor(seconds/hour) + " hours ago";
  else if (Math.floor(seconds/day) === 1) return "a day ago";
  else if (seconds < week) return Math.floor(seconds/day) + " days ago";
  else if (Math.floor(seconds/week) === 1) return "a week ago";
  else if (seconds > week) return Math.floor(seconds/week) + " weeks ago";
}