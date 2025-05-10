let serialData = ""
serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    serialData = serial.readUntil(serial.delimiters(Delimiters.NewLine))
    if (serialData == "Apple") {
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            # # # # #
            . # # # .
            `)
    } else if (serialData == "Banana") {
        basic.showLeds(`
            # . . . .
            # # . . .
            . # # . .
            . # # # .
            . . # # #
            `)
    } else {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
})
basic.forever(function () {
	
})
