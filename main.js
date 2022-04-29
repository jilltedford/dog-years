// This is my Age.
const myAge = 27;

// The first two years of a dog's life count as 10.5 dog years each. 
let earlyYears = 2;

earlyYears *= 10.5;

/* Since the first two years are calculated differently and are accounded for under earlyYears, 
we want to subtract them from myAge.*/
let laterYears = myAge - 2;

// Every year after the first two counts as 4 dog years. So, I multiplied my later years by 4.
laterYears *= 4;

// Let's add earlyYears and laterYears together to get my total age in dog years.
var myAgeInDogYears = (earlyYears + laterYears);

// Here I define my name, and ensure that the result is all lowercase  letters.
const myName = 'Jill' .toLowerCase();

/* The statement below was created using string interpolation, so if the variables myName, myAge, and myAgeInDogYears change, 
the statement reflects the new values.*/
// This reads: "My name is jill. I am 27 years old in human years which is 121 years old in dog years."
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
