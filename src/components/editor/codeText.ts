export const codeEditorText = ` 
** Gesture code editing challenge **
 
------------------------------------
 
Hello 👋, this is a short coding challenge similar to vim golf - but using a gestural interface. This editor is intended for mobile use.
 
The editor is comprised of a code view and a gesture pad. Begin by scrolling down 👇 using the gesture pad.
 
------------------------------------
 
# INSTRUCTIONS 📝
 
There are two types of gestures: motions and operations.
  
## Motions
 
Move up a line:
    - swipe up or left
 
Move down a line:
    - swipe down or right
 
## Operations
 
Operations are performed on entire lines and will only be executed when you release your finger on mobile and click on desktop.
 
Valid gestures are displayed in the header when you begin moving. They are:
- delete

Try moving around the gesture pad to get a feel for how the cursor moves.

Once you've got that, create an operation gesture. When an operation gesture is matched, the line will be highlighted in the code, drawn in the gesture pad, and executed after a short delay.
 `;
