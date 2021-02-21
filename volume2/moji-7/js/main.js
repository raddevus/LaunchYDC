
function attachEmojiClickListeners(){
    console.log("in attachEmojiClickListeners...");
    // First get the collection of Nodes that we want to work with
    // and store the collection in a variable for later use
    let allNodes = document.querySelectorAll(".emoji span");

    // Next, use a for loop to iterate over each Node in the collection
    // The NodeList provides a property named length to determine
    // how many nodes are in the list and we use that now.
    for (let i = 0; i < allNodes.length; i++){
        allNodes[i].addEventListener("click", function() {
            alert(allNodes[i].innerHTML);
        }); // end of addEventListener function
    } // end of For loop
} // end of function
