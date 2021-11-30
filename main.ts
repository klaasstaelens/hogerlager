input.onButtonPressed(Button.A, function () {
    score = score + 1
    Hoogste = willekeurigGetal - 1
    willekeurigGetal = randint(Laagste, Hoogste)
    basic.showNumber(willekeurigGetal)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(score)
})
input.onButtonPressed(Button.B, function () {
    score = score + 1
    Laagste = willekeurigGetal + 1
    willekeurigGetal = randint(Laagste, Hoogste)
    basic.showNumber(willekeurigGetal)
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(willekeurigGetal)
})
let willekeurigGetal = 0
let Laagste = 0
let Hoogste = 0
let score = 0
score = 0
Hoogste = 99
Laagste = 0
willekeurigGetal = randint(0, 99)
