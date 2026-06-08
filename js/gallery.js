const allGallerys = document.getElementById('all-gallarys');
const allRooms = document.getElementById('all-rooms');
const allPhotosBtn = document.getElementById('allPhotosBtn');
const allRoomsBtn = document.getElementById('allRoomsBtn');

allPhotosBtn.addEventListener('click', function() {
    allGallerys.style.display = 'block';
    allRooms.style.display = 'none';
    allPhotosBtn.style.backgroundColor = '#32E875';
    allPhotosBtn.style.color = '#fff';
    allRoomsBtn.style.backgroundColor = '#fff';
    allRoomsBtn.style.color = '#000';
});
allRoomsBtn.addEventListener('click', function() {
    allGallerys.style.display = 'none';
    allRooms.style.display = 'block';
    allRoomsBtn.style.backgroundColor = '#32E875';
    allRoomsBtn.style.color = '#fff';
    allPhotosBtn.style.backgroundColor = '#fff';
    allPhotosBtn.style.color = '#000';
});
