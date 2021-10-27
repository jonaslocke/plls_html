const carouselMain = document.querySelector("#carousel-main");
const caroselIndicators = document.querySelector(
  "#carousel-main .carousel-indicators"
);
const carouselItems = document.querySelectorAll(
  "#carousel-main .carousel-item"
);

const carouselSlider = ({ active = false, target, id }) => {
  const button = document.createElement("button");
  button.type = "button";
  button.setAttribute("data-bs-target", `#${target}`);
  button.setAttribute("data-bs-slide-to", id);
  button.classList.add("slide-controller");
  if (active) {
    button.classList.add("active");
    button.ariaCurrent = true;
  }
  button.ariaLabel = `Slide ${id + 1}`;
  return button;
};

carouselItems.forEach((slide, id) =>
  caroselIndicators.append(
    carouselSlider({ active: id == 0, target: "carousel-main", id })
  )
);

const slider = tns({
  container: ".carousel-favorites",
  items: 3,
  slideBy: "page",
  autoplay: false,
  controls: false,
  autoplayButtonOutput: false,
  navPosition: "bottom",
});
