let breakfastLoc = 'Callaway',
    class1Loc = '',
    class2Loc = '',
    lunchLoc = '', // put @ in the lunch location. Ex: '@ Sbisa'
    class3Loc = '',
    panelLoc = '', // put @ in the panel location
    class4Loc = '',
    dinnerLoc = ''; // put @ in the dinner location

// CLASSES
// ---------------------------------------
let class1Name = 'Aquaponics',
    class2Name = 'Aquaponics',
    class3Name = 'Advanced Coding',
    class4Name = 'Tour',
    panelName = 'Panel';

let week1StartDay = 11;
let month1 = '06';
let year = '2018';

let day1 = `${year}-${month1}-${week1StartDay}`,
    day2 = `${year}-${month1}-${week1StartDay+1}`,
    day3 = `${year}-${month1}-${week1StartDay+2}`,
    day4 = `${year}-${month1}-${week1StartDay+3}`,
    day5 = `${year}-${month1}-${week1StartDay+4}`;
exports.schedule = {
    // DAY 1
    [day1]: [{
        name: `8:00AM - 8:45AM\nBreakfast @ ${breakfastLoc}`,
        height:75
    },
    {
        name: `8:45AM - 9:00AM\nBus to Campus`,
        height: 25
    },
    {
        name: `9:00AM - 10:30AM\n${class1Name} @ ${class1Loc}`,
        height: 150,
    },
    {
        name: `10:40AM - 12:10PM\n${class2Name} @ ${class2Loc}`,
        height: 150,
    },
    {
        name: `12:20PM - 1:20PM\nLunch ${lunchLoc}`,
        height: 100,
    },
    {
        name: `1:30PM - 3:00PM\n${class3Name} @ ${class3Loc}`,
        height: 150,
    },
    {
        name: `3:10PM - 3:50PM\n${panelName} ${panelLoc}`,
        height: 50,
    },
    {
        name: `4:00PM - 5:30PM\n${class4Name} @ ${class4Loc}`,
        height: 150,
    },
    {
        name: `5:30PM - 5:45PM\nBus to Callaway`,
        height: 25,
    },
    {
        name: `6:30PM - 7:30PM\nDinner ${dinnerLoc}`,
        height:100
    },
    {
        name: `7:30PM - 9:30PM\nNight Activity`,
        height: 200,
    },
    {
        name: `9:30PM - 10:00PM\nNight Check`,
        height: 50,
    }],

    // DAY 2
    [day2]: [{
        name: `8:00AM - 8:45AM\nBreakfast @ ${breakfastLoc}`,
        height:75
    },
    {
        name: `8:45AM - 9:00AM\nBus to Campus`,
        height: 25
    },
    {
        name: `9:00AM - 10:30AM\n${class1Name} @ ${class1Loc}`,
        height: 150,
    },
    {
        name: `10:40AM - 12:10PM\n${class2Name} @ ${class2Loc}`,
        height: 150,
    },
    {
        name: `12:20PM - 1:20PM\nLunch ${lunchLoc}`,
        height: 100,
    },
    {
        name: `1:30PM - 3:00PM\n${class3Name} @ ${class3Loc}`,
        height: 150,
    },
    {
        name: `3:10PM - 3:50PM\n${panelName} ${panelLoc}`,
        height: 50,
    },
    {
        name: `4:00PM - 5:30PM\n${class4Name} @ ${class4Loc}`,
        height: 150,
    },
    {
        name: `5:30PM - 5:45PM\nBus to Callaway`,
        height: 25,
    },
    {
        name: `6:30PM - 7:30PM\nDinner ${dinnerLoc}`,
        height:100
    },
    {
        name: `7:30PM - 9:30PM\nNight Activity`,
        height: 200,
    },
    {
        name: `9:30PM - 10:00PM\nNight Check`,
        height: 50,
    }],

    // DAY 3
    [day3]: [{
        name: `8:00AM - 8:45AM\nBreakfast @ ${breakfastLoc}`,
        height:75
    },
    {
        name: `8:45AM - 9:00AM\nBus to Campus`,
        height: 25
    },
    {
        name: `9:00AM - 10:30AM\n${class1Name} @ ${class1Loc}`,
        height: 150,
    },
    {
        name: `10:40AM - 12:10PM\n${class2Name} @ ${class2Loc}`,
        height: 150,
    },
    {
        name: `12:20PM - 1:20PM\nLunch ${lunchLoc}`,
        height: 100,
    },
    {
        name: `1:30PM - 3:00PM\n${class3Name} @ ${class3Loc}`,
        height: 150,
    },
    {
        name: `3:10PM - 3:50PM\n${panelName} ${panelLoc}`,
        height: 50,
    },
    {
        name: `4:00PM - 5:30PM\n${class4Name} @ ${class4Loc}`,
        height: 150,
    },
    {
        name: `5:30PM - 5:45PM\nBus to Callaway`,
        height: 25,
    },
    {
        name: `6:30PM - 7:30PM\nDinner ${dinnerLoc}`,
        height:100
    },
    {
        name: `7:30PM - 9:30PM\nNight Activity`,
        height: 200,
    },
    {
        name: `9:30PM - 10:00PM\nNight Check`,
        height: 50,
    }],

    // DAY 4
    [day4]: [{
        name: `8:00AM - 8:45AM\nBreakfast @ ${breakfastLoc}`,
        height:75
    },
    {
        name: `8:45AM - 9:00AM\nBus to Campus`,
        height: 25
    },
    {
        name: `9:00AM - 10:30AM\n${class1Name} @ ${class1Loc}`,
        height: 150,
    },
    {
        name: `10:40AM - 12:10PM\n${class2Name} @ ${class2Loc}`,
        height: 150,
    },
    {
        name: `12:20PM - 1:20PM\nLunch ${lunchLoc}`,
        height: 100,
    },
    {
        name: `1:30PM - 3:00PM\n${class3Name} @ ${class3Loc}`,
        height: 150,
    },
    {
        name: `3:10PM - 3:50PM\n${panelName} ${panelLoc}`,
        height: 50,
    },
    {
        name: `4:00PM - 5:30PM\n${class4Name} @ ${class4Loc}`,
        height: 150,
    },
    {
        name: `5:30PM - 5:45PM\nBus to Callaway`,
        height: 25,
    },
    {
        name: `6:30PM - 7:30PM\nDinner ${dinnerLoc}`,
        height:100
    },
    {
        name: `7:30PM - 9:30PM\nNight Activity`,
        height: 200,
    },
    {
        name: `9:30PM - 10:00PM\nNight Check`,
        height: 50,
    }],

    // Day 5
    [day5]: [{
        name: `8:00AM - 8:45AM\nBreakfast @ ${breakfastLoc}`,
        height:75
    },
    {
        name: `8:45AM - 9:00AM\nBus to Campus`,
        height: 25
    },
    {
        name: `9:00AM - 10:30AM\n${class1Name} @ ${class1Loc}`,
        height: 150,
    },
    {
        name: `10:40AM - 12:10PM\n${class2Name} @ ${class2Loc}`,
        height: 150,
    },
    {
        name: `12:20PM - 1:20PM\nLunch ${lunchLoc}`,
        height: 100,
    },
    {
        name: `1:30PM - 3:00PM\n${class3Name} @ ${class3Loc}`,
        height: 150,
    },
    {
        name: `3:10PM - 3:50PM\n${panelName} ${panelLoc}`,
        height: 50,
    },
    {
        name: `4:00PM - 5:30PM\n${class4Name} @ ${class4Loc}`,
        height: 150,
    },
    {
        name: `5:30PM - 5:45PM\nBus to Callaway`,
        height: 25,
    },
    {
        name: `6:30PM - 7:30PM\nDinner ${dinnerLoc}`,
        height:100
    },
    {
        name: `7:30PM - 9:30PM\nNight Activity`,
        height: 200,
    },
    {
        name: `9:30PM - 10:00PM\nNight Check`,
        height: 50,
    }]

}