import "./style.css";

import { onEntry } from "./scripts/obs";
import { swiper } from "./scripts/swiper";

window.addEventListener("DOMContentLoaded", onEntry)

const theme = document.querySelector(".theme")

theme.addEventListener("click", () => {
  document.body.classList.toggle("dark");
})

