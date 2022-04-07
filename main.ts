let y = 0
function draw_line(y: number) {
    for (let i = 0; i < 5; i++) {
        led.plot(i, y)
    }
}

while (true) {
    basic.clearScreen()
    draw_line(y % 5)
    basic.pause(300)
    y += 1
}
