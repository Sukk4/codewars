// https://www.codewars.com/kata/52685f7382004e774f0001f7

function humanReadable(seconds) {
  var h = Math.floor(seconds / 3600).toString(),
      m = Math.floor((seconds % 3600) / 60).toString(),
      s = Math.floor(seconds % 60).toString();
      
  if (h.length === 1) h = "0" + h;
  if (m.length === 1) m = "0" + m;  
  if (s.length === 1) s = "0" + s;
  
  return h+":"+m+":"+s;
}