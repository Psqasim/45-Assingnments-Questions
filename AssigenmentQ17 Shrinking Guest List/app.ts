// Q17
//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

let GuestList : string[] =["TAYYAB AZIZ","ABDUL QAYYUM","IMTAIZ ALI","HASEEB"]

console.log(`HOORAH,WE GOT BIG PARTY HALL, SO NEW GUESTS ARE:\n`);

GuestList.unshift("haji"); // for use add in begining elment
GuestList.splice(2,0,"FATIMA");// add in mid ,0 for not remove last element
GuestList.push("MAIRA"); // add last more element


let J=0;

while (J<GuestList.length) {
    console.log(`Dear ${GuestList[J]},\n\nYou are cordially invited to dinner. It would be an honor to have your presence.\nSincerely,[M.QASIM]\n`);
    J++;
    
}
console.log(`WE ARE REALLY APOLOGISES TO YOU BECAUSE,THE DINNER TABLE IS  ONLY FOR TWO PEOPLE \n`);
//for remove 4 elemnt because in array 6 element
while (GuestList.length>2) {
    let soory = GuestList.pop()
    console.log((`I feel so bad that, Sorry for this: ${soory}\nSincerely,[M.QASIM]\n`));
    
}

let a=0;

while (a<GuestList.length) {
    console.log(`Dear ${GuestList[a]},\n\nYou are cordially, STILL invited to dinner. It would be an honor to have your presence.\nSincerely,[M.QASIM]\n`);
    a++;
    
}
//for Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
GuestList.pop()
GuestList.pop()
console.log(GuestList);
