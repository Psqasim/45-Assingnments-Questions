// Q25
//alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.



let alien_color :string= "green"
if(alien_color==="green"){
    console.log(`you  earned 5 points`);   
}
// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
alien_color="red";
if (alien_color==="green") {
    console.log(`you  earned 5 points`);   
}
console.log(`--------------------Q25(End)------------------`);

// // Q26
// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
let alien_colors :string= "green"
if(alien_colors==="green"){
    console.log(`you  earned 5 points`);   
}
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
else{
    console.log(`You earned 10 points`);
    
}
// • Write one version of this program that runs the if block and another that runs the else block.
alien_colors = "red"
if(alien_colors==="green"){
    console.log(`you  earned 5 points`);   
}
else{
    console.log(`You earned 10 points`);
    
}
console.log(`---------------Q26(End)------------`);

// Q27
// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
// • If the alien is green, print a message that the player earned 5 points.
let aliens_colors :string= "green"

if(aliens_colors==="green"){
    console.log(`you  earned 5 points`);   
}
else if (aliens_colors==="yellow") {
    console.log(`You earned 10 points`);
}
else{
    console.log(`You earned 15 points`);
}

// • If the alien is yellow, print a message that the player earned 10 points.
aliens_colors="yellow"
if(aliens_colors==="green"){
    console.log(`you  earned 5 points`);   
}
else if (aliens_colors==="yellow") {
    console.log(`You earned 10 points`);
}
else{
    console.log(`You earned 15 points`);
}
// • If the alien is red, print a message that the player earned 15 points.
aliens_colors="red"
if(aliens_colors==="green"){
    console.log(`you  earned 5 points`);   
}
else if (aliens_colors==="yellow") {
    console.log(`You earned 10 points`);
}
else if (aliens_colors==="red"){
    console.log(`You earned 15 points`);
}

else{
    console.log(`put correct value`);
    
}