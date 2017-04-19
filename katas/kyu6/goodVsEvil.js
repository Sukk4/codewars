// https://www.codewars.com/kata/52761ee4cffbc69732000738

function goodVsEvil(good, evil){
  var goodWorth = 0,
      evilWorth = 0,
      goodArr = [],
      evilArr = [];

  //GOOD
  goodArr = good.split(" ");
  for (var i=0; i<goodArr.length; i++){
    var x = parseInt(goodArr[i]);
    switch(i){
      case 0: // Hobbits
        goodWorth += x;
        break;
      case 1: // Men
        goodWorth += x*2;
        break;
      case 2: // Elves
      case 3: // Dwarves
        goodWorth += x*3;
        break;
      case 4: //Eagles
        goodWorth += x*4;
        break;
      case 5: // Wizards
        goodWorth += x*10;
        break;
    }
  }
  
  //EVIL
  evilArr = evil.split(" ");
  for (var i=0; i<evilArr.length; i++){
    var x = parseInt(evilArr[i]);
    switch(i){
      case 0: // Orcs
        evilWorth += x;
        break;
      case 1: // Men
      case 2: // Wargs
      case 3: // Goblins
        evilWorth += x*2;
        break;
      case 4: // Uruk Hai
        evilWorth += x*3;
        break;
      case 5: // Trolls
        evilWorth += x*5;
        break;
      case 6: // Wizards
        evilWorth += x*10;
        break;
    }
  }
  
  // RETURN RESULT
  if (goodWorth > evilWorth) return "Battle Result: Good triumphs over Evil";
  else if (goodWorth < evilWorth) return "Battle Result: Evil eradicates all trace of Good";
  else if (goodWorth === evilWorth) return "Battle Result: No victor on this battle field";
}