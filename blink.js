const Gpio = require('onoff').Gpio;
const p14 = new Gpio(14,'out');

let blinkInterval;

const blink = _ => {
	console.log("blink!");
	if(p14.readSync() == 0)
		p14.writeSync(1);
	else
		p14.writeSync(0);
}

const endBlink = _ => {
	console.log("finishing blink...");
	clearInterval(blinkInterval);
	p14.writeSync(0);
	p14.unexport();
	console.log("done");
}

blinkInterval = setInterval(blink,3000);
setTimeout(endBlink,15000);
