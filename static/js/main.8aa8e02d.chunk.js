(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e,t,n){e.exports={interface:"Interface_interface__2Aumt","bg-logo":"Interface_bg-logo__FxK98",view:"Interface_view__B3U1k",sidebar:"Interface_sidebar__2qVG5",cavnas:"Interface_cavnas__1h_Xo"}},,,function(e,t,n){e.exports={header:"Header_header__1Zlon",icons:"Header_icons__2FUeU",canvas:"Header_canvas__NRzl0"}},,,,,,function(e,t,n){e.exports=n.p+"static/media/logo.94789afc.svg"},function(e,t,n){e.exports=n.p+"static/media/restart_icon.2dc9d234.svg"},function(e,t,n){e.exports=n.p+"static/media/play_icon.27e32e39.svg"},function(e,t,n){e.exports=n.p+"static/media/finish_icon.57b20b38.svg"},function(e,t,n){e.exports=n.p+"static/media/email_icon.2c2f527a.svg"},,function(e,t,n){e.exports={"gesture-input":"GestureInput_gesture-input__8qE7k"}},function(e,t,n){e.exports={canvas:"GestureView_canvas__3Bip2"}},,,function(e,t,n){e.exports=n(39)},,,,,function(e,t,n){},function(e,t,n){},,,,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(12),i=n.n(o),c=(n(30),n(13)),s=n(14),u=n(24),l=n(23),f=n(8),h=n(6),d=n.n(h),p=n(15),m=n.n(p),g=n(1),y=n(9),v=n.n(y);function x(e){var t=r.a.useState({x:0,y:0,width:0,height:0}),n=Object(g.a)(t,2),a=n[0],o=n[1];return r.a.useEffect(function(){var t=e.current.getBoundingClientRect(),n=t.x,a=t.y,r=t.width,i=t.height;o({x:n,y:a,width:r,height:i})},[e]),a}var w=n(2),b="SET_GESTURE",E="ADD_COMBINATION",T="SET_MODE",S="GESTURE_ACTIVE",R="GESTURE_INACTIVE",C="USER_ACTIVE",O="USER_INACTIVE",k="RESET_CODE_TEXT",A="SET_CODE_STATE";function D(e,t){switch(t.type){case b:return Object(w.a)({},e,{gesture:t.gesture});case E:return Object(w.a)({},e,{combination:t.pattern});case T:return Object(w.a)({},e,{mode:t.mode});case S:return Object(w.a)({},e,{gestureActive:!0});case R:return Object(w.a)({},e,{gestureActive:!1});case C:return Object(w.a)({},e,{userActive:!0});case O:return Object(w.a)({},e,{userActive:!1});case k:return Object(w.a)({},e,{resetCodeText:!e.resetCodeText});case A:return Object(w.a)({},e,{codeState:t.newState});default:throw new Error}}var _=r.a.createContext(),M=r.a.createContext(),L={gesture:{},combination:[],mode:"Inactive",userActive:!1,gestureActive:!1,resetCodeText:!1,codeState:"Instructions"};function I(e){var t=e.children,n=r.a.useReducer(D,L),a=Object(g.a)(n,2),o=a[0],i=a[1];return r.a.createElement(_.Provider,{value:o},r.a.createElement(M.Provider,{value:i},t))}var U=r.a.createContext();function j(e){var t=e.children,n=r.a.useState(0),a=Object(g.a)(n,2),o=a[0],i=a[1];return P(function(){i(function(e){return e+1})}),r.a.createElement(U.Provider,{value:o},t)}var P=function(e){var t=r.a.useRef(e);r.a.useEffect(function(){t.current=e},[e]);var n=function e(){a.current=requestAnimationFrame(e),(0,t.current)()},a=r.a.useRef();r.a.useLayoutEffect(function(){return a.current=requestAnimationFrame(n),function(){return cancelAnimationFrame(a.current)}},[])};function N(){var e=r.a.useContext(_);if(void 0===e)throw new Error("useInterfaceState must be used within a InterfaceProvider");return e}function G(){var e=r.a.useContext(M);if(void 0===e)throw new Error("useInterfaceDispatch must be used within a InterfaceProvider");return{setUserActive:function(){return e({type:C})},setUserInactive:function(){return e({type:O})},setGestureActive:function(){return e({type:S})},setGestureInactive:function(){return e({type:R})},setGesture:function(t){return e({type:b,gesture:t})},setMode:function(t){return e({type:T,mode:t})},addCombination:function(t){return e({type:E,pattern:t})},setResetCodeText:function(t){return e({type:k,newCodeText:t})},setCodeState:function(t){return e({type:A,newState:t})}}}function W(e,t,n,a,r,o){t+=.5,n+=.5;var i=a/6;switch(e.beginPath(),r){case 0:e.moveTo(t+i,n+5*i),e.lineTo(t+5*i,n+5*i),e.lineTo(t+5*i,n+3*i),"delete"===o.name?(e.lineWidth=2,e.fillStyle="#FC5081",e.strokeStyle="#FC5081"):(e.lineWidth=1,e.fillStyle="white",e.strokeStyle="white"),e.stroke(),e.font="lighter 8px Futura",e.fillText("DELETE",t,n+8*i);break;case 1:e.moveTo(t+3*i,n+1*i),e.lineTo(t+1*i,n+1*i),e.lineTo(t+1*i,n+5*i),e.lineTo(t+3*i,n+5*i),"copy"===o.name?(e.lineWidth=2,e.fillStyle="#5CB290",e.strokeStyle="#5CB290"):(e.lineWidth=1,e.fillStyle="white",e.strokeStyle="white"),e.stroke(),e.font="lighter 8px Futura",e.fillText("COPY",t,n+8*i);break;case 2:e.moveTo(t+3*i,n+5*i),e.lineTo(t+3*i,n+1*i),e.lineTo(t+5*i,n+1*i),e.lineTo(t+5*i,n+3*i),"paste"===o.name?(e.lineWidth=2,e.fillStyle="#FEDD32",e.strokeStyle="#FEDD32"):(e.lineWidth=1,e.fillStyle="white",e.strokeStyle="white"),e.stroke(),e.font="lighter 8px Futura",e.fillText("PASTE",t,n+8*i);break;case 3:e.moveTo(t+1*i,n+3*i),e.lineTo(t+1*i,n+5*i),e.lineTo(t+5*i,n+5*i),e.lineTo(t+5*i,n+3*i),"cut"===o.name?(e.lineWidth=2,e.fillStyle="#A56FA3",e.strokeStyle="#A56FA3"):(e.lineWidth=1,e.fillStyle="white",e.strokeStyle="white"),e.stroke(),e.font="lighter 8px Futura",e.fillText("CUT",t,n+8*i);break;default:return}}function F(e,t,n,a){var r=t.width;(function(e,t){e&&e.clearRect(0,0,t,t)}(e,r),a)&&function(e,t,n){var a=t.marginSide,r=t.marginBox,o=t.widthBox,i=0;for(;i<4;){var c=a+i*(o+r),s=a;H(e,c,s,r,o),W(e,c,s,o,i,n),i++}}(e,function(e){var t,n,a;if(e>900)t=10,n=15,a=35;else{var r=function(e){var t=B.sideMargins,n=B.boxMargins,a=B.boxWidth,r=e/function(){var e=B.sideMargins,t=B.boxMargins,n=B.boxWidth;return 2*e+6*t+7*n}();return{sideMargins:t*r,boxMargins:n*r,boxWidth:a*r}}(e),o=r.sideMargins,i=r.boxMargins,c=r.boxWidth;t=o,t=10,n=i,a=c}return{marginSide:t,marginBox:n,widthBox:a}}(r),n)}var B={sideMargins:3,verticleMargins:3,boxMargins:5,boxWidth:13};function H(e,t,n,a,r){!function(e,t,n,a){var r=a/3,o=n,i=0;for(;i<4;)e.fillStyle="#2d2d2d",e.fillRect(t+.5,o+.5,a+.5,1.5),o+=r,i++}(e,t,n,r),function(e,t,n,a){var r=0,o=a/3,i=t;for(;r<4;)e.fillStyle="#2d2d2d",e.fillRect(i+.5,n+.5,1.5,a+.5),i+=o,r++}(e,t,n,r)}var V=n(3),X=n.n(V);X.a.init("9f3a0f00fb59f93316bb8ac8e25d5613");var q={identify:function(e){X.a.identify(e)},alias:function(e){X.a.alias(e)},track:function(e,t){X.a.track(e,t)},time_event:function(e,t){X.a.time_event(e)},people:{set:function(e){X.a.people.set(e)}}},Y=n(16),z=n.n(Y),J=n(17),K=n.n(J),Z=n(18),$=n.n(Z),Q=n(19),ee=n.n(Q),te={one:"Thank you for taking the time to test this app. If you could please answer these questions without referencing back to the editor that would be much more useful.",two:"How familiar are you with Vim?",three:"What did you find challenging about using this editor?",four:"How did you find the navigation?",five:"Is there a way of moving down the document without swiping down?",six:"How did you find using the operation gestures: delete, copy, paste, cut?",seven:"Which operation gestures do these two patterns refer to: |__| and __|",ten:"What was your overall experience using this editor?"};var ne=function(e){var t=e.codeState,n=e.setCodeState,a=e.setResetCodeText,o=e.time,i=e.setTime;switch(t){case"Instructions":return r.a.createElement("button",{onClick:function(){q.track("Start Challenge");var e=(new Date).getTime();i(e),n("Code")}},r.a.createElement("img",{src:K.a,alt:""}));case"Code":return r.a.createElement("button",{onClick:function(){var e=(new Date).getTime()-o,t=Math.floor(e/1e3);q.track("Restart Challenge",{Duration:t}),a()}},r.a.createElement("img",{src:z.a,alt:""}));case"Finished":return r.a.createElement("button",{onClick:function(){var e=(new Date).getTime()-o,t=Math.floor(e/1e3);q.track("End Challenge",{Duration:t}),n("Completed")}},r.a.createElement("img",{src:$.a,alt:""}));case"Completed":return r.a.createElement("button",{onClick:function(){n("Instructions")}},r.a.createElement("a",{href:"mailto:mrmarkorodic@gmail.com?subject=Hey \ud83d\udc4b&body=".concat(te.one,"%0D%0A%0D%0A").concat(te.two,"%20%3A%0D%0A").concat(te.three,"%20%3A%0D%0A").concat(te.four,"%20%3A%0D%0A").concat(te.five,"%20%3A%0D%0A").concat(te.six,"%20%3A%0D%0A").concat(te.seven,"%20%3A%0D%0A").concat(te.ten,"%20%3A")},r.a.createElement("img",{src:ee.a,alt:""})));default:return null}};var ae=function(){var e=r.a.useRef(),t=r.a.useRef(),n=x(e),a=N(),o=a.userActive,i=a.gesture,c=a.codeState,s=G(),u=s.setResetCodeText,l=s.setCodeState,f=function(e,t){var n=e.width,a=e.height,o=r.a.useState(null),i=Object(g.a)(o,2),c=i[0],s=i[1];return r.a.useEffect(function(){var e=t.current;e.width=n,e.height=a,s(e.getContext("2d"))},[n,a,t]),c}(n,t),h=r.a.useState(null),d=Object(g.a)(h,2),p=d[0],m=d[1];return r.a.useEffect(function(){F(f,n,i,o)},[f,n,i,o]),r.a.createElement("header",{className:v.a.header,ref:e},!o&&r.a.createElement("section",null,r.a.createElement(ne,{codeState:c,setCodeState:l,setResetCodeText:u,time:p,setTime:m}),r.a.createElement("p",null,"Lines")),r.a.createElement("canvas",{id:v.a.canvas,ref:t}))};function re(e,t){e.setCursor({line:t,ch:0})}function oe(e){var t=e.getCursor().line+1;e.state.curLineNum!==t&&(e.state.curLineNum=t,e.setOption("lineNumberFormatter",function(e){return e===t?t:Math.abs(t-e)}))}function ie(e,t){var n=t.lineNumber;e.clearGutter("position"),e.setGutterMarker(n,"position",function(){var e=document.createElement("div");return e.innerHTML="\u25cf",e.classList.add("position-gutter-marker"),e}())}function ce(e,t,n,a,r){e&&(se(e),function(e,t,n){se(e);var a=e.getCursor().line,r=e.getCursor().ch;("Motion"===t||(t=!n))&&e.markText({line:a,ch:r},{line:a,ch:r+1},{readOnly:!0,className:"cursor"})}(e,t,r),function(e,t,n,a){var r=t.lineNumber,o=n.name;if(a&&e.getLine(r)){var i=e.getLine(r).length;e.markText({line:r,ch:0},{line:r,ch:i},{readOnly:!1,className:"cursor-".concat(o)})}}(e,n,a,r))}function se(e){e.getAllMarks()[0]&&e.getAllMarks()[0].clear()}n(31),n(32),n(33),n(34),n(35),n(36);var ue=n(20),le=" \n** Gesture code editing challenge **\n \n------------------------------------\n \nHello \ud83d\udc4b, this is a short coding challenge similar to vim golf - but using a gestural interface. This editor is intended for mobile use.\n \nThe editor is comprised of a code view and a gesture pad. Begin by scrolling down \ud83d\udc47 using the gesture pad.\n \n------------------------------------\n \n# INSTRUCTIONS \ud83d\udcdd\n \nThere are two types of gestures: motions and operations.\n  \n## Motions\n \nMove up a line:\n    - swipe up or left\n \nMove down a line:\n    - swipe down or right\n \n## Operations\n \nOperations are performed on entire lines and will only be executed when you release your finger on mobile and click on desktop.\n \nValid gestures are displayed in the header when you begin moving. They are:\n- delete\n- copy\n- paste\n- cut\n \nTry moving around the gesture pad to get a feel for how the cursor moves.\n\nOnce you've got that, create an operation gesture but don't let go. When an operation gesture is matched, the line will be highlighted in the code and drawn in the gesture pad. Now let go and the operation will be executed.\n \n--------------\n \n# Challenge \ud83c\udfaf\n \nYou will need to edit the text labeled START to match the END text. This is a timed challenge \u23f3, so try and complete it as quickly as you can.\n \nRestart the challenge by pressing: \ud83d\udd04\nAnd once your code is correct press: \u2714\ufe0f\nGreat! Press the \u25b6\ufe0f button in the header to get started.\n \n--------------",fe='# Delete the commented lines and rearrange the string variables\n\n** END \ud83c\udfc1 **\n----------------------\n\nconst strOne = "lines"\nconst strTwo = "of"\nconst strThree = "code"\n\n----------------------\n\n** START \u270f\ufe0f (to edit) **\n------------------------\n\n// this is a commented line\n// this is another commented line\nconst strThree = "code"\n// and this one\nconst strOne = "lines"\n// aaaannnd this one!\nconst strTwo = "of"\n\n------------------------',he='# Delete the commented lines and rearrange the string variables\n\n** END \ud83c\udfc1 **\n----------------------\n\nconst strOne = "lines"\nconst strTwo = "of"\nconst strThree = "code"\n\n----------------------\n\n** START \u270f\ufe0f (to edit) **\n------------------------\n\nconst strOne = "lines"\nconst strTwo = "of"\nconst strThree = "code"\n\n------------------------',de="\n** Great stuff! Challenge completed \ud83e\udd73 **\n----------------------------------\n\nThis is a project I was working on at the Recurse Center. It would be really helpful to get your thoughts and ask you some questions!\n\nHit the \ud83d\udce7 button above to send me an email or you can message me on zulip @Marko Rodic\n\n\n\nThank you!";var pe=function(e){var t=e.editor,n=e.setEditor,a=e.codeState,o=e.resetCodeText,i=e.setResetCodeText;return r.a.useEffect(function(){if(t){var e=function(e,t){switch(t){case"Instructions":return le;case"Code":return fe;case"Finished":return de;default:return""}}(0,a);t.setValue(e)}},[t,a]),r.a.useEffect(function(){t&&o&&(t.setValue(fe),i())},[t,o]),r.a.createElement("div",{className:"code"},r.a.createElement(ue.UnControlled,{value:le,options:{lineNumbers:!0,autofocus:!0,lineWrapping:!0,gutters:["CodeMirror-linenumbers","position"]},onChange:function(){},editorDidMount:function(e){n(e)},className:"code-editor"}))};var me=function(){var e=N(),t=e.userActive,n=e.mode,a=e.gestureActive,o=e.resetCodeText,i=e.codeState,c=e.gesture,s=G(),u=s.setResetCodeText,l=s.setCodeState,f=r.a.useState(null),h=Object(g.a)(f,2),d=h[0],p=h[1],m=function(e,t,n,a){var o=r.a.useState({lineNumber:0,characterPosition:0}),i=Object(g.a)(o,2),c=i[0],s=i[1];return r.a.useEffect(function(){e&&e.setCursor({line:0,ch:0})},[e]),r.a.useEffect(function(){if(function(e,t,n){return e&&!t&&("Inactive"===n||"Motion"===n)}(e,t,n)){var a=function(e){return{lineNumber:e.getCursor().line,characterPosition:e.getCursor().ch}}(e),r=a.lineNumber,o=a.characterPosition;s({lineNumber:r,characterPosition:o})}},[e,n,a,t]),c}(d,a,n,c),y=function(e,t,n){var a=r.a.useState(""),o=Object(g.a)(a,2),i=o[0],c=o[1];return r.a.useEffect(function(){if("copy"===t.name||"cut"===t.name){var a=e.getLine(n.lineNumber);c(a)}},[e,t,n]),i}(d,c,m);return r.a.useEffect(function(){!function(e,t){switch(t.name){case"up":e.execCommand("goLineUp");break;case"down":e.execCommand("goLineDown");break;case"previous":e.execCommand("goLineUp");break;case"next":e.execCommand("goLineDown")}}(d,c)},[d,c]),r.a.useEffect(function(){!function(e,t,n,a,r){var o=t.name,i=n.lineNumber;switch(o){case"delete":case"cut":r||(re(e,i),e.execCommand("deleteLine"));break;case"paste":r||(re(e,i),e.execCommand("newlineAndIndent"),re(e,i),e.replaceSelection(a))}}(d,c,m,y,t)},[d,c,m,y,t]),r.a.useEffect(function(){!function(e){e&&e.on("cursorActivity",oe)}(d)},[d]),r.a.useEffect(function(){!function(e,t){e&&ie(e,t)}(d,m)},[d,m]),r.a.useEffect(function(){ce(d,n,m,c,t)},[d,m,c,n,t]),r.a.useEffect(function(){d&&d.getValue()===he&&"Code"===i&&l("Finished")},[d,c,i]),r.a.createElement("div",{className:"code"},r.a.createElement(pe,{setEditor:p,editor:d,codeState:i,resetCodeText:o,setResetCodeText:u}))},ge=n(5),ye=n(21),ve=n.n(ye),xe={X:9,Y:9},we=200,be=6,Ee=n(4),Te=n.n(Ee);function Se(e,t){return{position:e,timeAdded:t,expired:!1}}function Re(e,t){return function(e,t,n){var a=Math.floor(e.x/t)+1,r=Math.floor(e.y/n)+1;return{x:a,y:r}}(function(e,t,n){var a=e.x-t,r=e.y-n;return{x:a,y:r}}(function(e){var t;"mousemove"===e.type&&(t={x:e.clientX,y:e.clientY});"touchmove"===e.type&&(t={x:e.changedTouches[0].clientX,y:e.changedTouches[0].clientY});return t}(e),t.x,t.y),t.width/xe.X,t.height/xe.Y)}var Ce=n(22),Oe=n.n(Ce);function ke(e,t,n,a){if(t.x){var r=(t.x-1)*n,o=(t.y-1)*n;e.fillStyle="Insert"===a?"white":"black",e.fillRect(r,o,n,n)}}function Ae(e){var t=e.position,n=e.expiringPositions,a=e.count,o=e.containerWidth,i=e.lastMatchedGesture;r.a.useEffect(function(){});var c=r.a.useRef(),s=function(e,t){var n=r.a.useState(null),a=Object(g.a)(n,2),o=a[0],i=a[1];return r.a.useEffect(function(){var n=t.current;n.width=n.height=e,i(n.getContext("2d"))},[e,t]),o}(o,c),u=N(),l=u.gestureActive,f=u.mode;return r.a.useEffect(function(){if(s){var e=o/xe.X;!function(e,t){e.clearRect(0,0,t,t)}(s,o),function(e,t,n){"Insert"===n&&(e.fillStyle="rgba(0,0,0,1)",e.fillRect(0,0,t,t))}(s,o,f),function(e,t,n,a){e.fillStyle="Insert"===a?"#1e1e1e":"#f7f7f7";for(var r=0;xe.X>r;){var o=r*n,i=0*n;e.fillRect(o,i,.5,t),r+=1}for(r=0;xe.X>r;){var c=0*n,s=r*n;e.fillRect(c,s,t,.5),r+=1}}(s,o,e,f),function(e,t,n){var a,r;for(e.fillStyle="Insert"===n?"#545454":"#a3a3a3",r=1;xe.Y>r;){for(a=1;xe.X>a;){var o=a*t,i=r*t;e.fillRect(o-.5,i-.5,1,1),a++}r++}}(s,e,f),function(e,t,n,a,r){if(t.x&&a){var o,i,c=[];o=(t.x-1)*n-n,i=(t.y-1)*n,c.push({x:o,y:i}),o=(t.x-1)*n-n,i=(t.y-1)*n+n,c.push({x:o,y:i}),o=(t.x-1)*n,i=(t.y-1)*n-n,c.push({x:o,y:i}),o=(t.x-1)*n+n,i=(t.y-1)*n-n,c.push({x:o,y:i}),o=(t.x-1)*n+2*n,i=(t.y-1)*n,c.push({x:o,y:i}),o=(t.x-1)*n+2*n,i=(t.y-1)*n+n,c.push({x:o,y:i}),o=(t.x-1)*n,i=(t.y-1)*n+2*n,c.push({x:o,y:i}),o=(t.x-1)*n+n,i=(t.y-1)*n+2*n,c.push({x:o,y:i}),c.forEach(function(t){e.fillStyle="Insert"===r?"#707070":"#969696",e.fillRect(t.x-1,t.y-1,2,2)})}}(s,t,e,l,f),ke(s,t,e,f),function(e,t,n,a){"Operator"===a&&n.pattern.forEach(function(a,r){var o=n.path[r-1],i=n.path[r],c=(n.path[r+1],n.path.length);ke(e,a,t),function(e,t,n,a,r,o,i,c){var s,u,l;if(u=[c/2,c/2],s=n?function(e,t){switch(e){case"Up":return[t/2,t];case"Right":return[0,t/2];case"Down":return[t/2,0];case"Left":return[t,t/2];default:return}}(n,c):u,l=a?function(e,t){switch(e){case"Up":return[t/2,0];case"Right":return[t,t/2];case"Down":return[t/2,t];case"Left":return[0,t/2];default:return}}(a,c):u,e.beginPath(),e.moveTo((t.x-1)*c+s[0],(t.y-1)*c+s[1]),e.lineTo((t.x-1)*c+u[0],(t.y-1)*c+u[1]),e.lineTo((t.x-1)*c+l[0],(t.y-1)*c+l[1]),e.lineWidth=2,e.strokeStyle="white",e.stroke(),function(e,t){return e===t}(o,i)){var f=(t.x-1)*c+l[0],h=(t.y-1)*c+l[1];e.fillStyle="white",e.fillRect(f-2,h-2,4,4)}}(e,a,o,i,0,r,c,t)})}(s,e,i,f),function(e,t,n,a,r){"Insert"===r?n.forEach(function(n){var r=a-n.timeAdded;if(r<10){var o=1-r/20;e.fillStyle="rgba(255, 255, 255, ".concat(o,")")}else e.fillStyle="rgba(255,255,255,0)";var i=(n.position.x-1)*t,c=(n.position.y-1)*t;e.fillRect(i,c,t,t)}):n.length&&n.forEach(function(n){var r=a-n.timeAdded;if(r<10){var o=1-r/20;e.fillStyle="rgba(0, 0, 0, ".concat(o,")")}else e.fillStyle="rgba(0,0,0,0)";var i=(n.position.x-1)*t,c=(n.position.y-1)*t;e.fillRect(i,c,t,t)})}(s,e,n,a,f)}},[s,a,o,n,t,l,i,f]),r.a.createElement("canvas",{id:Oe.a.canvas,ref:c})}function De(e){var t=e.updateGestureState,n=e.lastMatchedGesture,a=r.a.useRef(),o=x(a),i=r.a.useState({}),c=Object(g.a)(i,2),s=c[0],u=c[1],l=r.a.useState([]),f=Object(g.a)(l,2),h=f[0],d=f[1],p=r.a.useState([]),m=Object(g.a)(p,2),y=m[0],v=m[1],w=r.a.useState(null),b=Object(g.a)(w,2),E=b[0],T=b[1],S=function(){var e=r.a.useContext(U);if(void 0===e)throw new Error("useInterfaceGestureState must be used within a InterfaceProvider");return e}(),R=N(),C=R.userActive,O=R.gestureActive,k=G(),A=k.setUserActive,D=k.setUserInactive,_=k.setGestureActive,M=k.setGestureInactive,L=k.setMode,I=function(e){e.preventDefault();var n=Re(e,o);(function(e,t){return!Te.a.isEqual(e,t)})(s,n)&&(t([s,n]),d([].concat(Object(ge.a)(h),[Se(s,S)])),u(n),v(n)),C||(A(),L("Motion")),O||_(),function(e,t,n){clearTimeout(e),t(setTimeout(function(){n()},we))}(E,T,function(){v([]),M()})},j=function(e){e.preventDefault(),D(),L("Inactive")};return r.a.createElement("section",{ref:a,onMouseMove:I,onMouseLeave:j,onTouchMove:I,onTouchEnd:j,onClick:function(e){e.preventDefault(),C?D():A()},className:ve.a["gesture-input"]},r.a.createElement(Ae,{count:S,position:s,pattern:y,expiringPositions:h,containerWidth:o.width,lastMatchedGesture:n}))}var _e=Object(w.a)({},{edit:{operator:{delete:{id:1,name:"delete",type:"Operation",length:4,path:[["Right","Right","Right","Up"],["Right","Right","Right","Down"],["Left","Left","Left","Up"],["Left","Left","Left","Down"]],normalisedPositions:[{x:3,y:2},{x:2,y:2},{x:1,y:2},{x:1,y:1}]},yank:{id:2,name:"yank",type:"Operation",length:5,path:[["Left","Left","Down","Down","Right"],["Left","Left","Up","Up","Right"],["Right","Right","Down","Down","Left"],["Right","Right","Up","Up","Left"]],normalisedPositions:[{x:3,y:1},{x:2,y:1},{x:2,y:2},{x:2,y:3},{x:3,y:3}]},change:{name:"change",type:"Operation",normalisedPositions:[{x:3,y:1},{x:2,y:1},{x:2,y:2},{x:2,y:3},{x:3,y:3}]},paste:{name:"paste",type:"Operation",normalisedPositions:[{x:3,y:1},{x:2,y:1},{x:2,y:2},{x:2,y:3},{x:3,y:3}]},cut:{name:"cut",type:"Operation",normalisedPositions:[{x:3,y:1},{x:2,y:1},{x:2,y:2},{x:2,y:3},{x:3,y:3}]},names:["change","paste","cut","yank","delete","insert"],all:[{name:"paste",path:["Up","Up","Right","Down"],type:"Operator"},{name:"paste",path:["Up","Up","Left","Down"],type:"Operator"},{name:"cut",path:["Down","Left","Left","Up"],type:"Operator"},{name:"cut",path:["Down","Right","Right","Up"],type:"Operator"},{name:"copy",path:["Left","Down","Down","Right"],type:"Operator"},{name:"copy",path:["Left","Up","Up","Right"],type:"Operator"},{name:"delete",path:["Right","Right","Up"],type:"Operator"},{name:"delete",path:["Left","Left","Up"],type:"Operator"}]},motion:{next:{id:1,name:"next",type:"Motion",length:1,path:"Right",normalisedPositions:[{x:2,y:2},{x:3,y:2}]},previous:{id:2,name:"previous",type:"Motion",length:1,path:"Left",normalisedPositions:[{x:2,y:2},{x:1,y:2}]},up:{id:3,name:"up",type:"Motion",length:1,path:"Up",normalisedPositions:[{x:2,y:3},{x:2,y:2}]},down:{id:4,name:"down",type:"Motion",length:1,path:"Down",normalisedPositions:[{x:2,y:1},{x:2,y:2}]},all:[{id:1,name:"next",type:"Motion",length:1,path:["Right"],normalisedPositions:[{x:2,y:2},{x:3,y:2}]},{id:2,name:"previous",type:"Motion",length:1,path:["Left"],normalisedPositions:[{x:2,y:2},{x:1,y:2}]},{id:3,name:"up",type:"Motion",length:1,path:["Up"],normalisedPositions:[{x:2,y:3},{x:2,y:2}]},{id:4,name:"down",type:"Motion",length:1,path:["Down"],normalisedPositions:[{x:2,y:1},{x:2,y:2}]}]},object:[{name:"Comment",type:"Object",length:6,path:["Down","Down","Down","Right","Up","Up"],normalisedPositions:[{x:1,y:3},{x:1,y:2},{x:1,y:3},{x:2,y:3},{x:2,y:2},{x:2,y:1}]}],allTypes:["operator","motion"],allPaths:[{name:"delete",type:"operator",length:4,path:["Right","Right","Right","Up"]},{name:"delete",type:"operator",length:4,path:["Right","Right","Right","Down"]},{name:"delete",type:"operator",length:4,path:["Left","Left","Left","Up"]},{name:"delete",type:"operator",length:4,path:["Left","Left","Left","Down"]},{name:"next",type:"motion",length:1,path:["Right"]},{name:"previous",type:"motion",length:1,path:["Left"]},{name:"up",type:"motion",length:1,path:["Up"]},{name:"down",type:"motion",length:1,path:["Down"]}]}},[]);function Me(e,t){return e.slice(e.length-t.path.length-1,e.length)}function Le(e,t,n){var a,r=function(e){return function(e){var t=0,n=[];for(;t<e.length-1;){var a=e[t],r=e[t+1];a.y===r.y&&(a.x-r.x===1&&n.push("Left"),a.x-r.x===-1&&n.push("Right")),a.x===r.x&&(a.y-r.y===1&&n.push("Up"),a.y-r.y===-1&&n.push("Down")),t++}return n}(function(e){var t=e.length,n=e;t>be&&(n=e.slice(t-be-1,t));return n}(e))}(e);return t.edit.allTypes.forEach(function(e){a||(a=t.edit[e].all.find(function(e){var t,n,a=(t=r,n=e.path.length,t.slice(t.length-n,t.length));return Te.a.isEqual(a,e.path)}))}),a}var Ie=function(e){var t=e.containerProperties,n=G(),a=n.setGesture,o=n.setMode,i=N(),c=i.userActive,s=(i.mode,i.gesture),u=r.a.useState([]),l=Object(g.a)(u,2),f=l[0],h=l[1],d=r.a.useState([]),p=Object(g.a)(d,2),m=p[0],y=p[1];return r.a.useEffect(function(){(function(e,t){return!t&&!Te.a.isEmpty(e)})(s,c)&&(h([]),a({}))},[c,s]),r.a.createElement(De,{updateGestureState:function(e){var t=function(e,t){return t.length?[].concat(Object(ge.a)(t),[e[1]]):[].concat(Object(ge.a)(t),[e[0],e[1]])}(e,f),n=Le(t,_e);n&&(o(n.type),a(Object(w.a)({},n,{pattern:Me(t,n)})),y(Object(w.a)({},n,{pattern:Me(t,n)}))),h(t)},containerProperties:t,lastMatchedGesture:m})};function Ue(){return r.a.createElement("div",{className:d.a.interface},r.a.createElement("img",{className:d.a["bg-logo"],src:m.a,alt:""}),r.a.createElement(j,null,r.a.createElement(I,null,r.a.createElement(ae,null),r.a.createElement("section",{className:d.a.view},r.a.createElement(me,null),r.a.createElement(Ie,null)))))}n(38);function je(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,a=Object(f.a)(e);if(t){var r=Object(f.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(l.a)(this,n)}}var Pe=function(e){Object(u.a)(n,e);var t=je(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentWillMount",value:function(){!function(){var e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(e,"px"))}(),document.addEventListener("touchmove",function(e){e.preventDefault()},{passive:!1})}},{key:"render",value:function(){return r.a.createElement(Ue,null)}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(Pe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[25,1,2]]]);
//# sourceMappingURL=main.8aa8e02d.chunk.js.map