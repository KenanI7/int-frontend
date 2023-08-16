function submitForm() {
    document.getElementById('search-form').submit();
}

const input = document.querySelector('.search-input');

input.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        submitForm();
    }
});

const navItems = document.querySelectorAll('.nav-item');
const contentDisplay = document.querySelector('.content-display');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

let currentIndex = 0; // To keep track of the currently selected nav item

// Function to update content based on selected nav item
function updateContent(index) {
    // Clear previously selected nav items
    navItems.forEach(item => item.classList.remove('active'));
    // Highlight the clicked nav item
    navItems[index].classList.add('active');
    // Display content based on clicked nav item
    contentDisplay.textContent = `Content for ${navItems[index].textContent}`;
}

// Add click event listener to each nav item
navItems.forEach((navItem, index) => {
    navItem.addEventListener('click', () => {
        currentIndex = index; // Update the current index
        updateContent(currentIndex);
    });
});

// Arrow functionality to scroll between nav items
leftArrow.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateContent(currentIndex);
    }
});

rightArrow.addEventListener('click', () => {
    if (currentIndex < navItems.length - 1) {
        currentIndex++;
        updateContent(currentIndex);
    }
});

// Initialize with the first item as selected
updateContent(currentIndex);
