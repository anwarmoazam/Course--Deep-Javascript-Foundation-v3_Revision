console.log("Course Deep Javascript Foundation, v3 (Revision)");

// Data Types (Primitive)
// Object like behavior - undefined, string, number, boolean, object, symbol, null, bigint (future)
// Objects = object, function, array

var v;
console.log(typeof v);
v = "1";
console.log(typeof v);
v = 2;
console.log(typeof v);
v = true;
console.log(typeof v);
v = {};
console.log(typeof v);
v = Symbol();
console.log(typeof v);

console.log(typeof doesntExist);

v = null;
console.log(typeof v);

v = function () { };
console.log(typeof v);

v = [1, 2, 3];
console.log(typeof v);

v = 42n;
console.log(typeof v);
// or
v = BigInt(42);
console.log(typeof v);

// undefined vs undeclared

// undefined = its definitely a variable but at the moment it has no value.
// undeclared = its never been created in any scope that we have access to it.
// uninitialized (aka TDZ) = block scope variable which not initialized yet.

// NaN
var myAge = Number("0o46");
console.log("myAge : ", myAge);
var myNextAge = Number("39");
console.log("myNextAge : ", myNextAge)
var myCatsAge = Number("n/a");
console.log("myCatsAge : ", myCatsAge)
console.log(myAge - "my son's age");
console.log(myCatsAge === myCatsAge); //false
console.log(isNaN(myAge)); //false
console.log(isNaN(myCatsAge)); //true
console.log(isNaN("my son's age")); //true
console.log(Number.isNaN(myCatsAge));
console.log(Number.isNaN("my son's age"));

// Negative Zero
var trendRate = -0;
console.log(trendRate === -0);
console.log(trendRate.toString());
console.log(trendRate === 0);
console.log(trendRate < 0);
console.log(trendRate > 0);
console.log(Object.is(trendRate,-0));
console.log(Object.is(trendRate,0));
console.log(Math.sign(-3));
console.log(Math.sign(3));
console.log(Math.sign(-0));
console.log(Math.sign(0));

function formatTrend(trendRate){
    var direction = (trendRate < 0 || Object.is(trendRate,-0)) ? "▼" : "▲";
    return `${direction} ${Math.abs(trendRate)}`;
}

console.log(formatTrend(-3));
console.log(formatTrend(3));
console.log(formatTrend(-0));
console.log(formatTrend(0));

// TODO : define polyfill for `Object.is(..)`



// tests
console.log(Object.is(42,42) === true);
console.log(Object.is("foo","foo") === true);
console.log(Object.is(false,false) === true);
console.log(Object.is(null,null) === true);
console.log(Object.is(undefined,undefined) === true);
console.log(Object.is(NaN,NaN) === true);
console.log(Object.is(-0,-0) === true);
console.log(Object.is(0,0) === true);

console.log(Object.is(-0,0) === false);
console.log(Object.is(0,-0) === false);
console.log(Object.is(0,NaN) === false);
console.log(Object.is(NaN,0) === false);
console.log(Object.is(42,"42") === false);
console.log(Object.is("42",42) === false);
console.log(Object.is("foo","bar") === false);
console.log(Object.is(false,true) === false);
console.log(Object.is(null,undefined) === false);
console.log(Object.is(undefined,null) === false);

