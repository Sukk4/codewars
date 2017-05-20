// https://www.codewars.com/kata/hard-time-bomb/javascript

var wireCode; // Find the wire.
console.log(Object.keys(this));
for (var i=0; i<10; i++){
  if (Object.keys(this).includes("boom"+i)){
    console.log(this["boom"+i]);
    wireCode = this["boom"+i];
  }
}
Bomb.CutTheWire(wireCode);