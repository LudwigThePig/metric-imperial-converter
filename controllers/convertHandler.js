function ConvertHandler() {
  
  this.getNum = function(input) {
    let firstLetter = input.indexOf(input.match(/[a-z]/i));
    let result;
    
    if (firstLetter === 0){ //starts with letter
      result = 1;
    } else {
      result = input.slice(0, firstLetter);
      
      if (result.includes('/')){ // handles fractions
          let fraction = result.split(/[/]/g);
          if (fraction.length > 2){ //check for multiple fractions
            result = 'invalid'
            return result;
          } else {
            result = Number(fraction[0]) / Number(fraction[1]);
          }
      } else if (result.includes('.')){
      	if (result.split('.').length > 2){
        	result = 'invalid';
          return result;
        } else {
        return Number(result);
        }
      }
    }
    
    return result;
  };
  
  this.getUnit = function(input) {
    
    const units = ['mi', 'km', 'lbs', 'kg', 'gal', 'l']
    let firstLetter = input.indexOf(input.match(/[a-zA-Z]/));
    let temp = input.slice(firstLetter).toLowerCase();
    let result;

    if (units.includes(temp)){
      result = temp;
    } else {
      result = 'invalid'
    }
    
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;
    
    switch (initUnit){
      case 'mi':
        result = 'km';
        break;
      case 'km':
        result = 'mi';
        break;
      case 'lbs':
        result = 'kg';
        break;
      case 'kg':
        result = 'lbs';
        break;
      case 'gal':
        result = 'l';
        break;
      case 'l':
        result = 'gal';
        break;
      default:
        result = 'invalid';
  }    
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    
    let result;
    
    switch (initUnit){
      case 'gal':
        result = initNum * galToL;
        break;
        
      case 'L':
        result = initNum / galToL;
        break;
        
      case 'lbs':
        result = initNum * lbsToKg;
        break;
        
      case 'kg':
        result = initNum / lbsToKg;
        break;
        
      case 'mi':
        result = initNum * miToKm;
        break;
        
      case 'km':
        result = initNum / miToKm;
        break;
        
      default:
        result = "invalid";
    }
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
