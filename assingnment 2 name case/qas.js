// for lower case//
var marvel = "batman superman";
console.log("lower case=", marvel.toLowerCase());
// for upper case
console.log("uper case=", marvel.toUpperCase());
// for title case
console.log("title case=", marvel.replace(/\b\w/g, function (c) { return c.toUpperCase(); }));
