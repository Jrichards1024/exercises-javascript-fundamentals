function isNegative(num) {
    if (num > 0){
        return false   
    }
    else if (num === 0) {
        return false
    }
    else {
        return true;
    }
    
  }
  
  if (require.main === module) {
    console.log('Running sanity checks for isNegative:');
  
    console.log(isNegative(0) === false);
    console.log(isNegative(1) === false);
    console.log(isNegative(-1) === true);
    console.log(isNegative(-100.20) === true);
  }
  
  module.exports = isNegative;
