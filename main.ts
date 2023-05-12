basic.forever(function () {
    serial.writeLine("Luminosité : " + input.lightLevel())
    basic.pause(1000)
})
