function validatePIN (pin) {
  if(pin.length !== 4 && pin.length !== 6){
    return false;
  }
  const regex = /^[0-9]+$/;
  const result = regex.test(pin);
  return result
}
console.log(validatePIN("-12345"))

for (var i in pin)
if (pin[i] > '9' || pin[i] < '0')
    return false;
return true;