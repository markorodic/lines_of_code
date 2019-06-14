export const instructionsText = ` 
 
** Gesture code editing challenge **

------------------------------------

Hello 👋, this is a short coding challenge similar to vim golf - but using a gestural interface. Please use on mobile.
 
Begin by scrolling down 👇 using the gesture pad.

-----------------
 
# INSTRUCTIONS 📝
 
## Motions

Move up a line:
    - swipe up or left
    
Move down a line:
    - swipe down or right

## Operations

Perform an operation on a line by entering a valid pattern and then releasing your finger to execute it.

Valid gestures are displayed in the header when you begin moving. They are:
    - delete
    - copy
    - paste
 
--------------

# Challenge 🎯
 
Edit the start text to match the text labelled end.

Only edit the code between the the two lines.

Restart the challenge by pressing: 🔄
Once your code is correct press: ✔️

Great! Press the play button in the header to get started.

--------------`;

export const initialCodeText = `
** RESULT **

----------------------

const strOne = "lines"
const strTwo = "of"
const strThree = "code"

----------------------

** START (to edit) **

----------------------

// delete all the commented lines
const strOne = "lines"
const strTwo = "of"
const strThree = "code"

----------------------`;

// export const initialCodeText = `
// ** RESULT **

// ----------------------

// const strOne = "lines"
// const strTwo = "of"
// const strThree = "code"

// ----------------------

// ** START (to edit) **

// ----------------------

// const strOne = "lines"
// const strTwo = "of"
// const strThree = "code"

// ----------------------`;

export const finalCodeState = `
** RESULT **

----------------------

const strOne = "lines"
const strTwo = "of"
const strThree = "code"

----------------------

** START (to edit) **

----------------------

const strOne = "lines"
const strTwo = "of"
const strThree = "code"

----------------------`;

export const taskCompleteCodeText = `
** You've completed the task 🥳 **
----------------------------------

This is a project I was working on at the Recurse Center. It would be really helpful if you could answer a few questions, just hit the 📧 button above.

You can also message me on zulip @Marko Rodic.

Thank you!`;
