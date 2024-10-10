import { data } from "./data";

const grid = document.querySelector(".projects__grid");
const swipe = document.querySelector(".swiper-wrapper");

export function renderProjects() {
  const projects = data.map(item => {
    const html = `
    <div class="projects__item" target="_blank">
      <a href="${item.href}">
        <img src="${item.img}" alt="${item.title}">
      <div class="item__title">${item.title}</div>
      </a>
    </div>
    `
    return html
  }).join("");

  console.log(projects)
  return projects
}

export function renderPet() {
  const petProjects = data.filter(a => a.title !== "sketch").map(item => {
    const html = `
        <div class="pet__projects-item swiper-slide">
            <a href="${item.href}">
              <img src="${item.img}" alt="${item.title}">
              <div class="name">${item.title}</div>
            </a>
          </div>
    `
    return html
  }).join("");
  return petProjects
}

swipe.innerHTML = renderPet()
grid.innerHTML = renderProjects()
