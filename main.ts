radio.onReceivedString(function (receivedString) {
    if (receivedString == "V") {
        MotionKit.driveForwards(100)
    }
    if (receivedString == "L") {
        MotionKit.turnLeft(45)
    }
})
radio.setGroup(10)
radio.setTransmitPower(7)
