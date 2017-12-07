function createInput (nodeLocation) {
    nodeLocation.textContent = ""
    var newNode = document.createElement("input");
    newNode.className = "numberInput cell"
    newNode.type = "text"
    nodeLocation.appendChild(newNode)
    return
}

module.exports = createInput;