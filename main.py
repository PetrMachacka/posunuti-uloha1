y = 0
def draw_line(y):
    for i in range(5):
        led.plot(i , y)
while True:
    
    basic.clear_screen()
    draw_line(y % 5)
    basic.pause(300)
    y += 1