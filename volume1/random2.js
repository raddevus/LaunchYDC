"use strict";

const MAX_LOOPS=1000;
const MAX_VALUE =100;
const MIN_VALUE = 1;
const ZERO = 0;
var allValues=[];
var allCounts=[];
var outputData = "";
function initAllCounts(){
    for (var x = 0; x< MAX_VALUE;x++){
        allCounts.push(0);
    }
}
// var counter=0;allValues.forEach((item) => {if (item == 4){counter++;}} );console.log(counter);
function testRandom(){
    var zeroCount=0;
    allValues = [];
    for (var x=1;x<=MAX_LOOPS;x++)
    {
        var rnd = Math.random();
        var z=rnd*MAX_VALUE; 
        var zCeil=Math.ceil(z);
        switch (zCeil)
        {
            case ZERO :{
                zeroCount++;
                break;
            }
            case MIN_VALUE :{
                allCounts[zCeil-1] += 1;
                console.log(rnd + " : " + zCeil);
                break;
            }
            case MAX_VALUE :{
                allCounts[zCeil-1] += 1;
                break;
            }
            default:{
                allCounts[zCeil-1] += 1;
                allValues.push(zCeil);
            }

        }
    }
    if (zeroCount > 0){
        console.log("ALERT!  There were " + zeroCount + " zeros found.")
    }
    console.log("Got min value " + allCounts[0] + " out of " + MAX_LOOPS + " tries.");
    console.log("Got max value " + allCounts[allCounts.length-1] + " out of " + MAX_LOOPS + " tries.");
    console.log(allValues);
    displayAllValues();
}

function displayAllValues(){
    outputData = "";
    var outputElement = document.querySelector("#output");
    allValues.forEach(buildOutput);
    outputElement.innerHTML = outputData;
}

function buildOutput(item){
    outputData += item + ", ";
}