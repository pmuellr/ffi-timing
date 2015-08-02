ffi-timing
================================================================================

Code to test the overhead in time of the node
[`ffi` package](https://www.npmjs.com/package/ffi).

The code here builds a shared library that does nothing, then calls it from
a node application and times it with a high-resolution timer, printing
the results.


instructions
--------------------------------------------------------------------------------

* clone this repo onto your machine
* cd into this repo's working directory
* run `npm install` to install pre-requisites
* run `make mac` or `make linux` (as appropriate) to build shared library
* run `node test-ffi-timing` to run the timing tests
