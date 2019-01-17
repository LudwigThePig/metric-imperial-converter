function ConvertHandler() {
  
  this.getNum = function(input) {
    var result;
    
    return result;
  };
  
  this.getUnit = function(input) {
    var result;
    
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    
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
    
    let val;
    let result;
    
    switch (initUnit){
      case 'gal':
        val = initNum * galToL;
        result = val + " liters";
        break;
        
      case 'L':
        val = initNum / galToL;
        result = val + " gallons";
        break;
        
      case 'lbs':
        val = initNum * lbsToKg;
        result = val + " liters"
        break;
        
      case 'kg':
        val = initNum / lbsToKg;
        result = val + " pounds"
        break;
        
      case 'mi':
        val = initNum * miToKm;
        result = val + " kilometers"
        break;
        
      case 'km':
        val = initNum / miToKm;
        result = val + " miles"
        break;
        
      default:
        result = "That is not a valid unit";
    }
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;