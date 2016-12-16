(function () {
    'use strict';
    describe('Test for Roman Calculator Fuction', function () {
        it('Simple Addition of I', function () {
            expect(romanNumAdd('I','I')).toBe('II');
        });
        
        it('Simple Subtraction of I', function () {
            expect(romanNumSubtract('II','I')).toBe('I');
        });
        
    });
})();