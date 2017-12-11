var clearColors = require('./clearColors.js')

function addClass (coords) {
    clearColors().then(res => {
        const types = ['col', 'row', 'square']
        const type = types[coords[0]]
        const location = coords[1]
        const firstNumber = coords[2]
        const secondNumber = coords[3]
        if(type != [types[2]]){
            if (type == 'col') {
                var newStuff = document.getElementsByClassName(`${type}${location+1} row${firstNumber+1}`)
                newStuff[0].classList.add('color')
                var secondStuff = document.getElementsByClassName(`${type}${location+1} row${secondNumber+1}`)
                secondStuff[0].classList.add('color')
            }
            else {
                var newStuff = document.getElementsByClassName(`${type}${location+1} col${firstNumber+1}`)
                newStuff[0].classList.add('color')
                var secondStuff = document.getElementsByClassName(`${type}${location+1} col${secondNumber+1}`)
                secondStuff[0].classList.add('color')
            }
            
        }
        else {
            // console.log(coords)
            var newStuff = document.getElementsByClassName(`square${location+1}`)
            var cellNum = newStuff[0].getElementsByClassName(`cell${firstNumber+1}`)
            cellNum[0].classList.add('color')
    
            var newStuff = document.getElementsByClassName(`square${location+1}`)
            var cellNum = newStuff[0].getElementsByClassName(`cell${secondNumber+1}`)
            cellNum[0].classList.add('color')
        }
        return
    })
}

module.exports = addClass;