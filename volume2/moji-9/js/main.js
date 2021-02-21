addEventListener("load",attachEmojiClickListeners);

function attachEmojiClickListeners(){
    console.log("in attachEmojiClickListeners...");
    // First get the collection of Nodes that we want to work with
    // and store the collection in a variable for later use
    let allNodes = document.querySelectorAll(".emoji span");

    // Next, use a forEach() to iterate over each Node in the collection
    allNodes.forEach( function (node){
        node.addEventListener("click", function() {
            alert(node.innerHTML);
        }) // end of addEventListener function
    }); // end of forEachFunction
} // end of function
