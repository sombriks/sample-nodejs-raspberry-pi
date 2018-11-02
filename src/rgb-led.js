const {
  Gpio
} = require('onoff');

const r = new Gpio(23, 'out');
const g = new Gpio(22, 'out');
const b = new Gpio(27, 'out');

const pins = [r, g, b];

let interval;

const rgb = _ => {
  const pin = pins.pop();
  pin.writeSync(1);
  pins.map(pin => pin.writeSync(0));
  pins.unshift(pin);
}

const rgbStop = _ => {
  console.log("finishing rgb...");
  clearInterval(interval);
  pins.map(pin => {
    pin.writeSync(0);
    pin.unexport();
  });
  console.log("done");
}

interval = setInterval(rgb, 500);
setTimeout(rgbStop, 15000);