// import React from "react";
// import { cleanup, fireEvent } from "react-testing-library";
// import GesturePad from "./GesturePad";
// import { renderWithRedux } from "../../testHelpers/TestHelpers";

// afterEach(cleanup);

// test("render loading state followed by products", async () => {
//   const { getByTestId, store } = renderWithRedux(<GesturePad />, {});
//   fireEvent.mouseMove(getByTestId("gesture-pad"));
// });

// describe("GesturePad", () => {
//   it("mouseover", () => {
//     const { getByTestId, store } = renderWithRedux(<GesturePad />, {});
//     fireEvent.mouseMove(getByTestId("gesture-pad"), {
//       clientX: 48,
//       clientY: 102
//     });
//     fireEvent.mouseMove(getByTestId("gesture-pad"), {
//       clientX: 20,
//       clientY: 102
//     });
//     // expect(getByTestId("count")).toHaveTextContent("1");
//   });
// });
