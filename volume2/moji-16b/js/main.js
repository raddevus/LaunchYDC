addEventListener("load",attachEmojiClickListeners);
const RECENTLY_USED_MAX = 50;
let allSelectedElements = [];
let recentlyUsedEmojis = [];

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
        addEmojiToRecentList(el.innerHTML);
    }
    displaySelectedElements(el.innerHTML);
}

function displayRecentEmojis(emoji){
  const newSpan = document.createElement("span");
  newSpan.innerHTML = emoji;
  // the call to prepend() allows me to use normal forward iteration
  // thru the array but shows the most recently added emoji 
  // (highest index) first.
  document.querySelector("#recent-tab").prepend(newSpan);
  newSpan.addEventListener("click", handleEmojiClick);
}

 function addEmojiToRecentList(emoji){
    // 1. determine if the emoji is a new one - if it isn't then 
    // return out of this method because there is nothing more
    // to do since the emoji has already been added to recent list
    if (isEmojiNew(emoji,recentlyUsedEmojis) == false){
      return;
    }
   // 2. do the work to display the recent emojis
   // this will require some work to add new spans to our DOM.
   // Yes, you can add new HTML elements to the DOM dynamically with JS
    displayRecentEmojis(emoji);
  
    // if the emoji isn't already in the list, then add it and save
    // it to localStorage.
   // 3. Push the emoji on the array we are using to track this list
    recentlyUsedEmojis.push(emoji);
    // 4. We need to only allow this list to get so large because we only want the last 
   // X number of recent emojis used so we use a number like 50.
    if (recentlyUsedEmojis.length > RECENTLY_USED_MAX){
      recentlyUsedEmojis.shift();
    }
    // 5. Finally, we use a method (JSON.stringify) to turn our array into a string
    // that we can store in localStorage.  You must stringify the array or you won't
   // be able to turn it back into an array later.
    localStorage.setItem("recentEmojis", JSON.stringify(recentlyUsedEmojis));
  }

  function isEmojiNew(emoji){
    for (let i = 0; i < recentlyUsedEmojis.length;i++){
      if (recentlyUsedEmojis[i] === emoji){
        // if the emoji is already in the list
        // then just return -- this is a quick exit 
        // from the function when the emoji is found
        // early in the list
        console.log("returning...")
        return false;
      }
    }
    // The code will only get to here 
    // if the emoji wasn't found in the list.
    // We return true that it is a new emoji.
    return true;
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