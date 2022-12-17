import filter from './filter.js';

const arr = [
    {'id': 1, 'a': 'x', 'b': '', 'c': true},
    {'id': 2, 'a': 'x', 'b': 1.2, 'c': true},
    {'id': 3, 'a': 'y', 'b': 3.6, 'c': false},
]

describe("Filter function tests", () => {

    it("Should not fail with empty array as input", () => {
        expect(filter([], () => null)).toStrictEqual([]);
    });

    it("Should not fail with null value as input", () => {
        expect(filter(null, () => null)).toStrictEqual([]);
    });

    it("Should not fail when no matches found", () => {
        expect(filter(arr, ({ a }) => a === 'ijk')).toStrictEqual([]);
    });

    it("Should return input array when no predicate", () => {
        expect(filter(arr, () => null)).toStrictEqual(arr);
    });

    it("Filtering with correct inputs, should return correct outputs", () => {
        expect(filter(arr, ({ c }) => c)).toStrictEqual([ {'id': 1, 'a': 'x', 'b': '', 'c': true}, {'id': 2, 'a': 'x', 'b': 1.2, 'c': true}]);
        expect(filter(arr, ({ a, b }) => a === 'x' && b > 1.0)).toStrictEqual([{'id': 2, 'a': 'x', 'b': 1.2, 'c': true}]);
        expect(filter(['a', 'b', 'c', '#a'], (item) => item.includes('a'))).toStrictEqual(['a', '#a']);
    });

});
