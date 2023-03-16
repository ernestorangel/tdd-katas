// Write a “fizzBuzz” method that accepts a number as input and returns it as a String
import { fizzbuzz } from './fizzbuzz'

describe('fizzbuzz()', () => {
    it('should accept a number as input and return it as a String. #1 Case.', () => {
        expect(fizzbuzz(1)).toBe('1');
    });

    it('should accept a number as input and return it as a String. #2 Case.', () => {
        expect(fizzbuzz(10)).toBe('10');
    });

    it('should accept a number as input and return it as a String. #3 Case.', () => {
        expect(fizzbuzz(100)).toBe('100');
    });

    it('should accept a number as input and return it as a String. #4 Case.', () => {
        expect(fizzbuzz(10.5)).toBe('10.5');
    });

    it('should accept a number as input and return it as a String. #4 Case.', () => {
        expect(fizzbuzz(0.5)).toBe('0.5');
    });
});