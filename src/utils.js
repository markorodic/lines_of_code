export function setViewHeightProperty() {
  let viewHeightUnit = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${viewHeightUnit}px`);
}

export function preventRefreshOnMobile() {
  document.addEventListener(
    "touchmove",
    (event) => {
      event.preventDefault();
    },
    { passive: false },
  );
}
