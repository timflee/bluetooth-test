input.onButtonPressed(Button.A, function () {
    transmitPeriod = transmitPeriod * 2
    radio.sendValue("transmitPeriod", transmitPeriod)
})
input.onButtonPressed(Button.AB, function () {
	
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    transmitPeriod = transmitPeriod / 2
    radio.sendValue("transmitPeriod", transmitPeriod)
})
let transmitPeriod = 0
radio.setGroup(1)
transmitPeriod = 1024
radio.sendValue("transmitPeriod", transmitPeriod)
basic.forever(function () {
    while (true) {
        radio.sendValue("X accel", input.acceleration(Dimension.X))
        radio.sendValue("Y accel", input.acceleration(Dimension.Y))
        radio.sendValue("Z accel", input.acceleration(Dimension.Z))
        basic.pause(transmitPeriod)
    }
})
