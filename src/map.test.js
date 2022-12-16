import map from './map'

describe('map', function() {
    it('Should not fail with empty array ', () => {
        expect(map([], () => null)).toStrictEqual([]);
    });
    it('Should not fail with null value ', () => {
        expect(map(null, () => null)).toStrictEqual([]);
    });
    it('Should return correct results with correct input', () => {
        expect(map([true, false, true, false], (val) => !val)).toStrictEqual([false, true, false, true]);
        expect(map([14, 23, 6], (val) => 2*val)).toStrictEqual([28, 46, 12]);
    });

    it('Should pass correct values to map function', () => {
        const mapFunction = jest.fn((n, index, array) => n*index);
        expect(map([3, 12], mapFunction)).toStrictEqual([0, 12]);
        expect(mapFunction).toHaveBeenNthCalledWith(1, 3, 0, [3, 12]);
        expect(mapFunction).toHaveBeenNthCalledWith(2, 12, 1, [3, 12]);
    });
});