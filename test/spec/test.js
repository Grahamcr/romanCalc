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
        
    });
})();