import Chance from 'chance';

const chance = Chance();    // Initialize chance package

export const fakeUserData = () => {
    // console.log(chance.name({middle:true}));     // print fake user api data
    return chance.name({middle:true});  // Access fake user data 
}

// fakeUserData();