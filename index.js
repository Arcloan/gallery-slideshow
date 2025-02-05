import jsonUrl from "/data.json?url";

const response = await fetch(jsonUrl);
const paintings = await response.json();

let currSelected = 1;

const container = document.querySelector("main");
container.addEventListener("click", e => {
    if (! e.target.hasAttribute("data-number")) return;
    currSelected = Number(e.target.dataset.number);
    sessionStorage.setItem("current", String(currSelected));
    window.location.href = "./slideshow.html";
})

document.querySelector("a").addEventListener("click", e => sessionStorage.setItem("current", "1"));

export { paintings };