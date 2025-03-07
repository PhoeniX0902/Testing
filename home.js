// Sample data for search
const titles = [
    "Friends",
    "Money Heist",
    "Breaking Bad",
    "Stranger Things",
    "House"
];

const searchIcon = document.getElementById('search-icon');
const searchInput = document.getElementById('search-input');
const cards = document.querySelectorAll('.card');
const modal = document.getElementById('video-modal');
const videoPlayer = document.getElementById('video-player');
const closeBtn = document.querySelector('.close-btn');

// Toggle search input visibility
searchIcon.addEventListener('click', () => {
    searchInput.classList.toggle('active');
    if (searchInput.classList.contains('active')) {
        searchInput.focus();
    } else {
        // Reset search filter when closing the search bar
        searchInput.value = '';
        filterCards('');
    }
});

// Filter cards based on search input
searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase().trim();
    filterCards(query);
});

// Function to filter cards
function filterCards(query) {
    cards.forEach(card => {
        const title = card.getAttribute('data-title').toLowerCase();
        if (title.includes(query) || query === '') {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
}

// Notification bell click event
document.getElementById('notification-icon').addEventListener('click', () => {
    alert('No new notifications!');
});

// Modal functionality for video
cards.forEach(card => {
    card.addEventListener('click', () => {
        const videoUrl = card.getAttribute('data-video');
        const videoFrame = document.getElementById('video-frame');
        
        // Set the iframe's src attribute to the Google Drive preview link
        const videoEmbedUrl = videoUrl.replace('/view', '/preview');
        videoFrame.src = videoEmbedUrl;
        
        // Open the modal to display the video
        modal.classList.add('active');
    });
});

// Close video modal
closeBtn.addEventListener('click', () => {
    // Close the modal by removing the active class
    modal.classList.remove('active');

    // Reset the iframe's src to stop the video
    document.getElementById('video-frame').src = '';
});


// Horizontal scroll functions
function scrollLeft(button) {
    const row = button.nextElementSibling;
    row.scrollBy({ left: -200, behavior: 'smooth' });
}

function scrollRight(button) {
    const row = button.previousElementSibling;
    row.scrollBy({ left: 200, behavior: 'smooth' });
}
// Hide the title if a thumbnail image is present in each card
document.querySelectorAll('.card').forEach(card => {
    const thumbnail = card.querySelector('.thumbnail');
    const title = card.querySelector('.title'); // Assuming you have a class 'title' for the text
    
    if (thumbnail && title) {
        title.style.display = 'none'; // Hide the title if the thumbnail is present
    }
});
cards.forEach(card => {
    const thumbnail = card.querySelector('img.thumbnail');
    const title = card.querySelector('.title');
  
    if (thumbnail) {
      title.style.display = 'none';  // Hide the title if thumbnail exists
    }
  });
  function signOut() {
    // Redirect to another page (change the URL to your desired destination)
    window.location.href = 'front.html'; // Replace with the actual file or URL
}