export const instructionsText = ` 
** Gesture code editing challenge **

------------------------------------

Hello 👋, this is a short coding challenge similar to vim golf - but using a gestural interface. This editor is intended for mobile use.
 
Begin by scrolling down 👇 using the gesture pad.

------------------------------------
 
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
    - cut
 
--------------

# Challenge 🎯

You will need to edit the text labelled START to match the END text.

Restart the challenge by pressing: 🔄
And once your code is correct press: ✔️
Great! Press the ▶️ button in the header to get started.

--------------`;

export const initialCodeText = `# Delete the commented lines and rearrange the string variables

** END 🏁 **
----------------------

const strOne = "lines"
const strTwo = "of"
const strThree = "code"

----------------------

** START ✏️ (to edit) **
------------------------

// this is a commented line
// this is another commented line
const strThree = "code"
// and this one
const strOne = "lines"
// aaaannnd this one!
const strTwo = "of"

------------------------`;

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
export const finalCodeState = `# Delete the commented lines and rearrange the string variables

** END 🏁 **
----------------------

const strOne = "lines"
const strTwo = "of"
const strThree = "code"

----------------------

** START ✏️ (to edit) **
------------------------

const strOne = "lines"
const strTwo = "of"
const strThree = "code"

------------------------`;

export const taskCompleteCodeText = `
** Great stuff! Challenge completed 🥳 **
----------------------------------

This is a project I was working on at the Recurse Center. It would be really helpful to get your thoughts and ask you some questions!

Hit the 📧 button above to send me an email or you can message me on zulip @Marko Rodic



Thank you!`;
