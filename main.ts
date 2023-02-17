input.onButtonPressed(Button.A, function () {
    music.playMelody("C5 A F C5 A F D F ", 150)
    radio.sendString("hi stink")
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("<3")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    music.playMelody("B A G A G F A C5 ", 120)
    basic.showIcon(IconNames.Heart)
})
radio.setGroup(1)
basic.forever(function () {
	
})
