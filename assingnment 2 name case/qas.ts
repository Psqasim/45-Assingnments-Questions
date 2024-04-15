// for lower case//
let marvel :string="batman superman"
console.log("lower case=",marvel.toLowerCase());

// for upper case
console.log("uper case=",marvel.toUpperCase());
 
// for title case
console.log("title case=",marvel.replace(/\b\w/g,c=> c.toUpperCase()));



