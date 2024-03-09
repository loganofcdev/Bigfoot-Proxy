// Function to get current time
function getCurrentTime() {
    const now = new Date();
    return now.toLocaleTimeString();
}

// Function to calculate device uptime percentage
function calculateUptime(startTime) {
    const currentTime = new Date();
    const elapsedTimeInSeconds = (currentTime - startTime) / 1000;
    const totalSecondsInDay = 24 * 60 * 60;
    const uptimePercentage = (elapsedTimeInSeconds / totalSecondsInDay) * 100;
    return uptimePercentage.toFixed(2); // Round to 2 decimal places
}

// Update time and uptime display every second
function updateTimeAndUptime() {
    const timeElement = document.getElementById('time');
    const uptimeElement = document.getElementById('uptime');

    const currentTime = getCurrentTime();
    const uptimePercentage = calculateUptime(new Date()); // Pass current time as start time

    timeElement.textContent = `Current Time: ${currentTime}`;
    uptimeElement.textContent = `Device Percentage: ${uptimePercentage}%`;

    // Update every second
    setTimeout(updateTimeAndUptime, 1000);
}

// Initial call to start updating time and uptime
updateTimeAndUptime();
