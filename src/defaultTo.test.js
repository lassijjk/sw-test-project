import defaultTo from './defaultTo'

describe('defaultTo', () => {
    it('Should return 1 with input of 1, 10', () => {
        expect(defaultTo(1, 10)).toStrictEqual(1);
    });

    it('Should return 10 with input of undefined, 10', () => {
        expect(defaultTo(undefined, 10)).toStrictEqual(10);
    });

    it('Should return 10 with input of NaN, 10', () => {
        expect(defaultTo(NaN, 10)).toStrictEqual(10);
    });

    it('Should return 10 with input of null, 10', () => {
        expect(defaultTo(null, 10)).toStrictEqual(10);
    });

    it('Should return undefined with no input', () => {
        expect(defaultTo()).toStrictEqual(undefined);
    });

    it('Should return number with only number', () => {
        expect(defaultTo(12)).toStrictEqual(12);
    });
});