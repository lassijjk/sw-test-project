import clamp from './clamp'

// Clamp should be tested so that invalid values are not used

describe('clamp', () => {
    it('Testing the upper bound with input values of (10, -5, 5), return value should be 5', () => {
        expect(clamp(10, -5, 5)).toStrictEqual(5);
    })
    it('Testing the lower bound with input values of (-10, -5, 5), return value should be -5', () => {
        expect(clamp(-10, -5, 5)).toStrictEqual((-5));
    })
    it('Testing the value within bounds with input values of (12, 1, 52), return value should be 12', () => {
        expect(clamp(12, 1, 52)).toStrictEqual((12));
    })
})