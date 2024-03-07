class AirConditioner{
    temperature;
    turnOn;

    constructor() {
        this.turnOn=false;
        this.temperature=17;

    }

    switch(){
        return this.turnOn=!this.turnOn;
    }

    increaseTemperature(){
        if(this.turnOn && this.temperature<30)
            return this.temperature += 1;
        else console.log("")
    }

    decreaseTemperature() {
        if (this.turnOn && this.temperature > 16)
            return this.temperature -= 1;
    }
}

module.exports ={AirConditioner}