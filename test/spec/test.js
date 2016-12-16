(function () {
    'use strict';
    describe('Test for Roman Calculator Fuction', function () {
        it('Simple Addition of I', function () {
            expect(romanNumAdd('I','I')).toBe('II');
        });
        
        it('Simple Subtraction of I', function () {
            expect(romanNumSubtract('II','I')).toBe('I');
        });
        
        it('Addition of I to II', function () {
            expect(romanNumAdd('I','II')).toBe('III');
        });
        
        it('III Subtract I', function () {
            expect(romanNumSubtract('III','I')).toBe('II');
        });
        
        it('Addition of I to III', function () {
            expect(romanNumAdd('I','III')).toBe('IV');
        });
        
        it('Addition of I to IV', function () {
            expect(romanNumAdd('I','IV')).toBe('V');
        });
        
    });
    
    describe('Convert Roman Numberal to Integer', function () {
        it('Convert I to 1', function () {
            expect(convertRomanToInt('I')).toBe(1);
        });
        
        it('Convert II to 2', function () {
            expect(convertRomanToInt('II')).toBe(2);
        });
        
        it('Convert V to 5', function () {
            expect(convertRomanToInt('V')).toBe(5);
        });
        
        it('Convert IV to 4', function () {
            expect(convertRomanToInt('IV')).toBe(4);
        });
        
        it('Convert VI to 6', function () {
            expect(convertRomanToInt('VI')).toBe(6);
        });
        
        it('Convert VII to 7', function () {
            expect(convertRomanToInt('VII')).toBe(7);
        });
        
    });
    
     describe('Convert Integer to Roman Numeral', function () {
         
        it('Convert 1 to I', function () {
            expect(convertIntToRoman(1)).toBe('I');
        });
         
        it('Convert 2 to II', function () {
            expect(convertIntToRoman(2)).toBe('II');
        });
         
        it('Convert 5 to V', function () {
            expect(convertIntToRoman(5)).toBe('V');
        });
         
        it('Convert 6 to VI', function () {
            expect(convertIntToRoman(6)).toBe('VI');
        });
         
        it('Convert 4 to IV', function () {
            expect(convertIntToRoman(4)).toBe('IV');
        });
         
        it('Convert 7 to VII', function () {
            expect(convertIntToRoman(7)).toBe('VII');
        });
     });
})();