// load packages
var ffi    = require("ffi")
var printf = require("printf")

// load function from shared library
var lib = ffi.Library("./ffi-timing", {
  "nuttin": [ "int", [ "int" ] ]
})

// figure out how many tests to run
var count

if (process.argv.length < 3) {
  count = 10
}
else {
  count = parseInt(process.argv[2], 10)
  if (isNaN(count)) {
    console.log("argument must be numeric")
  }
}

// run tests
for (var i=0; i<count; i++) {
  var stats = oneRun()
}

//------------------------------------------------------------------------------
// run one tests
//------------------------------------------------------------------------------
function oneRun() {
  // call our ffi function this many times
  var count = 1000

  // start high resolution timer
  var time = process.hrtime()

  // call the ffi function
  for (var i=0; i<count; i++) {
    lib.nuttin(count)
  }

  // stop high resolution timer, get elapsed time
  time = process.hrtime(time)

  // convert the time to milliseconds
  var timeAll = (time[0] * 1000) + (time[1] / 1000000)

  // calculate average of ffi call time
  var timeOne = timeAll / count

  // print it
  console.log(printf("%7.4f ms per call", timeOne))
  return [count, time]
}
