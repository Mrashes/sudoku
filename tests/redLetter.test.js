var redLetters = require('../assets/js/solve/redLetters.js')

test('empty returns true', () => {
    expect(redLetters([])).toBeTruthy()
});
test('finds right coordinate', () => {
    var coords = [0, 1, "5", "5"]
    expect(redLetters()).toBeTruthy()
});