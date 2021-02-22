addEventListener("load",attachEmojiClickListeners);

function attachEmojiClickListeners(){
    console.log("in attachEmojiClickListeners...");
    // First get the collection of Nodes that we want to work with
    // and store the collection in a variable for later use
    let allNodes = document.querySelectorAll(".emoji span");

    // Next, use a for/of to iterate over each Node in the collection
    for (let node of allNodes){
        node.addEventListener("click", function() {
            alert(node.innerHTML);
        }) // end of addEventListener function
    } // end of for/of
} // end of function
