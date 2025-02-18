// Highlight the active page in the navigation menu
document.addEventListener("DOMContentLoaded", function () {
    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.style.color = "red"; // Highlight active page
            link.style.fontWeight = "bold";
        }
    });
});

// Array of fun facts (only one has an image)
const funFacts = [
    "Andrew Johnson was the only U.S. president who never attended school. His wife, Eliza, helped him learn to read and write.",
    "Johnson started his career as a tailor and even made his own suits while in office.",
    "He was the first U.S. president to be impeached, but he survived removal by just one vote.",
    "Andrew Johnson was the only Southern senator to remain loyal to the Union during the Civil War.",
    "He delivered an inaugural speech while drunk at his vice-presidential inauguration.",
    "He didn't have a middle name",
    "Johnson’s impeachment was largely due to his firing of Secretary of War Edwin Stanton.",
     "He opposed the Fourteenth Amendment, which granted citizenship to formerly enslaved people.",
    "Johnson vetoed the Civil Rights Act of 1866, but Congress overrode his veto—the first time in U.S. history that happened.",
    "He refused to attend the inauguration of his successor, Ulysses S. Grant.",
    "Andrew Johnson granted amnesty to thousands of former Confederates.",
    "Johnson's Reconstruction policies were widely criticized for being too lenient on the South.",
    "Johnson never went to the moon",
    "He was the last U.S. president to personally own enslaved people before the Civil War.",
    "Johnson’s tailor shop in Tennessee is now a national historic site.",
    "he never saw a washing machine",
    "He never saw Santa Claus",
    "He returned to the U.S. Senate after his presidency, the only former president to do so.",
    "Johnson argued that his impeachment was unconstitutional and refused to acknowledge Congress’s authority.",
    "He was born into poverty in a log cabin in North Carolina and worked his way up through politics.",
    "he outlived Genghis Khan",
    "Johnson’s policies led to the rise of restrictive 'Black Codes' in the South after the Civil War.",
    "Despite his failures as president, he still had loyal supporters in the South.",
    "this guy never got to see the Titanic with Leonardo Dicaprio that was a pretty good movie",
    "He once proposed a national referendum on Reconstruction, but Congress ignored it.",
    "He was a racist.",
    "Johnson was buried with a copy of the U.S. Constitution wrapped around his body as a final statement of his beliefs.",
    "HAHA, Johnson",
    "He didn't get to play golf with James Carmichael",
    {
        text: "Johnson was buried with a copy of the U.S. Constitution wrapped around his body as a final statement of his beliefs.",
        image: "images/mole rat.webp"
    }
];

// Function to display a random fact
document.addEventListener("DOMContentLoaded", function () {
    const mainContent = document.querySelector("main");

    const button = document.createElement("button");
    button.textContent = "Click for a Fun Fact";
    button.style.display = "block";
    button.style.margin = "20px auto";
    button.style.padding = "10px";

    const factDisplay = document.createElement("p");
    factDisplay.style.textAlign = "center";
    factDisplay.style.fontWeight = "bold";

    const factImage = document.createElement("img");
    factImage.style.display = "none"; // Hide image by default
    factImage.style.margin = "10px auto";
    factImage.style.maxWidth = "100%";
    factImage.style.height = "auto";
    factImage.style.borderRadius = "10px";
    factImage.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";

    button.addEventListener("click", function () {
        const randomIndex = Math.floor(Math.random() * funFacts.length);
        const selectedFact = funFacts[randomIndex];

        if (typeof selectedFact === "object") {
            // If the fact includes an image
            factDisplay.textContent = selectedFact.text;
            factImage.src = selectedFact.image;
            factImage.alt = "";
            factImage.style.display = "block";
        } else {
            // If it's just a text fact
            factDisplay.textContent = selectedFact;
            factImage.style.display = "none";
        }
    });

    mainContent.appendChild(button);
    mainContent.appendChild(factDisplay);
    mainContent.appendChild(factImage);
});
