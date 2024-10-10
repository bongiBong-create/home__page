import "./style.css";

import { onEntry } from "./scripts/obs";
import { swiper } from "./scripts/swiper";
import { renderProjects } from "./scripts/render";

window.addEventListener("DOMContentLoaded", onEntry)

const theme = document.querySelector(".theme")

theme.addEventListener("click", () => {
  document.body.classList.toggle("dark");
})

