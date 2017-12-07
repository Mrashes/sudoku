function createInput (nodeLocation) {
    nodeLocation.textContent = ""
    var newNode = document.createElement("input");
    newNode.className = "numberInput"
    newNode.setAttribute('min',1)
    newNode.setAttribute('max',9)
    newNode.type = "number"
    
    //TODO remove this later
    // newNode.value = "1"

    nodeLocation.appendChild(newNode)
    return
}

module.exports = createInput;