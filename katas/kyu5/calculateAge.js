// https://www.codewars.com/kata/calculate-age-in-years

/**
 * Return the difference between a birthdate and an optional "now" date, in years
 * 
 * @param {Date} birthDate
 * @param {Date} nowDate
 * @return  {Number}
 */
function getAge(birthDate, nowDate) {
  var age = 0;
  var currentDate;
  if (nowDate === undefined){
    currentDate = new Date();
  } else {
    currentDate = nowDate;
  }
  if (currentDate.getYear() > birthDate.getYear()){
    age += currentDate.getYear() - birthDate.getYear() - 1;
    if (currentDate.getMonth() > birthDate.getMonth() || (currentDate.getMonth() >= birthDate.getMonth() && currentDate.getDate() >= birthDate.getDate())){
      age+=1;
    }
  } 
  else if (currentDate.getYear() < birthDate.getYear()){
    age += currentDate.getYear() - birthDate.getYear() + 1;
    if (currentDate.getMonth() < birthDate.getMonth() || (currentDate.getMonth() <= birthDate.getMonth() && currentDate.getDate() <= birthDate.getDate())){
      age-=1;
    }
  }
  return age;
  
}