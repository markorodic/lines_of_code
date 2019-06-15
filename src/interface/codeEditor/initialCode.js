export const instructionsText = ` 
** Gesture code editing challenge **
 
------------------------------------
 
Hello 👋, this is a short coding challenge similar to vim golf - but using a gestural interface. This editor is intended for mobile use.
 
The editor is comprised of a code view and a gesture pad. Begin by scrolling down 👇 using the gesture pad.
 
------------------------------------
 
# INSTRUCTIONS 📝
 
## Motions
 
Move up a line:
    - swipe up or left
 
Move down a line:
    - swipe down or right
 
## Operations
 
Operations are performed on entire lines and will only be executed when you release your finger.
 
Valid gestures are displayed in the header when you begin moving. They are:
- delete
- copy
- paste
- cut
 
Try moving around the gesture pad to get a feel for how the cursor moves.

Once you've got that, create a gesture but don't let go. When a gesture is matched, the line will be highlighted in the code and then drawn in the gesture pad.
 
--------------
 
# Challenge 🎯
 
You will need to edit the text labeled START to match the END text. This is a timed challenge ⏳, so try and complete it as quickly as you can.
 
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
