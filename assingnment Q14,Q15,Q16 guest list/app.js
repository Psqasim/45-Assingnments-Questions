//q14
//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
let GuestList = ["TAYAAB AZIZ", "ABDUL QAYYUM", "IMTAIZ ALI", "HASEEB"];
let i = 0;
while (i < GuestList.length) {
    console.log(`Dear ${GuestList[i]},\n\nYou are cordially invited to dinner. It would be an honor to have your presence.\nSincerely,[M.QASIM]\n`);
    i++;
}
console.log(`---------------Q14 End-----------------------------`);
// q15
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
//  Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
//  Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
//  Print a second set of invitation messages, one for each person who is still in your list.
let GuestLists = ["TAYAAB AZIZ", "ABDUL QAYYUM", "IMTAIZ ALI", "HASEEB"];
let q = 0;
while (q < GuestList.length) {
    console.log(`Dear ${GuestLists[q]},\n\nYou are cordially invited to dinner. It would be an honor to have your presence.\nSincerely,[M.QASIM]\n`);
    q++;
}
console.log(`${GuestLists[3]},IS NOT COMING DUE TO BANK JOB`);
GuestLists[3] = "BATMAN";
console.log(`\n UPDATE LIST OF INVITATION \n`);
let t = 0;
while (t < GuestList.length) {
    console.log(`Dear ${GuestLists[t]},\n\nYou are cordially invited to dinner. It would be an honor to have your presence.\nSincerely,[M.QASIM]\n`);
    t++;
}
console.log(`------------------Q15 end--------------------`);
//q16
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
console.log(`\n UPDATE LIST OF INVITATION \n`);
let p = 0;
while (p < GuestList.length) {
    console.log(`Dear ${GuestLists[p]},\n\nYou are cordially invited to dinner. It would be an honor to have your presence.\nSincerely,[M.QASIM]\n`);
    p++;
}
console.log(`HOORAH,WE GOT BIG PARTY HALL, SO NEW GUESTS ARE:\n`);
GuestLists.unshift("AREEBA"); // for use add in begining elment
GuestLists.splice(2, 0, "FATIMA"); // add in mid ,0 for not remove last element
GuestLists.push("MAIRA"); // add last more element
let J = 0;
while (J < GuestLists.length) {
    console.log(`Dear ${GuestLists[J]},\n\nYou are cordially invited to dinner. It would be an honor to have your presence.\nSincerely,[M.QASIM]\n`);
    J++;
}
console.log(`-------------------Q16 End------------------------------`);
export {};
