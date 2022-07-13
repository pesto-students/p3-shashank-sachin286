const { product } = require('./calculator');
const mathOperations = require('./calculator');
describe("Calculator tests", () => {
    test('adding 1 + 2 should return 3', () => {
      expect(mathOperations.sum(1, 2)).toBe(3);
    });

    test('subtracting 5 - 2 should return 3', () => {
      expect(mathOperations.diff(5,2)).toBe(3);
    });

    test('multiplying 2 * 3 should erturn 6', () => {
      expect(mathOperations.product(2,3)).toBe(6);
    });
   })
