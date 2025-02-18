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

// Array of 20 best fun facts about Andrew Johnson
const funFacts = [
    "Andrew Johnson was the only U.S. president who never attended school. His wife, Eliza, helped him learn to read and write.",
    "Johnson started his career as a tailor and even made his own suits while in office.",
    "He was the first U.S. president to be impeached, but he survived removal by just one vote.",
    "Andrew Johnson was the only Southern senator to remain loyal to the Union during the Civil War.",
    "He delivered an inaugural speech while drunk at his vice-presidential inauguration.",
    "Johnson’s impeachment was largely due to his firing of Secretary of War Edwin Stanton.",
    "He opposed the Fourteenth Amendment, which granted citizenship to formerly enslaved people.",
    "Johnson vetoed the Civil Rights Act of 1866, but Congress overrode his veto—the first time in U.S. history that happened.",
    "He refused to attend the inauguration of his successor, Ulysses S. Grant.",
    "Andrew Johnson granted amnesty to thousands of former Confederates.",
    "Johnson's Reconstruction policies were widely criticized for being too lenient on the South.",
    "He was the last U.S. president to personally own enslaved people before the Civil War.",
    "Johnson’s tailor shop in Tennessee is now a national historic site.",
    "He returned to the U.S. Senate after his presidency, the only former president to do so.",
    "Johnson argued that his impeachment was unconstitutional and refused to acknowledge Congress’s authority.",
    "He was born into poverty in a log cabin in North Carolina and worked his way up through politics.",
    "Johnson’s policies led to the rise of restrictive 'Black Codes' in the South after the Civil War.",
    "Despite his failures as president, he still had loyal supporters in the South.",
    "He once proposed a national referendum on Reconstruction, but Congress ignored it.",
    "Johnson was buried with a copy of the U.S. Constitution wrapped around his body as a final statement of his beliefs."
];

// Function to display a random fact when button is clicked
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

    button.addEventListener("click", function () {
        const randomIndex = Math.floor(Math.random() * funFacts.length);
        factDisplay.textContent = funFacts[randomIndex];
    });

    mainContent.appendChild(button);
    mainContent.appendChild(factDisplay);
});
