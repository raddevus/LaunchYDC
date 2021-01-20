const MAX_LOOPS=1000;
const MAX_VALUE =50;
const MIN_VALUE = 1;
const ZERO = 0;
var zeroCount=0;
var minValCount=0;
var maxValCount=0;

for (var x=1;x<=MAX_LOOPS;x++)
{
    var rnd = Math.random();
    var z=rnd*MAX_VALUE; 
    var zCeil=Math.ceil(z);
    if (zCeil == ZERO){
        zeroCount++;
    }
    if (zCeil == MIN_VALUE){
        console.log(rnd + " : " + zCeil);minValCount++; 
    }
    if (zCeil == MAX_VALUE){
        maxValCount++;
    }
}
if (zeroCount > 0){
    console.log("ALERT!  There were " + zeroCount + " zeros found.")
}
console.log("Got min value " + minValCount + " out of " + MAX_LOOPS + " tries.");
console.log("Got max value " + maxValCount + " out of " + MAX_LOOPS + " tries.");