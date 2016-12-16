function romanNumAdd(num1, num2) {
    
    return convertIntToRoman(convertRomanToInt(num1) + convertRomanToInt(num2));
      
};


function romanNumSubtract(num1, num2) {
    
   return convertIntToRoman(convertRomanToInt(num1) - convertRomanToInt(num2));
      
};

function convertRomanToInt(num) {
    var val = 0;
    var valMap = {
        "I": 1,
        "V": 5, 
        "X": 10,
        "L": 50,
        "C": 100, 
        "D": 500,
        "M": 1000
    }
    var lastValue = 0;
    for(var i = num.length-1; i >=0; i--) {
        var char = num[i];
  
        if(lastValue > valMap[char]) {
            val -= valMap[char];
        }
        else {
            val += valMap[char];  
        }
        lastValue = valMap[char];
    }
    
    return val;
    
};

function convertIntToRoman(num) {
    var val = "";
    var charValues = [
      {char: "M", value: 1000},
      {char: "D", value: 500},
      {char: "C", value: 100},    
      {char: "L", value: 50},  
      {char: "X", value: 10},
      {char: "V", value: 5},
      {char: "I", value: 1}    
    ];
    
    
    while(num > 0) {
        for(var i = 0; i < charValues.length; i++) {
            var obj = charValues[i];
            if(num - obj.value >= 0) {
                val = val.concat(obj.char);
                num -= obj.value;
                break;
            }
        }
        val = val.replace('IIII', 'IV');
        val = val.replace('XXXX', 'XL');
    }

    return val;
};