// # LEARN YOU THE NODE.JS FOR MUCH WIN!

//  ## JUGGLING ASYNC (Exercise 9 of 13)

//   Create a file named juggling-async.js.

//   This problem is the same as the previous problem (HTTP COLLECT) in that
//   you need to use http.get(). However, this time you will be provided with
//   three URLs as the first three command-line arguments.

//   You must collect the complete content provided to you by each of the URLs
//   and print it to the console (stdout). You don't need to print out the
//   length, just the data as a String; one line per URL. The catch is that you
//   must print them out in the same order as the URLs are provided to you as
//   command-line arguments.

//  ─────────────────────────────────────────────────────────────────────────────

//  ## HINTS

//   Don't expect these three servers to play nicely! They are not going to
//   give you complete responses in the order you hope, so you can't naively
//   just print the output as you get it because they will be out of order.

//   You will need to queue the results and keep track of how many of the URLs
//   have returned their entire contents. Only once you have them all, you can
//   print the data to the console.

//   Counting callbacks is one of the fundamental ways of managing async in
//   Node. Rather than doing it manually, you may find it more convenient to
//   rely on [`async`](https://www.npmjs.com/package/async) or
//   [`run-parallel`](https://www.npmjs.com/package/run-parallel). But for this
//   exercise, do it without that.

//   Check to see if your program is correct by running this command:

//      $ learnyounode verify juggling-async.js

var http = require("http");
var bl = require("bl");
var fs = require("fs");
http.get(process.argv[2], (response) => {
  response.pipe(myBl);
  response.on("end", (err, data) => {
    if (err) return console.error(err);
    myBl.end();
  });
});

http.get(process.argv[3], (response) => {
  response.pipe(myB2);
  response.on("end", (err, data) => {
    if (err) return console.error(err);
    myB2.end();
  });
});

http.get(process.argv[4], (response) => {
  response.pipe(myB3);
  response.on("end", (err, data) => {
    if (err) return console.error(err);
    myB3.end();
  });
});

const myBl = bl((err, data) => {
  if (err) return console.error(err);
  console.log(data.toString());
});

const myB2 = bl((err, data) => {
  if (err) return console.error(err);
  console.log(data.toString());
});

const myB3 = bl((err, data) => {
  if (err) return console.error(err);
  console.log(data.toString());
});
