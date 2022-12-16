import eq from './eq'
import clamp from "./clamp.js";


describe('eq', () => {
    const object = { 'a': 1 }
    const other = { 'a': 1 }
    it('Should return true with input of object, object', () => {
        expect(eq(object, object)).toStrictEqual(true);
    })
    it('Should return false with input of object, other', () => {
        expect(eq(object, other)).toStrictEqual(false);
    })
    it('Should return true with input of a, a', () => {
        expect(eq('a', 'a')).toStrictEqual(true);
    })
    it('Should return false with input of a and Object(a)', () => {
        expect(eq('a', Object('a'))).toStrictEqual(false);
    })
    it('Should return true with input of NaN, NaN', () => {
        expect(eq(NaN, NaN)).toStrictEqual(true);
    })
})