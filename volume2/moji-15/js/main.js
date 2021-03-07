addEventListener("load",attachEmojiClickListeners);
let allSelectedElements = [];

// this selector makes it so currently selected emojis are not unselected.
document.querySelector("html").addEventListener("click", ()=>displaySelectedElements());

function attachEmojiClickListeners(){
    console.log("in attachEmojiClickListeners...");
    // First get the collection of Nodes that we want to work with
    // and store the collection in a variable for later use
    let allNodes = document.querySelectorAll(".emoji span");

    // Next, use a for/of to iterate over each Node in the collection
    for (let node of allNodes){
        node.addEventListener("click", function() {
            handleEmojiClick(node);
        }) // end of addEventListener function
    } // end of for/of
} // end of function

function handleEmojiClick(el) {
    if (isSelected(el)){
        removeElement(el);
    }
    else{
        allSelectedElements.push(el);
    }
    displaySelectedElements();
}
  
  function removeElement(el){
    let  foundItemIdx = -1;
    for (let i = 0;i < allSelectedElements.length;i++){
        if (allSelectedElements[i] === el){
            foundItemIdx = i;
            break;
        }
    }
    allSelectedElements.splice(foundItemIdx,1);
  }

  function isSelected(el){
    let retVal = false;
    allSelectedElements.forEach(a => {
        if (a === el){
            retVal = true;
        }
    });
    return retVal;
  }
  
  function displaySelectedElements() {
    allSelectedElements.forEach(el => {
        var range = document.createRange();
        range.selectNodeContents(el);
        var sel = window.getSelection();
        sel.addRange(range);
    });
  }

  function unselectAll(){
    allSelectedElements = [];
    window.getSelection().removeAllRanges();
  }