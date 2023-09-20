// TODO: write code here

console.log('app.js bundled');

const popoverButton = document.getElementById("popoverButton");
const popoverContent = document.getElementById("popoverContent");

function showPopover() {
    popoverContent.style.display = "block";
    popoverContent.style.top = `${buttonRect.top}px`;
}

function hidePopover() {
    popoverContent.style.display = "none";
}

popoverButton.addEventListener("click", showPopover);

document.addEventListener("click", function (event) {
    if (event.target !== popoverButton && event.target !== popoverContent) {
        hidePopover();
    }
});

