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
        
    });
})();