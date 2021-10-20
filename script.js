
const itemParent = document.getElementById('main');

// filter out the text elements so only the div elements remain
// put the remaining elements in the itemElements array and shuffle it
var itemElements = [];
itemParent.childNodes.forEach(node => {
    if (node.nodeType === Node.ELEMENT_NODE) itemElements.push(node);
    itemElements = shuffle(itemElements);
})

console.log(itemElements)

// read imported file and put it into a array of text which is split on the linebreak
let textFile;
document.getElementById('myFile').addEventListener('change', function() {
    var fr = new FileReader();
    fr.onload = () => {
        textFile = fr.result.split("\r\n")

        // if the user has imported less than 25 options
        //   fill in the empty space with empty space (haha funny joke)
        if (textFile.length < 25) {
            for (let i = textFile.length; i < 25; i++) {
                textFile.push('');
            }
        }

        randomizeItems();
        setTextOnScreen();
    }
        
    fr.readAsText(this.files[0]);
})


document.getElementById('shuffle').addEventListener('click', shuffleItems);
document.getElementById('randomize').addEventListener('click', randomizeItems);

document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('click', function() {
        this.classList.toggle('active');
    })
})


function setTextOnScreen() {
    for (let index = 0; index < 25; index++) {
        itemElements[index].innerHTML = textFile[index];
    }
}


function shuffleItems() {
    itemElements = shuffle(itemElements);
    setTextOnScreen();
}


function randomizeItems() {
    if (textFile.length === 25) return
    textFile = shuffle(textFile);
    setTextOnScreen();
}


function shuffle(array) {
    let currentIndex = array.length, randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = 
        [array[randomIndex], array[currentIndex]];
    }
  
    return array;
}
