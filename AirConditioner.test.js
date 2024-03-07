const{AirConditioner} = require("./airConditioner")


test("air conditioner can be turned on ",()=>{
    let samsung = new AirConditioner();
    expect(true).toBe(samsung.switch())
})

test("Air conditioner is turned on then turned off ",()=>{
    let samsung = new AirConditioner();
    expect(true).toBe(samsung.switch())
    expect(false).toBe(samsung.switch())

})

test("Air conditioner is turned on then the temperature is increased",()=>{
    let samsung = new AirConditioner();
    expect(true).toBe(samsung.switch())
    expect(false).toBe(samsung.switch())
    expect(true).toBe(samsung.switch())
    expect(17).toBe(samsung.increaseTemperature())
})

test("Air conditioner is turned on when i decrease the temperature is decreased",()=>{
    let samsung = new AirConditioner();
    expect(true).toBe(samsung.switch())
    expect(17).toBe(samsung.increaseTemperature())
    expect(18).toBe(samsung.increaseTemperature())
})

test("Air conditioner is not turned on when i increase the temperature the temperature is still 16",()=>{
    let samsung = new AirConditioner();
    expect(undefined).toBe(samsung.increaseTemperature())
    expect(false).toBe(samsung.turnOn)
    expect(16).toBe(samsung.temperature)

})

test("Air conditioner is turned on when i increase the temperature beyond 30 ,the temperature is still 30 degrees celcius",()=>{
    let samsung = new AirConditioner();
    expect(true).toBe(samsung.switch())
    expect(17).toBe(samsung.increaseTemperature())
    expect(18).toBe(samsung.increaseTemperature())
    expect(19).toBe(samsung.increaseTemperature())
    expect(20).toBe(samsung.increaseTemperature())
    expect(21).toBe(samsung.increaseTemperature())
    expect(22).toBe(samsung.increaseTemperature())
    expect(23).toBe(samsung.increaseTemperature())
    expect(24).toBe(samsung.increaseTemperature())
    expect(25).toBe(samsung.increaseTemperature())
    expect(26).toBe(samsung.increaseTemperature())
    expect(27).toBe(samsung.increaseTemperature())
    expect(28).toBe(samsung.increaseTemperature())
    expect(29).toBe(samsung.increaseTemperature())
    expect(30).toBe(samsung.increaseTemperature())
    expect(30).toBe(samsung.increaseTemperature())
    expect(30).toBe(samsung.temperature)
})

test("Air conditioner is turned on when i decrease temperature below 16 degrees celcius the temperature is still 16 degrees celcius",()=>{
    let samsung = new AirConditioner();
    expect(true).toBe(samsung.switch())
    expect(17).toBe(samsung.increaseTemperature())
    expect(16).toBe(samsung.decreaseTemperature())
    expect(undefined).toBe(samsung.decreaseTemperature())
    expect(16).toBe(samsung.temperature)
})