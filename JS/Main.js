// Select all complete buttons
let Complete = document.getElementsByClassName('complete-btn');

// Get task count elements
let digitCount = document.getElementById('digit-count');
let intDigitCount = parseInt(digitCount.innerText);

let increaseCount = document.getElementById('increase-count');
let intIncreaseCount = parseInt(increaseCount.innerText);

let count = 0; // To track completed tasks

// Loop through each "Complete" button
for (let result of Complete) {
    result.addEventListener('click', function () {

        alert('✅ Board Updated Successfully');

        // Decrease remaining task
        intDigitCount--;
        digitCount.innerText = intDigitCount;

        // Increase completed task
        intIncreaseCount++;
        increaseCount.innerText = intIncreaseCount;

        // Disable the clicked button
        result.disabled = true;
        result.style.opacity = '0.5';
        result.style.cursor = 'not-allowed';

        // Get current time (with AM/PM)
        let now = new Date();
        let time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

        // ✅ Get the title of the clicked card
        let parentCard = result.closest('div.bg-sky-100');
        let titleElement = parentCard.querySelector('.title-details');
        let majorTitle = titleElement ? titleElement.innerText : "Untitled Task";

        // Add entry to Activity Log
        let monitorDetails = document.getElementById('monitor-log');
        let enterElement = document.createElement('p');
        enterElement.innerText = `📝 You have completed the task "${majorTitle}" at ${time}`;
        monitorDetails.appendChild(enterElement);

        // Clear History functionality
        let clearHistory = document.getElementById('clear-history');
        clearHistory.addEventListener('click', function () {
            monitorDetails.innerHTML = ''; // Clears the log
        });

        // Congratulatory message
        count++;
        if (count === 6) {
            alert('🎉 Congratulations! You completed all your tasks!');
        }
    });
}
