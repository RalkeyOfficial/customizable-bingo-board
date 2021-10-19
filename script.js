const itemParent = document.getElementById('main');


// filter out the text elements so only the div elements remain
// put the remaining elements in the items array
const items = [];
itemParent.childNodes.forEach(node => {
    if (node.nodeType === Node.ELEMENT_NODE) items.push(node);
})

console.log(items)

// read imported file and put it into a array of text which is split on the linebreak
let textFile;
document.getElementById('myFile').addEventListener('change', function() {
    var fr=new FileReader();
    fr.onload = () => {
        textFile = fr.result.split("\r\n")

        // if the user has imported less than 25 options
        //   fill in the empty space with empty space (haha funny joke)
        if (textFile.length < 25) {
            for (let i = textFile.length; i < 25; i++) {
                textFile.push('');
            }
        }

        setTextOnScreen()
    }
        
    fr.readAsText(this.files[0]);
})

function setTextOnScreen() {
    textFile.forEach((text, index) => {
        var tmpElement = document.getElementById(`${index + 1}`);
        tmpElement.innerHTML = text;
    })
}
