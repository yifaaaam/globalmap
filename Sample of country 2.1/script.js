const scrollContainer = document.getElementById("shell");
const nav = document.getElementById("nav");
const dropdown = document.getElementById("dropdown-content")

scrollContainer.addEventListener("scroll", function () {
    if (scrollContainer.scrollTop > 20) {
        nav.classList.add("sticky");
        dropdown.classList.add("sticky")
    } else {
        nav.classList.remove("sticky");
        dropdown.classList.remove("sticky")
    }
});