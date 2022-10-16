import { a } from './prueba.js';

/* eslint-disable no-undef */
describe('test', () => {
    test('test1', () => {
        const result = a();
        const expectedResult = 3;
        expect(result).toBe(3);
    });
});
