const {
	Gpio
} = require('onoff');
const pin = new Gpio(17, 'out');

let blinkInterval;

const blink = _ => {
	console.log("blink!");
	if (pin.readSync() == 0)
		pin.writeSync(1);
	else
		pin.writeSync(0);
}

const endBlink = _ => {
	console.log("finishing blink...");
	clearInterval(blinkInterval);
	pin.writeSync(0);
	pin.unexport();
	console.log("done");
}

blinkInterval = setInterval(blink, 3000);
setTimeout(endBlink, 15000);
