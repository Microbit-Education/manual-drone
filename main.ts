radio.onReceivedString(function on_received_string(receivedString: string) {
    
    key = receivedString
})
let key = ""
radio.setGroup(33)
Drones.initModule(Drones.Runmodes.Master)
basic.showIcon(IconNames.House)
Drones.UAV_speed(100)
radio.sendString("S")
basic.forever(function on_forever() {
    if (key == "t") {
        //  button A+B, flying=0 --> take off
        Drones.Basic_action(Drones.Basicoptions.Takeoff)
    } else if (key == "l") {
        //  button A+B, flying=1 --> land
        Drones.Basic_action(Drones.Basicoptions.Landing)
    } else if (key == "1") {
        //  button A --> incr altitude
        basic.showLeds(`
            # . . . #
                        # . . . #
                        # . . . #
                        # . . . #
                        . # # # .
        `)
        Drones.Move_action(Drones.Directionoptions.Up, 45)
    } else if (key == "2") {
        //  button B --> decr altitude
        basic.showLeds(`
            # # # . .
                        # . . # .
                        # . . # .
                        # . . # .
                        # # # . .
        `)
        Drones.Move_action(Drones.Directionoptions.Down, 45)
    } else if (key == "3") {
        //  pitch (tilt down) --> forward
        basic.showLeds(`
            . . # . .
                        . # # # .
                        # . # . #
                        . . # . .
                        . . # . .
        `)
        Drones.Move_action(Drones.Directionoptions.Forward, 45)
    } else if (key == "4") {
        //  pitch (tilt up) --> backward
        basic.showLeds(`
            . . # . .
                        . . # . .
                        # . # . #
                        . # # # .
                        . . # . .
        `)
        Drones.Move_action(Drones.Directionoptions.Backward, 45)
    } else if (key == "5") {
        //  roll (tilt left) --> left
        basic.showLeds(`
            . . # . .
                        . # . . .
                        # # # # #
                        . # . . .
                        . . # . .
        `)
        Drones.Move_action(Drones.Directionoptions.Left, 45)
    } else if (key == "6") {
        //  roll (tilt right) --> right
        basic.showLeds(`
            . . # . .
                        . . . # .
                        # # # # #
                        . . . # .
                        . . # . .
        `)
        Drones.Move_action(Drones.Directionoptions.Right, 45)
    }
    
})
