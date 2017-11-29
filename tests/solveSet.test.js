var solveSquare = require('../assets/js/solveSquare.js')

test('needs full grid', () => {
    var array = [1,2,3,4,5,6,7,8]
    expect(() => {solveSquare(array)}).toThrow();;
});

test('array fully unique (happy path 1)', () => {
    var array = [1,2,3,4,5,6,7,8,9]
    expect(solveSquare(array)).toBeTruthy();
});

test('array fully unique (mixed up) (happy path 2)', () => {
    var array = [9,8,7,6,5,4,3,2,1]
    expect(solveSquare(array)).toBeTruthy();
});