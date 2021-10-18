const navigation = {
  element: document.querySelector(".navigation"),
  height: document.querySelector(".navigation").offsetHeight,
  width: document.querySelector(".navigation").offsetWidth,
};

const navScrolled = () =>
  document.body.scrollTop > navigation.height / 3 ||
  document.documentElement.scrollTop > navigation.height / 3
    ? navigation.element.classList.add("scrolled")
    : navigation.element.classList.remove("scrolled");

window.onscroll = () => navScrolled();
