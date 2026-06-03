function openActivityModal() {
    document.getElementById("activityModal").style.display = "flex";
}

function closeActivityModal() {
    document.getElementById("activityModal").style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById("activityModal");

    if (event.target === modal) {
        closeActivityModal();
    }
};