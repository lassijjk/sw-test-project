import ceil from './ceil.js';

describe("Ceil function tests", () => {

    it("Ceiling with input 4010, should return 4010", () => {
        expect(ceil(4010)).toStrictEqual(4010);
    });

    it("Ceiling with input -2002, should return -2002", () => {
        expect(ceil(-2002)).toStrictEqual(-2002);
    });

    it("Ceiling with input 2.5, should return 3", () => {
        expect(ceil(2.5)).toStrictEqual(3);
    });

    it("Ceiling with input -1.24, should return -1", () => {
        expect(ceil(-1.24)).toStrictEqual(-1);
    });

    it("Ceiling with inputs (123.456, 2), should return 123.46", () => {
        expect(ceil(123.456, 2)).toStrictEqual(123.46);
    });

    it("Ceiling with inputs (0.0456), should return 0.05", () => {
        expect(ceil(0.0456, 2)).toStrictEqual(0.05);
    });

    it("Ceiling with inputs (2250, -2), should return 2300", () => {
        expect(ceil(2250, -2)).toStrictEqual(2300);
    });

    it("Ceiling with inputs (-3420, -2), should return -3400", () => {
        expect(ceil(-3420, -2)).toStrictEqual(-3400);
    });

    it("Ceiling with inputs (0.0015, -2), should return 100", () => {
        expect(ceil(0.0015, -2)).toStrictEqual(100);
    });

    it("Ceiling with NaN input, should return NaN", () => {
        expect(ceil(NaN)).toStrictEqual(NaN);
    });
})