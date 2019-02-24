'use_strict';

// calling an inline function
// setTimeout(() => {
// 	console.log("Hello after 4 seconds");
// },
// 1 * 1000
// );

// same example w/o using an inline function
// const func = () => {
// 	console.log("Hello after 4 seconds");
// }

// setTimeout(func, 4 * 1000);


// example 2 - passing an argument from setTimeout to inline function
// const rocks = who => {
// 	console.log(who + ' rocks');
// };

// setTimeout(rocks, 1 * 2000, 'Node.js');


// challenge 1
// const callout = seconds => {
// 	console.log("Hello after " + seconds + " seconds");
// };

// setTimeout(callout, 4 * 1000, 4);

// setTimeout(callout, 8 * 1000, 8);

// setting intervals
// setInterval(() => 
// 	console.log("Hello every 3 seconds"),
// 	3000
// );


// cancelling timer
// const timerId = setTimeout(
// 	() => console.log("You will not see this one"),
// 	0
// );

// clearTimeout(timerId);

// timer delay is not guaranteed
// setTimeout(() => 
// 	console.log("Hello after 0.5 seconds. MAYBE !!!"),
// 	500
// );

// for (let i = 0; i < 1e10; i++) {
// 	// Block things synchronoulsy
// }

// challenge 2

let counter = 0;

const intervalId = setInterval(() => {
	console.log("Hello world");
	counter += 1;

	if (counter === 5) {
		console.log("Done");
		clearInterval(intervalId);
	}
}, 1000);
