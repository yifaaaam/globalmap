const scrollContainer = document.getElementById("shell");
const nav = document.getElementById("nav");

scrollContainer.addEventListener("scroll", function () {
    if (scrollContainer.scrollTop > 20) {
        nav.classList.add("sticky");
    } else {
        nav.classList.remove("sticky");
    }
});