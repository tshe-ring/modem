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

  modem.getPhoneNumber(function(args) {
    console.log("Argumenets:" + args);
  });
});