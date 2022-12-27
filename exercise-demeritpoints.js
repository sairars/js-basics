console.log(checkSpeed(180));

function checkSpeed(currentSpeed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;

    const excessSpeed = currentSpeed - speedLimit;
    
    if (excessSpeed < kmPerDemeritPoint)
        return 'Ok';

    const demeritPoints = Math.floor(excessSpeed / 5);
    return  (demeritPoints >= 12)
        ? 'License suspended' 
        : 'Points: ' + demeritPoints;
}