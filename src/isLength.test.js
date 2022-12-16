import isLength from "./isLength";

describe("isLength function tests", () => {
    
    it("Should return true with input 6", () => {
        expect(isLength(6)).toStrictEqual(true);
    });

    it("Should return true with input 0", () => {
        expect(isLength(0)).toStrictEqual(true);
    });

    it("Should return false with input -4", () => {
        expect(isLength(-4)).toStrictEqual(false);
    });

    it("Should return false with input 1.25", () => {
        expect(isLength(1.25)).toStrictEqual(false);
    });

    it("Should return false with input '15'", () => {
        expect(isLength("15")).toStrictEqual(false);
    });

    it("Should return false with input null", () => {
        expect(isLength(null)).toStrictEqual(false);
    })

    it("Should return false with input NaN", () => {
        expect(isLength(NaN)).toStrictEqual(false);
    })
})