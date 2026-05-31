const modal = document.getElementById("roomModal");
const roomImage = document.getElementById("roomImage");
const imageCounter = document.getElementById("imageCounter");

// OPEN MODAL
function openRoomModal() {
    currentImage = 0;
    showImage();
    modal.style.display = "block";
}

// CLOSE MODAL
function closeRoomModal() {
    modal.style.display = "none";
}

// CLOSE WHEN CLICK OUTSIDE
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

window.addEventListener("DOMContentLoaded", function() {
    if (roomImage && imageCounter) {
        showImage();
    }
});

// IMAGE SLIDER
const images = [
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1200&auto=format&fit=crop"
];

let currentImage = 0;

// SHOW IMAGE
function showImage() {
    document.getElementById("roomImage").src = images[currentImage];

    document.getElementById("imageCounter").innerText =
        (currentImage + 1) + "/" + images.length;
}

// NEXT IMAGE
function nextImage() {
    currentImage = (currentImage + 1) % images.length;
    showImage();
}

// PREVIOUS IMAGE
function prevImage() {
    currentImage = (currentImage - 1 + images.length) % images.length;
    showImage();
}