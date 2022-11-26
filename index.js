// Code your solution in this file!
const scuberLocation = 42;
function distanceFromHqInBlocks(pickUpLoc){
    return Math.abs(pickUpLoc - scuberLocation);
};
function distanceFromHqInFeet(pickUpLoc){
    return Math.abs(pickUpLoc - scuberLocation) * 264;
};
function distanceTravelledInFeet(start,destination){
    return Math.abs(start - destination) * 264;
};
function calculatesFarePrice(start,destination){
    const distTravelled = Math.abs(destination - start) * 264;
    let fare;

    if (distTravelled <= 400){
        fare = 0;
        return fare;
    }else if(distTravelled > 400 && distTravelled < 2000){
        fare = (distTravelled - 400) * (2/100);
        return fare;
    } else if (distTravelled > 2000 && distTravelled < 2500){
        fare = 25;
        return fare 
    }else if (distTravelled > 2500 ){
        return 'cannot travel that far';
    }
};
