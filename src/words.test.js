import words from "./words";

describe("Words function tests", () => {

    it("Should not fail with empty string input", () => {
        expect(words("")).toStrictEqual([]);
    });

    it("Should not fail with null input", () => {
        expect(words(null)).toStrictEqual([]);
    });
    
    it("Should return input string 'a b c' as ['a', 'b', 'c']", () => {
        expect(words("a b c")).toStrictEqual(["a", "b", "c"]);
    });

    it("Should return input string 'a & b & c' as ['a', 'b', 'c'] ", () => {
        expect(words("a & b & c")).toStrictEqual(['a', 'b', 'c']);
    });

    it("Should return inputs ('a b, #123 c & d', /[^, ]+/g) as ['a', 'b', '#123', 'c', '&', 'd']", () => {
        expect(words("a b, #123 c & d", /[^, ]+/g)).toStrictEqual(["a", "b", "#123", "c", "&", "d"]);
    });
})
