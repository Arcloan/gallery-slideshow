import { paintings} from "./index.js";

let selected = Number(sessionStorage.getItem("current"));

const buttonsContainer = document.querySelector(".buttons");
const imageContainer = document.querySelector(".image");
const dialogImage = document.querySelector("dialog img");
const viewImage = document.querySelector(".viewImage");
const title = document.querySelector(".workTitle");
const authorPic = document.querySelector(".authorPic > img");
const description = document.querySelector(".description");
const work = document.querySelector(".work");
const progress = document.querySelector(".progress");

function updateWork() {
    const selectedWork = paintings[selected - 1];
    const name = selectedWork.name;
    const authorName = selectedWork.artist.name;
    title.querySelector("h2").textContent = name;
    work.querySelector("h2").textContent = name;
    title.querySelector("h3").textContent = authorName;
    work.querySelector("h3").textContent = authorName;
}

function updateAuthorPic() {
    const selectedWork = paintings[selected - 1];
    const url = selectedWork.artist.image.slice(1);
    authorPic.src = url;
}

function updateDescription() {
    const selectedWork = paintings[selected - 1];
    description.querySelector("p:first-child").textContent = selectedWork.year;
    description.querySelector("p:not(:first-child)").textContent = selectedWork.description;
    description.querySelector("a").href = selectedWork.source;
}

function updateImages() {
    const selectedWork = paintings[selected - 1];
    imageContainer.querySelector("source").srcset = import.meta.env.BASE_URL + selectedWork.images.hero.large.slice(1);
    imageContainer.querySelector("img").src = import.meta.env.BASE_URL + selectedWork.images.hero.small.slice(1);
}

function updateDialogImage() {
    const selectedWork = paintings[selected - 1];
    dialogImage.src = import.meta.env.BASE_URL + selectedWork.images.gallery.slice(1);
}

function updateProgress() {
    let currWidth = `${(selected / 15) * 100}%`;
    progress.style.width = currWidth;
}

function next() {
    if (selected == 15) {
        return;
    }
    selected += 1;
    updateButtons();
    updateAuthorPic();
    updateDescription();
    updateImages();
    updateWork();
    updateDialogImage();
    updateProgress();
}

function prev() {
    if (selected == 1) return;
    selected -= 1;
    updateButtons();
    updateAuthorPic();
    updateDescription();
    updateImages();
    updateWork();
    updateDialogImage();
    updateProgress();
}

function updateButtons() {
    if (selected == 15) {
        buttonsContainer.querySelector("svg:not(:first-child)").classList.remove("hover:stroke-darkGrey");
        buttonsContainer.querySelector("svg:not(:first-child)").classList.remove("hover:cursor-pointer");
        buttonsContainer.querySelector("svg:not(:first-child)").classList.add("opacity-30");
        buttonsContainer.querySelector("svg:not(:first-child)").setAttribute("inert", "");
    }
    else {
        buttonsContainer.querySelector("svg:not(:first-child)").classList.add("hover:stroke-darkGrey");
        buttonsContainer.querySelector("svg:not(:first-child)").classList.add("hover:cursor-pointer");
        buttonsContainer.querySelector("svg:not(:first-child)").classList.remove("opacity-30");
        buttonsContainer.querySelector("svg:not(:first-child)").removeAttribute("inert");
    }
    if (selected == 1) {
        buttonsContainer.querySelector("svg:first-child").classList.remove("hover:stroke-darkGrey");
        buttonsContainer.querySelector("svg:first-child").classList.remove("hover:cursor-pointer");
        buttonsContainer.querySelector("svg:first-child").classList.add("opacity-30");
        buttonsContainer.querySelector("svg:first-child").setAttribute("inert", "");
    }
    else {
        buttonsContainer.querySelector("svg:first-child").classList.add("hover:stroke-darkGrey");
        buttonsContainer.querySelector("svg:first-child").classList.add("hover:cursor-pointer");
        buttonsContainer.querySelector("svg:first-child").classList.remove("opacity-30");
        buttonsContainer.querySelector("svg:first-child").removeAttribute("inert");
    }
}

function start() {
    if (selected < 1 || selected > 15) return;
    updateButtons();
    updateAuthorPic();
    updateDescription();
    updateImages();
    updateWork();
    updateDialogImage();
    updateProgress();
}

start();

viewImage.addEventListener("click", e => {document.querySelector("dialog").showModal()});

buttonsContainer.querySelector("svg:first-child").addEventListener("click", e => prev());
buttonsContainer.querySelector("svg:not(:first-child)").addEventListener("click", e => next());