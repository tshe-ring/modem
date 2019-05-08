/* Usage: node read_all_sms.js /path/to/device */

function err(message) {
  console.log('Usage: node read_all_sms.js /path/to/device');
  process.exit();
}

var device   = process.argv[2];

if(!device) err();

var modem = require('../index.js').Modem();

modem.open(device, function() {
  console.log("Opened");

  var number = "";

  modem.getPhoneNumber(function(number) {
    console.log("Number:" + number);
  });

  if (number === null )
    modem.setPhoneNumber( number, function(newNumber) {
      console.log("Update number:" + newNumber);
    });
  else
    modem.setPhoneNumber( "+380960619712", function(newNumber) {
      console.log("New number:" + newNumber);
    });
});