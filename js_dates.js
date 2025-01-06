// --JS Dates--

const d = new Date("2024-01-01");
// console.log(d);

// console.log(d.toUTCString())
// console.log(d.toISOString())

const d2 = new Date("03/25/2015");

const d3 = new Date("Mar 25 2015");

const d4 = new Date("January 25 2015");

const d5 = new Date("JANUARY, 25, 2015");

let msec = Date.parse("March 21, 2012");

d.getFullYear();

d.getMonth();

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let month = months[d.getMonth()];

d.getHours();

d.getMinutes();

d.getSeconds();

d.getMilliseconds();

d.getDay();

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let day = days[d.getDay()];

d.getTime();

// Calculate the number of years since 1970/01/01:

const minute = 1000 * 60;
const hour = minute * 60;
const Day = hour * 24;
const year = Day * 365;

let years = Math.round(Date.now() / year);

let diff = d.getTimezoneOffset();

d.setFullYear(2020);

d.setMonth(11);

d.setDate(15); // set the day

d.setHours(22);

d.setMinutes(30);

d.setSeconds(30);

// --Comparing Two Years--

let text = "";
const today = new Date();
const someday = new Date();
someday.setFullYear(2100, 0, 14);

if (someday > today) {
  text = "Today is before January 14, 2100.";
} else {
  text = "Today is after January 14, 2100.";
}