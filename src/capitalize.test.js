import capitalize from './capitalize.js';

describe("Capitalize function tests", () => {

    it("Should capitalize all lowercase string", () => {
        expect(capitalize("lowercase string")).toStrictEqual("Lowercase string");
    });

    it("Should lowercase other than first character of uppercase string", () => {
        expect(capitalize("UPPERCASE STRING")).toStrictEqual("Uppercase string");
    });
    
    it("Should return already capitalized string as it is", () => {
        expect(capitalize("Capitalized string")).toStrictEqual("Capitalized string");
    });

    it("Should capitalize alternating caps string", () => {
        expect(capitalize("aLtErNaTiNg CaPs")).toStrictEqual("Alternating caps");
    });

    it("Should return empty string as it is", () => {
        expect(capitalize("")).toStrictEqual("");
    });

    it("Should return number input 1 as '1'", () => {
        expect(capitalize(1)).toStrictEqual("1");
    });

    it("Should return boolean input true as 'True'", () => {
        expect(capitalize(true)).toStrictEqual("True");
    });

    it("Should return input array [1,2,3,4] as '1,2,3,4'", () => {
        expect(capitalize([1,2,3,4])).toStrictEqual("1,2,3,4");
    });

    it("Should return input array ['a', 'b', 'c'] as 'A,b,c'", () => {
        expect(capitalize(["a", "b", "c"])).toStrictEqual("A,b,c");
    });
    
})
