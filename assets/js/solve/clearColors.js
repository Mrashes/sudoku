function clearColor () {
    return new Promise (
        function(resolve, reject) {
            const color = document.getElementsByClassName("color")
            for(var i=0; i<color.length; i++){
                color[i].classList.remove('color')
            }
            resolve(true)
        }
    )
}

module.exports = clearColor;