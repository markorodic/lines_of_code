export const instructionsText = ` 
** GESTURAL CODE EDITOR TASK **
 
-------------------------------
 🥳
Read the instructions and then complete the task.
 
# INSTRUCTIONS
 
On your mobile, swipe around the gesture pad below to navigate the document.
    - Left -> Swipe Left
    - Right -> Swipe Right
    - Up -> Swipe Up
    - Down -> Swipe Down
 
Enter a valid gesture to perform actions such as:
    - Delete
    - Copy
    - Paste

Valid gestures are displayed in the header when you begin moving. Once a gesture is matched, both the gesture and line are highlighted Release your finger to execute the action.
 
# TASK
 
Final result should look like the following code:

const strOne = "lines"
const strTwo = "of"
const strThree = "code"

To acheive this:

1. remove all the comments
2. Move the strings to create the following result:
 
-------------------- 

** EDIT THIS CODE **
 
--------------------
 
// delete all commented lines
const strThree = "code"
const strOne = "lines"
// like this one
// and this one two
const strTwo = "of"
// aaaaaannnnnd this one!

--------------------`;

export const initialCodeText = ` 
-------------------- 

** EDIT THIS CODE **
 
--------------------
 
const strOne = "lines"
// commented line
const strTwo = "of"
const strThree = "code"`;

export const finalCodeState = ` 
-------------------- 

** EDIT THIS CODE **
 
--------------------
 
const strOne = "lines"
const strTwo = "of"
const strThree = "code"`;

export const taskCompleteCodeText = `
Great Job!
----------

Thanks for completing the task! We will let you once the Lines editor is ready to ship. In the mean time if you have questions or comments please shoot me an email: mrmarkorodic@gmail.com`;
