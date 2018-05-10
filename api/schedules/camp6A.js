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
let class1Name = 'Teacher Boot Camp',
    class2Name = 'Teacher Boot Camp',
    class3Name = 'Teacher Boot Camp',
    class4Name = 'Teacher Boot Camp',
    panelName = 'Teacher Boot Camp';

let week1StartDay = 18;
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
        name: `9:00AM - 10:30AM\nPre-Assessment/Benefits of PBLs`,
        height: 150,
    },
    {
        name: `10:40AM - 12:10PM\nSpaghetti Challenge`,
        height: 150,
    },
    {
        name: `12:10PM - 1:30PM\nLunch ${lunchLoc}`,
        height: 130,
    },
    {
        name: `1:30PM - 3:30PM\nIntroduction to STEM PBL`,
        height: 200,
    },
    {
        name: `3:30PM - 5:30PM\nEngineering Design Process/Engagement in STEM PBL Activity`,
        height: 200,
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
        name: `9:00AM - 10:30AM\nDrinking Water - Is it Safe?`,
        height: 150,
    },
    {
        name: `10:40AM - 12:10PM\nPBL Examples`,
        height: 150,
    },
    {
        name: `12:10PM - 1:30PM\nLunch ${lunchLoc}`,
        height: 130,
    },
    {
        name: `1:30PM - 3:30PM\nSTEM Objectives`,
        height: 200,
    },
    {
        name: `3:30PM - 5:30PM\nWriting WDO/IDT`,
        height: 200,
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
        name: `9:00AM - 10:30AM\nDevelop Engaging STEM Lesson`,
        height: 150,
    },
    {
        name: `10:40AM - 12:10PM\nWrite an Engagement`,
        height: 150,
    },
    {
        name: `12:10PM - 1:30PM\nLunch ${lunchLoc}`,
        height: 130,
    },
    {
        name: `1:30PM - 3:30PM\nWriting your Explanation`,
        height: 200,
    },
    {
        name: `3:30PM - 5:30PM\nWriting your Exploration`,
        height: 200,
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
        name: `9:00AM - 10:30AM\nDevelop Engaging STEM Lesson`,
        height: 150,
    },
    {
        name: `10:40AM - 12:10PM\nFormative/Summative Assessments`,
        height: 150,
    },
    {
        name: `12:10PM - 1:30PM\nLunch ${lunchLoc}`,
        height: 130,
    },
    {
        name: `1:30PM - 3:30PM\nWriting STEM Rubrics`,
        height: 200,
    },
    {
        name: `3:30PM - 5:30PM\nWriting Student Centered STEM PBL Assessments`,
        height: 200,
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
        name: `9:00AM - 10:30AM\nShowcase of PBL`,
        height: 150,
    },
    {
        name: `10:40AM - 12:10PM\nShowcase of PBL`,
        height: 150,
    },
    {
        name: `12:10PM - 1:30PM\nLunch ${lunchLoc}`,
        height: 130,
    },
    {
        name: `1:30PM - 3:30PM\nGallery Walk`,
        height: 200,
    },
    {
        name: `3:30PM - 5:30PM\nPost Assessment/Debrief`,
        height: 200,
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
    }]

}