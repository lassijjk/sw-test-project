import isEmpty from './isEmpty'

describe('isEmpty', () => {
    it('Should return true with input of null', () => {
        expect(isEmpty(null)).toStrictEqual(true);
    });

    it('Should return true with input of true', () => {
        expect(isEmpty(true)).toStrictEqual(true);
    });

    it('Should return true with input of 1', () => {
        expect(isEmpty(1)).toStrictEqual(true);
    });

    it('Should return false with input of [1, 2, 3]', () => {
        expect(isEmpty([1, 2, 3])).toStrictEqual(false);
    });

    it('Should return false with input of abc', () => {
        expect(isEmpty('abc')).toStrictEqual(false);
    });

    it('Should return false with input of { a : 1 }', () => {
        expect(isEmpty({ 'a' : 1 })).toStrictEqual(false);
    });
});