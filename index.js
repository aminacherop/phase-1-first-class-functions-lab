// Code your solution in this file!
function returnFirstTwoDrivers(drivers){
    return drivers.slice(0,2);
}
const driversArray = ['Antonia', 'Nuru', 'Amari', 'Mo']
console.log(returnFirstTwoDrivers(driversArray));


function returnLastTwoDrivers(lastdrivers){
    return lastdrivers.slice(-2);
}
const lastdriversArray = ['Antonia', 'Nuru', 'Amari', 'Mo'];
console.log(returnLastTwoDrivers(driversArray));

const selectingDrivers = [returnFirstTwoDrivers ,returnLastTwoDrivers];
const selectDriversArray = ['Antonia', 'Nuru', 'Amari', 'Mo']

console.log(selectingDrivers[0](selectDriversArray));
console.log(selectingDrivers[1](selectDriversArray));

const createFareMultiplier = function (multiplier){
    return function (fare){
        return fare * multiplier;
    };
};
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
const fareQuadrupler = createFareMultiplier(4);

console.log(fareDoubler(10));
console.log(fareTripler(10));
console.log(fareQuadrupler(10));


const selectDifferentDrivers = function(drivers , selectionFunction){
    return selectionFunction(drivers);
};

const differentdriversArray = ['Antonia', 'Nuru', 'Amari', 'Mo'];
console.log(selectDifferentDrivers(differentdriversArray,returnFirstTwoDrivers));
console.log(selectDifferentDrivers(differentdriversArray,returnLastTwoDrivers));


