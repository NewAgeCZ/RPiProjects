const Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO

class Led {

    constructor(pin) {
        this.led = new Gpio(pin, 'out');
    }

    light(power = false) {
        if (power) {
            this.led.writeSync(1); //set pin state to 1 (turn LED on)
        } else {
            this.led.writeSync(0); //set pin state to 0 (turn LED off)
        }
    }

    isLightning() {
        return this.led.readSync() === 1;
    }

    /**
     * Free GPIO resources.
     */
    free() {
        this.led.unexport(); // Unexport LED GPIO to free resources
    }

}

module.exports = {
    Led: Led
}
