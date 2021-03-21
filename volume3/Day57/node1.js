var counter = 1;
var MaxLoops = Number.MAX_VALUE;
// note MaxLoops = 1.7976931348623157e+308

function runForZero(){
    console.log("running...");
    for (var x=1;x<=MaxLoops;x++)
    {
        var rnd = Math.random();
        if (rnd === 0)
        {
            // if the random value generated ever equals 0, then give message and exit.
            console.log("rnd is " + rnd + " It took " + counter + " tries.");
            return;
        }
        else{
            console.log(rnd + "\t");
        }
        if (counter % 5000000 == 0){
            // For every 5 Million random numbers generated, output so I can tell it's running
            console.log(new Date().toTimeString() + " - Still running : " + counter);
        }
        counter++;
    }
    console.log("Complete.");
    // 04-18-2020 - generated 551,855,000,000 random numbers without generating a zero
}