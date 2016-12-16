function romanNumAdd(num1, num2) {
    
    var val = num1.concat(num2);
    if(val === "IIII") {
        val = "IV";
    }
    return val;
      
};


function romanNumSubtract(num1, num2) {
    
    return num1.replace(num2, "");
      
};

function convertRomanToInt(num) {
    var val = 0;
    if(num.indexOf('V') > -1 && num.indexOf('I') > -1) {
        val = num.indexOf('V') > num.indexOf('I')? 4 : 6;
    }
    else if(num.length == 1) {
        val = num === "I" ? 1 : 5;
    }
    else {
        val = num.length;
    }
    return val;
    
};