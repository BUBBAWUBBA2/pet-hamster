input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Sad)
    soundExpression.sad.playUntilDone()
    basic.showIcon(IconNames.Asleep)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showIcon(IconNames.Happy)
    soundExpression.giggle.playUntilDone()
    basic.showIcon(IconNames.Asleep)
})
basic.showLeds(`
    . . . . .
    . # # # .
    . # . # #
    . # # # #
    . # . # .
    `)
basic.showLeds(`
    . . . . .
    . # # # .
    . # . # #
    . # # # #
    # . . # .
    `)
basic.showLeds(`
    . . . . .
    # # # . .
    # . # # .
    # # # # .
    # . # . .
    `)
basic.showLeds(`
    . . . . .
    . # # # .
    # # . # .
    # # # # .
    . # . # .
    `)
basic.showLeds(`
    . . . . .
    . . # . .
    . . # . .
    . # # # #
    . # . # .
    `)
