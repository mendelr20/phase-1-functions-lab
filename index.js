function distanceFromHqInBlocks(bStart){
    if (bStart > 42)
        return bStart - 42
    if (bStart < 42 )
        return 42 - bStart
}

function distanceFromHqInFeet(fStart){
    if (fStart > 42) 
        return (fStart - 42)*264
    if (fStart < 42)
        return (42 - fStart)*264
}

function distanceTravelledInFeet(start, destination){
    if (start > destination)
        return (start - destination)*264
    if (start < destination)
        return (destination - start)*264
}

function calculatesFarePrice(start, destination){
    let blockDistance = Math.abs (start - destination)
    let distanceTravelled = blockDistance * 264;

    if (distanceTravelled <= 400){
        console.log('give customers a free sample')
        return 0
    }

    else if (distanceTravelled >= 2500)
        return 'cannot travel that far'
    else if (distanceTravelled > 2000)
        return 25
    else if (400 < distanceTravelled && distanceTravelled < 2001)
        return (distanceTravelled - 400) * 0.02
}   



