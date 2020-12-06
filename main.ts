let 숫자 = 0
input.onButtonPressed(Button.A, function () {
    숫자 += -1
})
input.onButtonPressed(Button.B, function () {
    숫자 += 1
})
basic.forever(function () {
    basic.showNumber(숫자)
})
