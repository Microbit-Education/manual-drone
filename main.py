def on_received_string(receivedString):
    global key
    key = receivedString
radio.on_received_string(on_received_string)

key = ""
radio.set_group(33)
Drones.init_module(Drones.Runmodes.MASTER)
basic.show_icon(IconNames.HOUSE)
Drones.UAV_speed(100)
radio.send_string("S")

def on_forever():
    if key == "t":
        # button A+B, flying=0 --> take off
        Drones.Basic_action(Drones.Basicoptions.TAKEOFF)
    elif key == "l":
        # button A+B, flying=1 --> land
        Drones.Basic_action(Drones.Basicoptions.LANDING)
    elif key == "1":
        # button A --> incr altitude
        basic.show_leds("""
            # . . . #
                        # . . . #
                        # . . . #
                        # . . . #
                        . # # # .
        """)
        Drones.Move_action(Drones.Directionoptions.UP, 45)
    elif key == "2":
        # button B --> decr altitude
        basic.show_leds("""
            # # # . .
                        # . . # .
                        # . . # .
                        # . . # .
                        # # # . .
        """)
        Drones.Move_action(Drones.Directionoptions.DOWN, 45)
    elif key == "3":
        # pitch (tilt down) --> forward
        basic.show_leds("""
            . . # . .
                        . # # # .
                        # . # . #
                        . . # . .
                        . . # . .
        """)
        Drones.Move_action(Drones.Directionoptions.FORWARD, 45)
    elif key == "4":
        # pitch (tilt up) --> backward
        basic.show_leds("""
            . . # . .
                        . . # . .
                        # . # . #
                        . # # # .
                        . . # . .
        """)
        Drones.Move_action(Drones.Directionoptions.BACKWARD, 45)
    elif key == "5":
        # roll (tilt left) --> left
        basic.show_leds("""
            . . # . .
                        . # . . .
                        # # # # #
                        . # . . .
                        . . # . .
        """)
        Drones.Move_action(Drones.Directionoptions.LEFT, 45)
    elif key == "6":
        # roll (tilt right) --> right
        basic.show_leds("""
            . . # . .
                        . . . # .
                        # # # # #
                        . . . # .
                        . . # . .
        """)
        Drones.Move_action(Drones.Directionoptions.RIGHT, 45)
basic.forever(on_forever)
