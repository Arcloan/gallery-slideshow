const response = await fetch(import.meta.env.BASE_URL + "/data.json");
const paintings = await response.json();

let currSelected = 1;

const container = document.querySelector("main");
container.addEventListener("click", e => {
    console.log("Here");
    if (! e.target.closest("[data-number]")) return;
    currSelected = Number(e.target.closest("[data-number]").dataset.number);
    sessionStorage.setItem("current", String(currSelected));
    window.location.href = "./slideshow.html";
})

document.querySelector("a").addEventListener("click", e => sessionStorage.setItem("current", "1"));

export { paintings };