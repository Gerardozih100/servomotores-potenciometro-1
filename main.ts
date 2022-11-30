let pote = 0
let pote1 = 0
let pote2 = 0
let pote3 = 0
basic.forever(function () {
    pote = pins.analogReadPin(AnalogPin.P0) / 4
    if (pote >= 220) {
        pins.servoWritePin(AnalogPin.P12, 140)
    } else if (pote >= 190 && pote < 220) {
        pins.servoWritePin(AnalogPin.P12, 120)
    } else if (pote >= 160 && pote < 190) {
        pins.servoWritePin(AnalogPin.P12, 100)
    } else if (pote >= 130 && pote < 160) {
        pins.servoWritePin(AnalogPin.P12, 80)
    } else if (pote >= 100 && pote < 130) {
        pins.servoWritePin(AnalogPin.P12, 60)
    } else if (pote >= 70 && pote < 100) {
        pins.servoWritePin(AnalogPin.P12, 40)
    } else if (pote >= 40 && pote < 70) {
        pins.servoWritePin(AnalogPin.P12, 20)
    } else {
    	
    }
})
basic.forever(function () {
    pote1 = pins.analogReadPin(AnalogPin.P1) / 4
    if (pote1 >= 220) {
        pins.servoWritePin(AnalogPin.P13, 140)
    } else if (pote1 >= 190 && pote1 < 220) {
        pins.servoWritePin(AnalogPin.P13, 120)
    } else if (pote1 >= 160 && pote1 < 190) {
        pins.servoWritePin(AnalogPin.P13, 100)
    } else if (pote1 >= 130 && pote1 < 160) {
        pins.servoWritePin(AnalogPin.P13, 80)
    } else if (pote1 >= 100 && pote1 < 130) {
        pins.servoWritePin(AnalogPin.P13, 60)
    } else if (pote1 >= 70 && pote1 < 100) {
        pins.servoWritePin(AnalogPin.P13, 40)
    } else if (pote1 >= 40 && pote1 < 70) {
        pins.servoWritePin(AnalogPin.P13, 20)
    } else {
    	
    }
})
basic.forever(function () {
    pote2 = pins.analogReadPin(AnalogPin.P2) / 4
    if (pote2 >= 220) {
        pins.servoWritePin(AnalogPin.P14, 140)
    } else if (pote2 >= 190 && pote2 < 220) {
        pins.servoWritePin(AnalogPin.P14, 120)
    } else if (pote2 >= 160 && pote2 < 190) {
        pins.servoWritePin(AnalogPin.P14, 100)
    } else if (pote2 >= 130 && pote2 < 160) {
        pins.servoWritePin(AnalogPin.P14, 80)
    } else if (pote2 >= 100 && pote2 < 130) {
        pins.servoWritePin(AnalogPin.P14, 60)
    } else if (pote2 >= 70 && pote2 < 100) {
        pins.servoWritePin(AnalogPin.P14, 40)
    } else if (pote2 >= 40 && pote2 < 70) {
        pins.servoWritePin(AnalogPin.P14, 20)
    } else {
    	
    }
})
basic.forever(function () {
    pote3 = pins.analogReadPin(AnalogPin.P3) / 4
    if (pote3 >= 220) {
        pins.servoWritePin(AnalogPin.P15, 140)
    } else if (pote3 >= 190 && pote3 < 220) {
        pins.servoWritePin(AnalogPin.P15, 120)
    } else if (pote3 >= 160 && pote3 < 190) {
        pins.servoWritePin(AnalogPin.P15, 100)
    } else if (pote3 >= 130 && pote3 < 160) {
        pins.servoWritePin(AnalogPin.P15, 80)
    } else if (pote3 >= 100 && pote3 < 130) {
        pins.servoWritePin(AnalogPin.P15, 60)
    } else if (pote3 >= 70 && pote3 < 100) {
        pins.servoWritePin(AnalogPin.P15, 40)
    } else if (pote3 >= 40 && pote3 < 70) {
        pins.servoWritePin(AnalogPin.P15, 20)
    } else {
    	
    }
})
basic.forever(function () {
    basic.showLeds(`
        # . . . .
        # # . . .
        # # # . .
        # # . . .
        # . . . .
        `)
    basic.showString("" + (pins.digitalReadPin(DigitalPin.P1)))
    basic.showLeds(`
        . . . . #
        . . . # #
        . . # # #
        . . . # #
        . . . . #
        `)
})
