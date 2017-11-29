var getCurrBoard = require('../assets/js/getCurrBoard.js')

test('gets board from DOM', () => {
    // Set up our document body
    document.body.innerHTML =
   `<div class="container" id="board">
        <div class="box box1">
            <div class="cell cell1">1</div>
            <div class="cell cell2">2</div>
            <div class="cell cell3">3</div>
            <div class="cell cell4">4</div>
            <input type="text" class="numberInput cell"> 
            <div class="cell cell6">6</div>
            <div class="cell cell7">7</div>
            <div class="cell cell8">8</div>
            <div class="cell cell9">9</div>
        </div>
    </div>`
    expect(getCurrBoard()).toBeDefined()
  });