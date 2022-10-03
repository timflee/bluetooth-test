input.onButtonPressed(Button.A, function () {
    AorB = "A"
    basic.showString(AorB)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString(AorB)
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    AorB = "B"
    basic.showString(AorB)
})
let AorB = ""
radio.setGroup(1)
basic.forever(function () {
	
})
