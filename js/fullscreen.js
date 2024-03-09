const fullscreenBtn = document.getElementById('fullscreen-btn');

// Function to toggle fullscreen mode
function toggleFullscreen() {
    if (document.fullscreenElement) {
        // If already in fullscreen, exit fullscreen
        document.exitFullscreen();
    } else {
        // Otherwise, enter fullscreen
        document.documentElement.requestFullscreen()
            .catch(err => {
                console.error('Failed to enter fullscreen:', err);
            });
    }
}

// Add click event listener to fullscreen button
fullscreenBtn.addEventListener('click', toggleFullscreen);
