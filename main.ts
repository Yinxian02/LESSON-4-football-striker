input.onButtonPressed(Button.A, function () {
    radio.sendString("left")
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "right") {
        basic.showIcon(IconNames.Happy)
        pins.servoWritePin(AnalogPin.P1, 135)
    } else {
        pins.servoWritePin(AnalogPin.P1, 45)
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("right")
})
basic.showIcon(IconNames.Angry)
radio.setGroup(1)
