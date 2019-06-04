import React from "react";

function AST(props) {
  // const [current, setCurrent] = React.useState({
  //   state: "global",
  //   position: 2
  // });

  return <React.Fragment>{props.children}</React.Fragment>;
}

export default AST;

// const initialCode = `
// Task 1 - Delete all comments
// ------------------------------------
// // delete  commented lines
// const arr = ['foo', 'bar', 'baz'] // like this one
// const obj = { one: 1, two: 2, three: 3 }
// // and these...
// // two
// const obj = { one: 1, two: 2, three: 3 }

// Task 2 - Change arrays to strings and
// objects to integers
// ------------------------------------
// const arr = ['foo', 'bar', 'baz']
// const anotherArr = ['foofoo', 'barbar',
// 'bazbaz']
// const obj = { one: 1, two: 2, three: 3 }

// Task 3 - Change arrays to strings and
// objects to integers
// ------------------------------------
// const str = "foo
// const anotherStr = "bar"
// const int = 1

// Final result
// ------------------------------------
// const int = 1
// const str = "foo"
// const anotherStr = "bar"
// `;

// String to AST

// const codeState = {
//   global: [
//     {
//       type: "VariableDeclaration",
//       start: 0,
//       end: 22,
//       id: {
//         type: "const",
//         start: 6,
//         end: 9,
//         name: "arr"
//       },
//       init: {
//         type: "ArrayExpression",
//         start: 15,
//         end: 21,
//         elements: [1, 2, 3]
//       }
//     },
//     {
//       type: "VariableDeclaration",
//       start: 0,
//       end: 22,
//       id: {
//         type: "const",
//         start: 6,
//         end: 9,
//         name: "int"
//       },
//       init: {
//         type: "Literal",
//         start: 15,
//         end: 21,
//         value: 1
//       }
//     }
//   {
//     type: "array",
//     id: "a1"
//   },
//   {
//     type: "object",
//     id: "o1"
//   },
//   4: {
//     type: "comment",
//     id: "c2"
//   },
//   5: {
//     type: "comment",
//     id: "c3"
//   },
//   6: {
//     type: "object",
//     id: "o2"
//   }
//   ]
// };

// AST to String

const arr = [1, 2, 3];

function foo(arr) {
  let count = 0;
  while (count < arr.length) {
    count++;
  }
}

foo(arr);
// // delete  commented lines
// const arr = ['foo', 'bar', 'baz'] // like this one
// const obj = { one: 1, two: 2, three: 3 }
// // and these...
// // two
// const obj = { one: 1, two: 2, three: 3 }
