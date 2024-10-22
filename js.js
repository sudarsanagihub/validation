document.getElementById("attach-link").addEventListener("click", function(e) {
    e.preventDefault();  // Prevent the default behavior of the anchor link
    document.getElementById("file-upload").click();  // Trigger the hidden file input click
});
function toggleDiscrepancy() {
    var content = document.getElementById("discrepancyContent");
    var button = document.querySelector(".dropdown-button");
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block"; // Show the table
        button.classList.add("active"); // Change arrow to up
    } else {
        content.style.display = "none"; // Hide the table
        button.classList.remove("active"); // Change arrow to down
    }
}