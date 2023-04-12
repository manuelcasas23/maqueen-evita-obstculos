let velocidad = 100
maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, velocidad)
let strip = neopixel.create(DigitalPin.P4, 3, NeoPixelMode.RGB)
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) < 10) {
        maqueen.motorStop(maqueen.Motors.All)
        basic.pause(1000)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 130)
        basic.pause(500)
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, velocidad)
    }
})
basic.forever(function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(2000)
    strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    basic.pause(1000)
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
    basic.pause(5000)
})
