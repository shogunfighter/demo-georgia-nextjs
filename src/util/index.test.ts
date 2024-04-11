import { getFormattedDate, generateSerialNumber } from "./index";

// some sample testing

describe("util", ()=> {
    it("`getFormattedDate` should generate random serial number", ()=> {
        const d = getFormattedDate(new Date('2024-04-11'));
        expect(d).toBe('04/11/2024');
    });
    it("`generateSerialNumber` should generate random serial number", ()=> {
        const result1 = generateSerialNumber(10);
        const result2 = generateSerialNumber(10);
        expect(result1.length).toBe(10+8);
        expect(result2.length).toBe(10+8);
        expect(result1).not.toBe(result2);
    });
})