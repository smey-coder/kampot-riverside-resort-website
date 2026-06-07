// TOGGLE DARK MODE
function toggleDarkMode(){

    document.body.classList.toggle("dark-theme");

    // CHANGE ICON
    const icon = document.getElementById("darkIcon");

    if(document.body.classList.contains("dark-theme")){
        icon.src = "assets/icons/sunrise.png";
    }else{
        icon.src = "assets/icons/moon.png";
    }

    // SAVE MODE
    localStorage.setItem(
        "theme",
        document.body.classList.contains("dark-theme")
        ? "dark"
        : "light"
    );
}

// LOAD SAVED THEME
window.onload = function(){

    const savedTheme = localStorage.getItem("theme");

    const icon = document.getElementById("darkIcon");

    if(savedTheme === "dark"){

        document.body.classList.add("dark-theme");

        icon.src = "assets/icons/sun.png";
    }
}
function toggleMenu() {
    document.getElementById("navMenu").classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("loaded");
});
// PAGE TRANSITION
document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function(e) {
        const href = this.getAttribute("href");

        if (href && !href.startsWith("#")) {
            e.preventDefault();

            document.body.classList.remove("loaded");

            setTimeout(() => {
                window.location.href = href;
            }, 300);
        }
    });
});
// LOADER
document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function(e) {

        const href = this.getAttribute("href");

        if(href && !href.startsWith("#")){
            e.preventDefault();

            document.getElementById("loader").style.display = "flex";

            setTimeout(() => {
                window.location.href = href;
            }, 500);
        }
    });
});