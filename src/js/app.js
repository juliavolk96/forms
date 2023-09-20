// TODO: write code here

// console.log('app.js bundled');

const popoverButton = document.getElementById("popoverButton");
const popoverContent = document.getElementById("popoverContent");

function showPopover() {
    const buttonRect = popoverButton.getBoundingClientRect();
    popoverContent.style.display = "block";
    popoverContent.style.top = `${buttonRect.top - popoverContent.clientHeight}px`; 
    popoverContent.style.left = `${buttonRect.left}px`; 
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
