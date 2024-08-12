// Start Work Section
// Add "active" class when clicking on the button
const categoryButtons = document.querySelectorAll(".work .container .work-container .category .category-bar button");

categoryButtons.forEach((categoryButton) => {
    categoryButton.addEventListener("click", () => {
        document.querySelector(".active")?.classList.remove("active");
        categoryButton.classList.add("active")
    });
});

// Arrage items according to the clicked button
// Buttons variables
const allButton = document.querySelector(".work .container .work-container .category .category-bar .all-btn");
const brandingButton = document.querySelector(".work .container .work-container .category .category-bar .branding-btn");
const illustrationButton = document.querySelector(".work .container .work-container .category .category-bar .illustration-btn");
const webButton = document.querySelector(".work .container .work-container .category .category-bar .web-btn");

// Images variable
const allImgs = document.querySelectorAll(".work-box img");

// Remove "hide" class from all images
allButton.addEventListener("click", () => {
    allImgs.forEach((img) => {
        img = document.querySelector(".hide");
        img.classList.remove("hide");
    });
});

// Remove "hide" class from branding images and add it to other images
brandingButton.addEventListener("click", () => {
    allImgs.forEach((img) => {
        img.classList.add("hide");
    });
    allImgs.forEach((img) => {
        if (img.classList.contains("branding")) {
            img.classList.remove("hide");
        }
    });
});

// Remove "hide" class from illustration images and add it to other images
illustrationButton.addEventListener("click", () => {
    allImgs.forEach((img) => {
        img.classList.add("hide");
    });
    allImgs.forEach((img) => {
        if (img.classList.contains("illustration")) {
            img.classList.remove("hide");
        }
    });
});

// Remove "hide" class from web images and add it to other images
webButton.addEventListener("click", () => {
    allImgs.forEach((img) => {
        img.classList.add("hide");
    });
    allImgs.forEach((img) => {
        if (img.classList.contains("web")) {
            img.classList.remove("hide");
        }
    });
});

// Create popup for selected image
allImgs.forEach((img) => {
    img.addEventListener("click", (_e) => {
        // Create overlay element
        let overlay = document.createElement("div");
        overlay.className = "popup-overlay";
        document.body.appendChild(overlay);

        // Craete popup box
        let popupBox = document.createElement("div");
        popupBox.className = "popup-box";
        
        if (img.alt !== null) {
            // Craete Heading
            let imgHeading = document.createElement("h3");
            let imgText = document.createTextNode(img.alt);
            imgHeading.appendChild(imgText);
            popupBox.appendChild(imgHeading);
        }

        // Create image
        let popupImg = document.createElement("img");
        popupImg.src = img.src;
        popupBox.appendChild(popupImg);
        document.body.appendChild(popupBox);

        // Create close button
        let closeBtn = document.createElement("span");
        closeBtn.className = "close-button";
        let closeText = document.createTextNode("X");
        closeBtn.appendChild(closeText);
        popupBox.appendChild(closeBtn);
    });
});

// Close Popup
document.addEventListener("click", function (e) {
    if (e.target.className === "close-button") {
        e.target.parentNode.remove();
        document.querySelector(".popup-overlay").remove();
    }
});

// End Work Section