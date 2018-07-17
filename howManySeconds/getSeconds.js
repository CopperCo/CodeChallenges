/*
Given the list in reports.html of reports ran, console log the total run time in seconds of all Calculate Pricing reports
*/

// Select all the list items on the page and convert to array

var reportsArray = $('li.reports').toArray();
// console.log(reportsArray);
// console.log(reportsArray[0].innerText);

// Filter for only the elements that contain the word 'pricing'

var pricingArr = [];

for (let index = 0; index < reportsArray.length; index++) {
  const element = reportsArray[index];
  const insideText = reportsArray[index].innerText;
  if (insideText == 'Calculate Pricing') {
    pricingArr.push(reportsArray[index]);
  }
}

console.log(pricingArr);

// map down to a list of time strings

var pricingTimeArr = [];

for (let index = 0; index < pricingArr.length; index++) {
  const timing = pricingArr[index].dataset.runtime;
  pricingTimeArr.push(timing);
}
console.log(pricingTimeArr);

var secondsArr = [];

for (let index = 0; index < pricingTimeArr.length; index++) {
  const timing2 = pricingArr[index].dataset.runtime;
  console.log(timing2);
  var t = pricingArr[index].dataset.runtime.split(':');
  // map to an array of seconds
  var seconds = t[0] * 60 + +t[1];
  var secondInt = parseInt(seconds);
  secondsArr.push(secondInt);
}

console.log(secondsArr);

// reduce to get total
var sum = secondsArr.reduce(function(a, b) {
  return a + b;
}, 0);

// 317+502+323+432+406+285+280+711+553+350+349+537+689+187+211
// EXPECTED ANSWER 6132
console.log('Calculate Pricing ran a total of ' + sum + ' seconds.');

$('.answer').text('Calculate Pricing ran a total of ' + sum + ' seconds.');
