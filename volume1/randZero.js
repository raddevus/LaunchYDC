var counter = 1;
var lessThanCounter = 0;
function runForZero(){
    console.log("running...");
    for (var x=1;x<=MaxLoops;x++)
    {
        var rnd = Math.random();
        if (rnd === 0)
        {
            console.log("rnd is " + rnd + " It took " + counter + " tries.");
            return;
        }
        if (rnd <= 0.000001){
            lessThanCounter++;
            console.log("rnd is " + rnd + " in " + counter + " tries - lessThanCounter: " + lessThanCounter);
        }
        if (counter % 5000000 == 0){
            console.log(new Date().toTimeString() + " - Still running : " + counter);
        }
        counter++;
    }
    console.log("Complete.");
    // 04-18-2020 - generated 551,855,000,000 random numbers without generating a zero
}