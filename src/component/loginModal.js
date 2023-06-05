export function loginModalHandler(ev, element) {
  const loginModal = element.current;

  for (let className of loginModal.classList) {
    if (className === "flex") {
      loginModal.classList.remove("flex");
      loginModal.classList.add("hidden");
    } else {
      loginModal.classList.remove("hidden");
      loginModal.classList.add("flex");
    }
  }
}
