// How to add CSS to console.log
//purpose is organize/structor console.log output
//dev.to/annlin/consolelog-with-css-style-1mmp
https: console.log(
  "%cHeyThere!",
  "color:green;font-family:system-ui;font-size:4rem;-webkit-text-stroke: 1px black;font-weight:bold"
);

//-- console.time - method starts a timer in the console view
//-- This method allows you to time certain operations in your code for testing purposes.

// console.time();
// console.timeEnd();

//-- console.group helps to organize your console.log of functions

// console.log("Hello world!");
// console.group("test");
// console.log("Hello again, this time inside a group!");
// console.groupEnd();
// console.log("Not in a group anymore");

// function showA() {
//   console.log();
// }
