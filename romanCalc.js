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
    var valMap = {
        "I": 1,
        "V": 5
    }
    var beginMinus = false;
    
    for(var i = num.length-1; i >=0; i--) {
        var char = num[i];
        if(!beginMinus) {
            val += valMap[char];    
        }
        else {
            val -= valMap[char];
        }   
        if(char === 'V') {
            beginMinus = true;
        }
    }
    
    return val;
    
};